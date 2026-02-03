import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CartItem } from '../components/CartItem';
import { ArrowLeft } from 'lucide-react';

export const Cart: React.FC = () => {
    const { state, subtotal, discount, shipping, grandTotal, dispatch } = useCart();

    if (state.items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
                <img src="/favicon.png" alt="Empty Cart" className="w-32 h-32 text-gray-300 mb-6 opacity-30 grayscale" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
                <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
                <Link
                    to="/"
                    className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors"
                >
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Cart Items List */}
                <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
                    <div className="hidden sm:flex border-b border-gray-200 pb-2 mb-4 text-sm font-medium text-gray-500">
                        <div className="flex-1">Product Details</div>
                        <div className="w-32">Quantity</div>
                        <div className="w-24 text-right">Total</div>
                        <div className="w-10"></div>
                    </div>

                    <div className="divide-y divide-gray-100">
                        {state.items.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>

                    <div className="mt-6">
                        <Link to="/" className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium">
                            <ArrowLeft size={16} className="mr-2" />
                            Continue Shopping
                        </Link>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="lg:w-80 h-fit bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h2>

                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between text-gray-600">
                            <span>Subtotal</span>
                            <span>฿{subtotal.toLocaleString()}</span>
                        </div>
                        {discount > 0 && (
                            <div className="flex justify-between text-green-600">
                                <span>Discount (10%)</span>
                                <span>-฿{discount.toLocaleString()}</span>
                            </div>
                        )}
                        <div className="flex justify-between text-gray-600">
                            <span>Shipping</span>
                            <span>฿{shipping.toLocaleString()}</span>
                        </div>
                        <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between font-bold text-lg text-gray-900">
                            <span>Total</span>
                            <span className="text-orange-600">฿{grandTotal.toLocaleString()}</span>
                        </div>
                    </div>

                    <button
                        onClick={() => {
                            if (confirm('Proceed to checkout?')) {
                                dispatch({ type: 'CLEAR_CART' });
                                alert('Thank you for your purchase!');
                            }
                        }}
                        className="w-full mt-6 bg-orange-500 text-white py-3 rounded-md font-bold hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg"
                    >
                        Checkout
                    </button>

                    {subtotal <= 5000 && (
                        <p className="text-xs text-gray-500 mt-4 text-center">
                            Order ฿{(5000 - subtotal).toLocaleString()} more to get 10% discount!
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};
