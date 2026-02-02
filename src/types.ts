export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    stock: number;
    description: string;
    shopName: string;
    shopRating: number;
    shopLocation: string;
    category: string;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface CartState {
    items: CartItem[];
}

export type CartAction =
    | { type: 'ADD_TO_CART'; payload: Product }
    | { type: 'REMOVE_FROM_CART'; payload: number }
    | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
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
