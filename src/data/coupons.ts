export interface CouponData {
    code: string;
    discount: string;
    minSpend: string;
    description: string;
    expiryDate: string;
}

export const availableCoupons: CouponData[] = [
    {
        code: 'NEWUSER',
        discount: '50% OFF',
        minSpend: 'No Min. Spend',
        description: 'Welcome gift for all new Shopee members! Valid on all categories.',
        expiryDate: '2026-12-31'
    },
    {
        code: 'FREESHIP',
        discount: 'Free Shipping',
        minSpend: 'Min. spend ฿99',
        description: 'Enjoy zero shipping fees on your next order. Limited to 1 use per user.',
        expiryDate: '2026-06-30'
    },
    {
        code: 'PAYDAY',
        discount: '15% Coins',
        minSpend: 'Min. spend ฿500',
        description: 'Get 15% cashback in Shopee Coins. Max 500 coins.',
        expiryDate: '2026-02-28'
    },
    {
        code: 'MALL20',
        discount: '20% OFF',
        minSpend: 'Mall Items Only',
        description: 'Exclusive discount for Shopee Mall products. Quality guaranteed.',
        expiryDate: '2026-03-15'
    },
];
