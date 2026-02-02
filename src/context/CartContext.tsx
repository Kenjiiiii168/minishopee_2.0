import React, { createContext, useContext, useReducer, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { CartState, CartAction, CartContextType } from '../types';

const CartContext = createContext<CartContextType | undefined>(undefined);

const initialState: CartState = {
    items: [],
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                // Ensure we don't exceed stock
                if (existingItem.quantity >= existingItem.stock) return state;
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }
            return {
                ...state,
                items: [...state.items, { ...action.payload, quantity: 1 }],
            };
        }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };
        case 'UPDATE_QUANTITY': {
            const { id, quantity } = action.payload;
            if (quantity <= 0) {
                return {
                    ...state,
                    items: state.items.filter(item => item.id !== id),
                };
            }
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === id) {
                        // Check stock limit
                        if (quantity > item.stock) return item;
                        return { ...item, quantity };
                    }
                    return item;
                }),
            };
        }
        case 'CLEAR_CART':
            return initialState;
        default:
            return state;
    }
};

const STORAGE_KEY = 'minishopee_cart';

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Initialize from localStorage correctly
    const [state, dispatch] = useReducer(cartReducer, initialState, (defaultState) => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            return stored ? JSON.parse(stored) : defaultState;
        } catch (error) {
            console.error("Failed to load cart from localStorage", error);
            return defaultState;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (error) {
            console.error("Failed to save cart to localStorage", error);
        }
    }, [state]);

    // Derived state calculations
    const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 50 : 0; // Flat shipping rate 50 THB if cart not empty
    const discount = subtotal > 5000 ? subtotal * 0.1 : 0; // 10% discount if over 5000
    const grandTotal = subtotal - discount + shipping;

    return (
        <CartContext.Provider value={{ state, dispatch, totalItems, subtotal, discount, shipping, grandTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
