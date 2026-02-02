import React from 'react';
import type { CartItem as CartItemType } from '../types';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartItemProps {
    item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const { dispatch } = useCart();

    const handleIncrement = () => {
        if (item.quantity < item.stock) {
            dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity + 1 } });
        }
    };

    const handleDecrement = () => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity - 1 } });
    };

    const handleRemove = () => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: item.id });
    };

    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 py-4 border-b border-gray-100 last:border-0">
            <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 w-full text-center sm:text-left">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-orange-500 font-bold mt-1">฿{item.price.toLocaleString()}</p>
            </div>

            <div className="flex items-center gap-3">
                <div className="flex items-center border border-gray-300 rounded-md">
                    <button
                        onClick={handleDecrement}
                        className="p-1 hover:bg-gray-100 text-gray-600 disabled:opacity-50"
                    >
                        <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-medium text-sm">{item.quantity}</span>
                    <button
                        onClick={handleIncrement}
                        disabled={item.quantity >= item.stock}
                        className="p-1 hover:bg-gray-100 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Plus size={16} />
                    </button>
                </div>
            </div>

            <div className="w-24 text-right font-bold text-gray-800 hidden sm:block">
                ฿{(item.price * item.quantity).toLocaleString()}
            </div>

            <button
                onClick={handleRemove}
                className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
                title="Remove Item"
            >
                <Trash2 size={20} />
            </button>
        </div>
    );
};
