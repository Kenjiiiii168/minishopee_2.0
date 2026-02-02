import React, { createContext, useContext, useState, useEffect } from 'react';

interface CouponContextType {
    collectedCoupons: string[];
    collectCoupon: (code: string) => void;
    isCollected: (code: string) => boolean;
}

const CouponContext = createContext<CouponContextType | undefined>(undefined);

export const CouponProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [collectedCoupons, setCollectedCoupons] = useState<string[]>(() => {
        const saved = localStorage.getItem('collectedCoupons');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('collectedCoupons', JSON.stringify(collectedCoupons));
    }, [collectedCoupons]);

    const collectCoupon = (code: string) => {
        if (!collectedCoupons.includes(code)) {
            setCollectedCoupons(prev => [...prev, code]);
        }
    };

    const isCollected = (code: string) => collectedCoupons.includes(code);

    return (
        <CouponContext.Provider value={{ collectedCoupons, collectCoupon, isCollected }}>
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
