import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'th' | 'en';

type Translations = {
    [key in Language]: {
        [key: string]: string;
    };
};

const translations: Translations = {
    en: {
        'search.placeholder': 'Search products',
        'cart.title': 'Shopping Cart',
        'cart.empty': 'Your cart is empty',
        'cart.empty.desc': 'Looks like you haven\'t added anything to your cart yet.',
        'cart.startShopping': 'Start Shopping',
        'cart.continueShopping': 'Continue Shopping',
        'cart.summary': 'Order Summary',
        'cart.subtotal': 'Subtotal',
        'cart.discount': 'Discount',
        'cart.shipping': 'Shipping',
        'cart.total': 'Total',
        'cart.checkout': 'Checkout',
        'cart.product': 'Product Details',
        'cart.quantity': 'Quantity',
        'cart.price': 'Total',
        'common.stock': 'Stock',
        'common.addToCart': 'Add to Cart',
        'common.outOfStock': 'Out of Stock',
        'common.buyNow': 'Buy Now',
        'product.sold': 'sold',
        'product.rating': 'Rating',
        'shop.viewShop': 'View Shop',
        'flashSales': 'Flash Sale',
    },
    th: {
        'search.placeholder': 'ค้นหาสินค้า',
        'cart.title': 'รถเข็นของฉัน',
        'cart.empty': 'รถเข็นว่างเปล่า',
        'cart.empty.desc': 'ดูเหมือนคุณจะยังไม่ได้เลือกสินค้าลงตะกร้า',
        'cart.startShopping': 'เริ่มช้อปปิ้ง',
        'cart.continueShopping': 'เลือกซื้อสินค้าต่อ',
        'cart.summary': 'สรุปคำสั่งซื้อ',
        'cart.subtotal': 'ยอดรวมสินค้า',
        'cart.discount': 'ส่วนลด',
        'cart.shipping': 'ค่าจัดส่ง',
        'cart.total': 'ยอดสุทธิ',
        'cart.checkout': 'ชำระเงิน',
        'cart.product': 'รายละเอียดสินค้า',
        'cart.quantity': 'จำนวน',
        'cart.price': 'ราคารวม',
        'common.stock': 'คลัง',
        'common.addToCart': 'เพิ่มไปยังรถเข็น',
        'common.outOfStock': 'สินค้าหมด',
        'common.buyNow': 'ซื้อสินค้า',
        'product.sold': 'ขายแล้ว',
        'product.rating': 'คะแนน',
        'shop.viewShop': 'ดูร้านค้า',
        'flashSales': 'Flash Sale',
    }
};

interface LanguageContextType {
    currentLanguage: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentLanguage, setLanguage] = useState<Language>('th'); // Default to Thai

    const t = (key: string): string => {
        return translations[currentLanguage][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
