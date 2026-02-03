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
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>(defaultProducts);
    const [userProducts, setUserProducts] = useState<Product[]>(() => {
        const stored = localStorage.getItem('userProducts');
        return stored ? JSON.parse(stored) : [];
    });

    // โหลดข้อมูลจาก PocketBase
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const records = await pb.collection('products').getFullList();

                if (records.length > 0) {
                    // Map PocketBase records to our Product type
                    const mappedProducts: Product[] = records.map(record => {
                        // เลือกใช้รูปจากไฟล์ก่อน (ถ้ามี), ถ้าไม่มีใช้ image_url (ถ้ามี), ถ้าไม่มีใช้รูป default
                        let imageUrl = record.image_url;
                        if (record.image) {
                            imageUrl = pb.files.getUrl(record, record.image);
                        }

                        return {
                            id: record.id,
                            name: record.name,
                            price: record.price,
                            originalPrice: record.original_price,
                            discountPercent: record.discount_percent,
                            image: imageUrl || 'https://via.placeholder.com/500x500?text=No+Image',
                            stock: record.stock,
                            description: record.description,
                            shopName: record.shop_name,
                            shopRating: record.shop_rating,
                            shopLocation: record.shop_location,
                            category: record.category,
                            brand: record.brand,
                            isFlashSale: record.is_flash_sale,
                            isPremium: record.is_premium,
                            soldCount: record.sold_count,
                            rating: record.rating,
                            reviewCount: 0, // Default for now
                            shipping: {
                                fee: 0,
                                location: record.shop_location
                            }
                        };
                    });
                    setProducts(mappedProducts);
                } else {
                    setProducts(defaultProducts);
                }
            } catch (error) {
                console.error('Error fetching products from PocketBase:', error);
                // ถ้าดึงไม่สำเร็จ ให้ใช้ข้อมูล Mock เหมือนเดิม
                setProducts(defaultProducts);
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
