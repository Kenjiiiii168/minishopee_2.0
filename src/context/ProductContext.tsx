import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Product } from '../types';
import { products as defaultProducts } from '../data/products';
import { pb } from '../lib/pocketbase';

interface ProductContextType {
    products: Product[];
    userProducts: Product[];
    addProduct: (product: Omit<Product, 'id'>) => void;
    updateProduct: (id: number, product: Partial<Product>) => void;
    deleteProduct: (id: number) => void;
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
                    const mappedProducts: Product[] = records.map(record => ({
                        id: record.id as any, // PocketBase uses string IDs
                        name: record.name,
                        price: record.price,
                        originalPrice: record.original_price,
                        discountPercent: record.discount_percent,
                        image: record.image
                            ? pb.files.getUrl(record, record.image)
                            : record.image_url,
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
                    }));
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
            ? Math.max(...userProducts.map(p => p.id)) + 1
            : 1000;

        const newProduct: Product = {
            ...productData,
            id: newId,
        };

        setUserProducts(prev => [...prev, newProduct]);
    };

    const updateProduct = (id: number, updates: Partial<Product>) => {
        setUserProducts(prev =>
            prev.map(product =>
                product.id === id ? { ...product, ...updates } : product
            )
        );
    };

    const deleteProduct = (id: number) => {
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
