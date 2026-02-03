export interface Product {
    id: string | number;
    name: string;
    price: number;
    originalPrice?: number;
    discountPercent?: number;
    image: string;
    images?: string[];
    stock: number;
    description: string;
    shopName: string;
    shopRating: number;
    shopLocation: string;
    category: string;
    rating: number;
    reviewCount: number;
    soldCount: number;
    shipping: {
        fee: number;
        freeShippingMin?: number;
        location: string;
    };
    variants?: {
        colors?: string[];
        sizes?: string[];
    };
    brand?: string;
    isFlashSale?: boolean;
    flashSaleStock?: number;
    isPremium?: boolean;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface CartState {
    items: CartItem[];
}

export type CartAction =
    | { type: 'ADD_TO_CART'; payload: Product }
    | { type: 'REMOVE_FROM_CART'; payload: string | number }
    | { type: 'UPDATE_QUANTITY'; payload: { id: string | number; quantity: number } }
    | { type: 'CLEAR_CART' };

export interface CartContextType {
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
    totalItems: number;
    subtotal: number;
    discount: number;
    shipping: number;
    grandTotal: number;
}
