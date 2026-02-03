import React, { createContext, useContext, useState, useEffect } from 'react';
import { availableCoupons as initialCoupons } from '../data/coupons';
import { pb } from '../lib/pocketbase';

export interface Coupon {
    id?: string;
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
    deleteCoupon: (codeOrId: string) => void;
}

const CouponContext = createContext<CouponContextType | undefined>(undefined);

export const CouponProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Current Coupons (System Level)
    const [availableCoupons, setAvailableCoupons] = useState<Coupon[]>(initialCoupons);

    // User's Collected Coupons
    const [collectedCoupons, setCollectedCoupons] = useState<string[]>(() => {
        const saved = localStorage.getItem('collectedCoupons');
        return saved ? JSON.parse(saved) : [];
    });

    // Fetch coupons from PocketBase
    useEffect(() => {
        const fetchCoupons = async () => {
            try {
                const records = await pb.collection('coupons').getFullList();

                if (records.length > 0) {
                    const mappedCoupons: Coupon[] = records.map(record => ({
                        id: record.id,
                        code: record.code,
                        discount: record.discount,
                        minSpend: record.min_spend,
                    }));
                    setAvailableCoupons(mappedCoupons);
                }
            } catch (error) {
                console.error('Error fetching coupons from PocketBase:', error);
                setAvailableCoupons(initialCoupons);
            }
        };

        fetchCoupons();

        // Subscribe to real-time changes
        pb.collection('coupons').subscribe('*', function (_e) {
            fetchCoupons();
        });

        return () => {
            pb.collection('coupons').unsubscribe('*');
        };
    }, []);

    useEffect(() => {
        localStorage.setItem('collectedCoupons', JSON.stringify(collectedCoupons));
    }, [collectedCoupons]);

    const collectCoupon = (code: string) => {
        if (!collectedCoupons.includes(code)) {
            setCollectedCoupons(prev => [...prev, code]);
        }
    };

    const isCollected = (code: string) => collectedCoupons.includes(code);

    const addCoupon = async (coupon: Coupon) => {
        try {
            await pb.collection('coupons').create({
                code: coupon.code,
                discount: coupon.discount,
                min_spend: coupon.minSpend,
            });
        } catch (error) {
            console.error('Error adding coupon to PocketBase:', error);
            // Fallback for UI if PB fails
            if (!availableCoupons.find(c => c.code === coupon.code)) {
                setAvailableCoupons(prev => [...prev, coupon]);
            }
        }
    };

    const deleteCoupon = async (id: string) => {
        try {
            // Check if it's a PB ID (usually 15 chars) or a code
            if (id.length > 10) {
                await pb.collection('coupons').delete(id);
            } else {
                // Find potential PB record by code if ID isn't provided
                const record = await pb.collection('coupons').getFirstListItem(`code="${id}"`);
                if (record) {
                    await pb.collection('coupons').delete(record.id);
                }
            }
        } catch (error) {
            console.error('Error deleting coupon from PocketBase:', error);
        }

        // Always update local state for immediate feedback
        setAvailableCoupons(prev => prev.filter(c => c.id !== id && c.code !== id));
        setCollectedCoupons(prev => prev.filter(c => c !== id));
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

