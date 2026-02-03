import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Product } from '../types';
import { products as defaultProducts } from '../data/products';
import { pb } from '../lib/pocketbase';

interface ProductContextType {
    products: Product[];
    userProducts: Product[];
    addProduct: (product: Omit<Product, 'id'>) => void;
    updateProduct: (id: string | number, product: Partial<Product>) => void;
    deleteProduct: (id: string | number) => void;
    loading: boolean;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [userProducts, setUserProducts] = useState<Product[]>(() => {
        const stored = localStorage.getItem('userProducts');
        return stored ? JSON.parse(stored) : [];
    });

    // โหลดข้อมูลจาก PocketBase
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const records = await pb.collection('products').getFullList();

                if (records.length > 0) {
                    console.log('PocketBase records found:', records.length);
                    const mappedProducts: Product[] = records.map(record => {
                        let imageUrl = record.image_url;
                        if (record.image) {
                            imageUrl = pb.files.getUrl(record, record.image);
                        }

                        // Debug log for first item to check image URL
                        if (record.name === records[0].name) {
                            console.log(`Product: ${record.name}, Image: ${imageUrl}`);
                        }

                        return {
                            id: record.id,
                            name: record.name || 'No Name',
                            price: record.price || 0,
                            originalPrice: record.original_price,
                            discountPercent: record.discount_percent,
                            image: imageUrl || 'https://via.placeholder.com/500x500?text=No+Image',
                            stock: record.stock ?? 0,
                            description: record.description || "",
                            shopName: record.shop_name || "MiniShopee Shop",
                            shopRating: record.shop_rating || 5.0,
                            shopLocation: record.shop_location || "Thailand",
                            category: record.category || "General",
                            brand: record.brand || "",
                            isFlashSale: !!record.is_flash_sale,
                            isPremium: !!record.is_premium,
                            soldCount: record.sold_count || 0,
                            rating: record.rating || 5.0,
                            reviewCount: 0,
                            shipping: {
                                fee: 0,
                                location: record.shop_location || "Thailand"
                            }
                        };
                    });
                    setProducts(mappedProducts);
                } else {
                    console.log('No PocketBase records, using defaults');
                    setProducts(defaultProducts);
                }
            } catch (error) {
                console.error('Error fetching products from PocketBase:', error);
                setProducts(defaultProducts);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();

        // Subscribe to changes
        pb.collection('products').subscribe('*', function (_e) {
            fetchProducts();
        });

        return () => {
            pb.collection('products').unsubscribe('*');
        };
    }, []);

    useEffect(() => {
        localStorage.setItem('userProducts', JSON.stringify(userProducts));
    }, [userProducts]);

    // ใช้ข้อมูลจาก PB เป็นหลัก ถ้าไม่มีค่อยใช้ local
    const allProducts = products.length > 0 ? products : [...defaultProducts, ...userProducts];

    const addProduct = (productData: Omit<Product, 'id'>) => {
        // Generate new ID (start from 1000 to avoid conflicts)
        const newId = userProducts.length > 0
            ? Math.max(...userProducts.map(p => Number(p.id))) + 1
            : 1000;

        const newProduct: Product = {
            ...productData,
            id: newId,
        };

        setUserProducts(prev => [...prev, newProduct]);
    };

    const updateProduct = (id: string | number, updates: Partial<Product>) => {
        setUserProducts(prev =>
            prev.map(product =>
                product.id === id ? { ...product, ...updates } : product
            )
        );
    };

    const deleteProduct = (id: string | number) => {
        setUserProducts(prev => prev.filter(product => product.id !== id));
    };

    return (
        <ProductContext.Provider
            value={{
                products: allProducts,
                userProducts,
                addProduct,
                updateProduct,
                deleteProduct,
                loading
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProducts must be used within ProductProvider');
    }
    return context;
};
