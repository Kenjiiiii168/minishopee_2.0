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
                    console.log(`[PocketBase] Found ${records.length} records. Mapping...`);
                    const mappedProducts: Product[] = records.map(record => {
                        // --- IMAGE LOGIC: Extreme Fallback ---
                        let imageUrl = record.image_url || '';

                        // ถ้ามีไฟล์ใน PB ให้ใช้ไฟล์ก่อน
                        if (record.image && record.image !== "") {
                            imageUrl = pb.files.getUrl(record, record.image);
                        }

                        // ถ้ายังไม่มีรูปอีก ให้ใช้ placeholder
                        if (!imageUrl) {
                            imageUrl = 'https://via.placeholder.com/500x500?text=No+Image';
                        }

                        // --- ID LOGIC ---
                        const cleanId = String(record.id);

                        return {
                            id: cleanId,
                            name: record.name || 'Untitled Product',
                            price: Number(record.price) || 0,
                            originalPrice: record.original_price ? Number(record.original_price) : undefined,
                            discountPercent: record.discount_percent ? Number(record.discount_percent) : undefined,
                            image: imageUrl,
                            stock: record.stock !== undefined ? Number(record.stock) : 0,
                            description: record.description || "",
                            shopName: record.shop_name || "MiniShopee",
                            shopRating: Number(record.shop_rating) || 5.0,
                            shopLocation: record.shop_location || "Thailand",
                            category: record.category || "General",
                            brand: record.brand || "",
                            isFlashSale: !!record.is_flash_sale,
                            isPremium: !!record.is_premium,
                            soldCount: Number(record.sold_count) || 0,
                            rating: Number(record.rating) || 5.0,
                            reviewCount: 0,
                            shipping: {
                                fee: 0,
                                location: record.shop_location || "Thailand"
                            }
                        };
                    });

                    console.log('[PocketBase] Mapping complete. First item ID:', mappedProducts[0]?.id);
                    setProducts(mappedProducts);
                } else {
                    console.warn('[PocketBase] Table exists but has 0 records. Falling back to defaults.');
                    setProducts(defaultProducts);
                }
            } catch (error) {
                console.error('[PocketBase] Critical error during fetch:', error);
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
