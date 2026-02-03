import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Product } from '../types';
import { products as defaultProducts } from '../data/products';

interface ProductContextType {
    products: Product[];
    userProducts: Product[];
    addProduct: (product: Omit<Product, 'id'>) => void;
    updateProduct: (id: number, product: Partial<Product>) => void;
    deleteProduct: (id: number) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [userProducts, setUserProducts] = useState<Product[]>(() => {
        const stored = localStorage.getItem('userProducts');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('userProducts', JSON.stringify(userProducts));
    }, [userProducts]);

    // รวม products จาก default + user added
    const allProducts = [...defaultProducts, ...userProducts];

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
