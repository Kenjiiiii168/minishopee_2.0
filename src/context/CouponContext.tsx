import React, { createContext, useContext, useState, useEffect } from 'react';
import { availableCoupons as initialCoupons } from '../data/coupons';

export interface Coupon {
    code: string;
    discount: string;
    minSpend: string;
    description?: string;
    expiryDate?: string;
}

interface CouponContextType {
    availableCoupons: Coupon[];
    collectedCoupons: string[];
    collectCoupon: (code: string) => void;
    isCollected: (code: string) => boolean;
    addCoupon: (coupon: Coupon) => void;
    deleteCoupon: (code: string) => void;
}

const CouponContext = createContext<CouponContextType | undefined>(undefined);

export const CouponProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Current Coupons (System Level)
    const [availableCoupons, setAvailableCoupons] = useState<Coupon[]>(() => {
        const saved = localStorage.getItem('availableCoupons');
        return saved ? JSON.parse(saved) : initialCoupons;
    });

    // User's Collected Coupons
    const [collectedCoupons, setCollectedCoupons] = useState<string[]>(() => {
        const saved = localStorage.getItem('collectedCoupons');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('availableCoupons', JSON.stringify(availableCoupons));
    }, [availableCoupons]);

    useEffect(() => {
        localStorage.setItem('collectedCoupons', JSON.stringify(collectedCoupons));
    }, [collectedCoupons]);

    const collectCoupon = (code: string) => {
        if (!collectedCoupons.includes(code)) {
            setCollectedCoupons(prev => [...prev, code]);
        }
    };

    const isCollected = (code: string) => collectedCoupons.includes(code);

    const addCoupon = (coupon: Coupon) => {
        if (!availableCoupons.find(c => c.code === coupon.code)) {
            setAvailableCoupons(prev => [...prev, coupon]);
        }
    };

    const deleteCoupon = (code: string) => {
        setAvailableCoupons(prev => prev.filter(c => c.code !== code));
        // Also remove from user's collected if deleted from system
        setCollectedCoupons(prev => prev.filter(c => c !== code));
    };

    return (
        <CouponContext.Provider value={{
            availableCoupons,
            collectedCoupons,
            collectCoupon,
            isCollected,
            addCoupon,
            deleteCoupon
        }}>
            {children}
        </CouponContext.Provider>
    );
};

export const useCoupons = () => {
    const context = useContext(CouponContext);
    if (context === undefined) {
        throw new Error('useCoupons must be used within a CouponProvider');
    }
    return context;
};
