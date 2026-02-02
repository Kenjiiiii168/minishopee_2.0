import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ShoppingBag, Globe, LogIn, LogOut, Store, Ticket } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { useCoupons } from '../context/CouponContext';
import { LoginModal } from './LoginModal';

export const Navbar: React.FC = () => {
    const { totalItems } = useCart();
    const { currentLanguage, setLanguage } = useLanguage();
    const { user, logout } = useAuth();
    const { collectedCoupons } = useCoupons();
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [modalMode, setModalMode] = useState<'login' | 'signup'>('login');

    const openModal = (mode: 'login' | 'signup') => {
        setModalMode(mode);
        setIsLoginOpen(true);
    };

    return (
        <>
            <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
                <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-2">
                    <Link to="/" className="flex items-center gap-2 text-2xl md:text-3xl font-black text-orange-600 shrink-0">
                        <ShoppingBag className="w-7 h-7 md:w-8 md:h-8" strokeWidth={3} />
                        <span className="hidden sm:inline">MiniShopee</span>
                    </Link>

                    <div className="flex items-center gap-2 md:gap-8 flex-1 justify-end">
                        {/* Seller Centre Link */}
                        <Link to="/seller" className="hidden lg:flex items-center gap-2 text-sm md:text-base font-bold text-gray-600 hover:text-orange-600 transition-colors border-r border-gray-200 pr-4">
                            <Store size={18} />
                            <span>Seller Centre</span>
                        </Link>

                        {/* Language Switcher - Compact on Mobile */}
                        <div className="flex items-center gap-1 md:gap-2 text-lg md:text-xl font-bold">
                            <Globe size={20} className="text-gray-500 hidden sm:block" />
                            <button
                                onClick={() => setLanguage('th')}
                                className={`px-2 py-0.5 md:px-3 md:py-1 rounded-lg text-sm md:text-base transition-colors ${currentLanguage === 'th' ? 'bg-orange-600 text-white shadow-md' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                            >
                                ไทย
                            </button>
                            <button
                                onClick={() => setLanguage('en')}
                                className={`px-2 py-0.5 md:px-3 md:py-1 rounded-lg text-sm md:text-base transition-colors ${currentLanguage === 'en' ? 'bg-orange-600 text-white shadow-md' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                            >
                                EN
                            </button>
                        </div>

                        {/* Auth Section - Icons only on mobile */}
                        {user ? (
                            <div className="flex items-center gap-2 md:gap-4">
                                <div className="flex items-center gap-2">
                                    <img src={user.avatar} alt={user.name} className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-orange-200 p-0.5 shadow-sm" />
                                    <span className="text-lg md:text-xl font-black text-gray-800 hidden lg:block">{user.name}</span>
                                </div>
                                <button
                                    onClick={logout}
                                    className="p-1.5 md:p-2 text-gray-400 hover:text-red-500 transition-colors hover:bg-red-50 rounded-full"
                                    title="Logout"
                                >
                                    <LogOut className="w-6 h-6 md:w-7 md:h-7" />
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2 md:gap-6">
                                <button
                                    onClick={() => openModal('signup')}
                                    className="text-sm md:text-xl font-black text-gray-700 hover:text-orange-600 transition-colors uppercase tracking-tight"
                                >
                                    <span className="hidden sm:inline">Sign Up</span>
                                    <span className="sm:hidden text-[11px]">SIGNUP</span>
                                </button>
                                <div className="w-px h-4 md:h-6 bg-gray-300"></div>
                                <button
                                    onClick={() => openModal('login')}
                                    className="flex items-center gap-1 md:gap-2 text-sm md:text-xl font-black text-gray-700 hover:text-orange-600 transition-colors uppercase tracking-tight"
                                >
                                    <LogIn className="w-6 h-6 md:w-7 md:h-7" />
                                    <span className="hidden sm:inline">Login</span>
                                </button>
                            </div>
                        )}

                        <div className="w-px h-6 md:h-8 bg-gray-200"></div>

                        {/* Vouchers Count */}
                        <Link to="/vouchers" className="relative p-2 md:p-3 text-gray-700 hover:text-orange-600 cursor-pointer transition-all hover:scale-110 shrink-0">
                            <Ticket className="w-7 h-7 md:w-8 md:h-8" strokeWidth={2.5} />
                            {collectedCoupons.length > 0 && (
                                <span className="absolute top-0 right-0 md:top-1 md:right-1 bg-orange-600 text-white text-[10px] md:text-sm font-black w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full border-2 border-white shadow-lg">
                                    {collectedCoupons.length}
                                </span>
                            )}
                        </Link>

                        {/* Cart */}
                        <Link to="/cart" className="relative p-2 md:p-3 text-gray-700 hover:text-orange-600 transition-all hover:scale-110 shrink-0">
                            <ShoppingCart className="w-7 h-7 md:w-8 md:h-8" strokeWidth={2.5} />
                            {totalItems > 0 && (
                                <span className="absolute -top-0 -right-0 md:top-1 md:right-1 bg-red-600 text-white text-[10px] md:text-sm font-black w-5 h-5 md:w-7 md:h-7 flex items-center justify-center rounded-full border-2 border-white shadow-lg">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </nav>

            <LoginModal
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
                initialMode={modalMode}
            />
        </>
    );
};
