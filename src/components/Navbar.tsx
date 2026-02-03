import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Globe, LogIn, LogOut, Store, Ticket, Search } from 'lucide-react';
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
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const openModal = (mode: 'login' | 'signup') => {
        setModalMode(mode);
        setIsLoginOpen(true);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery('');
        }
    };

    return (
        <>
            <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
                <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4 md:gap-8">
                    {/* Logo Area */}
                    <Link to="/" className="flex items-center gap-2 group shrink-0">
                        <div className="relative">
                            <div className="bg-orange-600 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden border-2 border-orange-500">
                                <img src="/favicon.png" alt="MiniShopee Logo" className="w-full h-full object-contain p-1" />
                            </div>
                        </div>
                        <span className="text-2xl md:text-3xl font-black text-orange-600 tracking-tighter uppercase hidden sm:inline-block">MiniShopee</span>
                    </Link>

                    {/* Search Bar - Premium Style */}
                    <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl lg:max-w-2xl">
                        <div className="relative w-full group">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="ค้นหาสินค้าแบรนด์ดัง ราคาโดนใจ..."
                                className="w-full pl-5 pr-14 py-3 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-orange-500 focus:outline-none transition-all duration-300 shadow-inner text-base font-medium placeholder:text-gray-400"
                            />
                            <button
                                type="submit"
                                className="absolute right-1 top-1 bottom-1 w-12 flex items-center justify-center bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors shadow-md"
                            >
                                <Search size={20} strokeWidth={3} />
                            </button>
                        </div>
                    </form>

                    <div className="flex items-center gap-2 md:gap-8 flex-1 sm:flex-initial justify-end">
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
                        <Link to="/vouchers" className="relative p-2 md:p-3 text-gray-700 hover:text-orange-600 cursor-pointer transition-all hover:scale-125 group shrink-0">
                            <Ticket className="w-7 h-7 md:w-8 md:h-8 group-hover:rotate-12 transition-transform" strokeWidth={2.5} />
                            {collectedCoupons.length > 0 && (
                                <span className="absolute top-0 right-0 md:top-1 md:right-1 bg-orange-600 text-white text-[10px] md:text-sm font-black w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full border-2 border-white shadow-lg animate-pulse">
                                    {collectedCoupons.length}
                                </span>
                            )}
                        </Link>

                        {/* Cart */}
                        <Link to="/cart" className="relative p-2 md:p-3 text-gray-700 hover:text-orange-600 transition-all hover:scale-125 group shrink-0">
                            <ShoppingCart className="w-7 h-7 md:w-8 md:h-8 group-hover:-rotate-12 transition-transform" strokeWidth={2.5} />
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
