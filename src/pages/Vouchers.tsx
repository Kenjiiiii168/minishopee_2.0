import React from 'react';
import { useCoupons } from '../context/CouponContext';
import { Ticket, ArrowLeft, Clock, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Vouchers: React.FC = () => {
    const { collectedCoupons, availableCoupons } = useCoupons();

    const myVouchers = availableCoupons.filter(c => collectedCoupons.includes(c.code));

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
                <div className="container mx-auto px-4 h-16 flex items-center gap-4">
                    <Link to="/" className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600">
                        <ArrowLeft size={24} />
                    </Link>
                    <h1 className="text-xl md:text-2xl font-black text-gray-900 uppercase tracking-tight">My Vouchers</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {myVouchers.length === 0 ? (
                    <div className="bg-white rounded-[2rem] p-12 text-center shadow-xl max-w-2xl mx-auto border-4 border-dashed border-gray-100 mt-10">
                        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8">
                            <Ticket size={48} className="text-gray-300" />
                        </div>
                        <h2 className="text-3xl font-black text-gray-900 mb-4 uppercase tracking-tighter">No Vouchers Yet!</h2>
                        <p className="text-xl text-gray-500 mb-10 font-medium">Collect vouchers from the home page to enjoy exclusive discounts on your favorite products.</p>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-3 bg-orange-600 text-white px-10 py-4 rounded-2xl font-black text-xl shadow-xl hover:bg-orange-700 transition-all hover:scale-105"
                        >
                            <img src="/favicon.png" alt="MiniShopee" className="w-8 h-8 object-contain" />
                            Go Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {myVouchers.map((voucher, index) => (
                            <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-transparent hover:border-orange-500 transition-all group flex">
                                {/* Left Section - Design */}
                                <div className="w-32 bg-orange-600 flex flex-col items-center justify-center text-white p-4 relative shrink-0">
                                    <Ticket size={40} strokeWidth={2.5} className="mb-2 opacity-50" />
                                    <div className="text-sm font-black uppercase tracking-widest text-orange-200">SHOPEE</div>

                                    {/* Dotted edge */}
                                    <div className="absolute right-0 top-0 bottom-0 w-1 flex flex-col justify-around py-2">
                                        {[...Array(10)].map((_, i) => (
                                            <div key={i} className="w-2 h-2 bg-gray-50 rounded-full -mr-1"></div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Section - Content */}
                                <div className="flex-1 p-6 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-2xl font-black text-orange-600 leading-tight">{voucher.discount}</h3>
                                            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-black uppercase">Active</span>
                                        </div>
                                        <p className="text-gray-900 font-extrabold text-lg mb-1">{voucher.minSpend}</p>
                                        <p className="text-gray-500 text-sm font-medium line-clamp-1 mb-3">{voucher.description}</p>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                                        <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-tighter">
                                            <Clock size={14} />
                                            Exp: {voucher.expiryDate}
                                        </div>
                                        <div className="flex items-center gap-1 text-orange-500 text-xs font-black hover:underline cursor-pointer">
                                            <Info size={14} />
                                            T&C
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Promotional Tip */}
                {myVouchers.length > 0 && (
                    <div className="mt-12 bg-orange-50 border-2 border-orange-100 p-6 rounded-3xl flex items-center gap-6">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md shrink-0">
                            <Info size={32} className="text-orange-600" />
                        </div>
                        <div>
                            <h4 className="text-xl font-black text-gray-900 uppercase tracking-tighter">Pro Tip!</h4>
                            <p className="text-gray-600 font-medium">Vouchers are applied automatically at checkout for the best savings! Happy shopping.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
