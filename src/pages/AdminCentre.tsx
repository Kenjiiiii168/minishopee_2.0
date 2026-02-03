import React, { useState } from 'react';
import { useCoupons, type Coupon } from '../context/CouponContext';
import { useProducts } from '../context/ProductContext';
import {
    TicketPercent,
    Users,
    Plus,
    Trash2,
    Settings,
    TrendingUp,
    Clock,
    CheckCircle
} from 'lucide-react';

export const AdminCentre: React.FC = () => {
    const { availableCoupons, addCoupon, deleteCoupon } = useCoupons();
    const { products } = useProducts();

    const [showCouponForm, setShowCouponForm] = useState(false);
    const [newCoupon, setNewCoupon] = useState<Coupon>({
        code: '',
        discount: '',
        minSpend: ''
    });

    // Mock Order History (since we don't have orders persist yet, but we will add it to context later if needed)
    // For now, let's just show some stats
    const stats = [
        { label: 'Total Products', value: products.length, image: '/favicon.png', color: 'bg-blue-500' },
        { label: 'Available Coupons', value: availableCoupons.length, icon: TicketPercent, color: 'bg-orange-500' },
        { label: 'System Users', value: 1254, icon: Users, color: 'bg-purple-500' },
        { label: 'Active Sessions', value: 42, icon: TrendingUp, color: 'bg-green-500' },
    ];

    const handleAddCoupon = (e: React.FormEvent) => {
        e.preventDefault();
        if (newCoupon.code && newCoupon.discount && newCoupon.minSpend) {
            addCoupon(newCoupon);
            setNewCoupon({ code: '', discount: '', minSpend: '' });
            setShowCouponForm(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="bg-gray-900 text-white rounded-3xl p-8 mb-8 shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2 opacity-80">
                        <Settings size={20} className="animate-spin-slow" />
                        <span className="font-bold tracking-widest uppercase text-sm">System Management</span>
                    </div>
                    <h1 className="text-4xl font-black mb-2 uppercase tracking-tight">Admin Centre</h1>
                    <p className="text-gray-400 font-medium">ควบคุมและดูแลระบบ MiniShopee</p>
                </div>
                {/* Decorative background circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600 rounded-full -mr-20 -mt-20 blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 right-40 w-32 h-32 bg-purple-600 rounded-full blur-2xl opacity-10"></div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:scale-105 transition-all">
                        <div className="flex items-center gap-4">
                            <div className={`${stat.color} p-4 rounded-2xl text-white shadow-lg flex items-center justify-center w-14 h-14`}>
                                {stat.image ? (
                                    <img src={stat.image} alt={stat.label} className="w-8 h-8 object-contain" />
                                ) : (
                                    stat.icon && <stat.icon size={24} />
                                )}
                            </div>
                            <div>
                                <p className="text-gray-500 font-bold text-xs uppercase tracking-wider">{stat.label}</p>
                                <p className="text-3xl font-black text-gray-900">{stat.value.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Coupon Management */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-50">
                        <div className="bg-orange-600 p-8 flex justify-between items-center">
                            <div className="flex items-center gap-4 text-white">
                                <TicketPercent size={32} strokeWidth={2.5} />
                                <div>
                                    <h2 className="text-2xl font-black uppercase tracking-tight leading-none">Coupon Manager</h2>
                                    <p className="text-orange-200 text-sm font-bold mt-1">Manage active system vouchers</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowCouponForm(!showCouponForm)}
                                className="bg-white text-orange-600 px-6 py-3 rounded-2xl font-black shadow-lg hover:scale-110 active:scale-95 transition-all flex items-center gap-2"
                            >
                                <Plus size={20} />
                                {showCouponForm ? 'Close' : 'Add New'}
                            </button>
                        </div>

                        {showCouponForm && (
                            <form onSubmit={handleAddCoupon} className="p-8 bg-orange-50 border-b border-orange-100">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                    <div>
                                        <label className="block text-xs font-black text-orange-600 uppercase tracking-widest mb-2">Coupon Code</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. MEGA99"
                                            className="w-full bg-white border-2 border-orange-100 rounded-xl px-4 py-3 font-bold focus:border-orange-500 outline-none transition-all uppercase"
                                            value={newCoupon.code}
                                            onChange={(e) => setNewCoupon({ ...newCoupon, code: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black text-orange-600 uppercase tracking-widest mb-2">Discount Text</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. ฿99 OFF"
                                            className="w-full bg-white border-2 border-orange-100 rounded-xl px-4 py-3 font-bold focus:border-orange-500 outline-none transition-all"
                                            value={newCoupon.discount}
                                            onChange={(e) => setNewCoupon({ ...newCoupon, discount: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black text-orange-600 uppercase tracking-widest mb-2">Min Spend</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Min. Spend ฿0"
                                            className="w-full bg-white border-2 border-orange-100 rounded-xl px-4 py-3 font-bold focus:border-orange-500 outline-none transition-all"
                                            value={newCoupon.minSpend}
                                            onChange={(e) => setNewCoupon({ ...newCoupon, minSpend: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="w-full bg-orange-600 text-white py-4 rounded-2xl font-black text-xl shadow-xl hover:bg-orange-700 transition-all flex items-center justify-center gap-2">
                                    <CheckCircle size={24} />
                                    Save New Coupon
                                </button>
                            </form>
                        )}

                        <div className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {availableCoupons.map((coupon, idx) => (
                                    <div key={idx} className="group relative bg-gray-50 rounded-3xl p-6 border-2 border-transparent hover:border-orange-500 transition-all flex items-center justify-between overflow-hidden">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md">
                                                <TicketPercent className="text-orange-600" size={32} />
                                            </div>
                                            <div>
                                                <div className="text-xl font-black text-gray-900">{coupon.code}</div>
                                                <div className="text-orange-600 font-black text-sm">{coupon.discount}</div>
                                                <div className="text-gray-400 text-xs font-bold uppercase">{coupon.minSpend}</div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => deleteCoupon(coupon.code)}
                                            className="bg-red-100 text-red-600 p-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-all hover:bg-red-600 hover:text-white"
                                        >
                                            <Trash2 size={24} />
                                        </button>

                                        {/* Background pattern */}
                                        <div className="absolute right-0 top-0 bottom-0 w-2 flex flex-col justify-around py-2 opacity-20">
                                            {[...Array(6)].map((_, i) => (
                                                <div key={i} className="w-4 h-4 bg-orange-600 rounded-full -mr-2"></div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar - Recent Orders (Placeholders) */}
                <div className="space-y-6">
                    <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-50 h-full">
                        <div className="flex items-center gap-3 mb-8">
                            <Clock className="text-blue-500" size={28} />
                            <h2 className="text-xl font-black uppercase tracking-tight">Recent Activity</h2>
                        </div>
                        <div className="space-y-6">
                            {[1, 2, 3, 4, 5].map((_, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all cursor-pointer">
                                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                                        <CheckCircle size={20} className="text-green-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-gray-900">Order #SHP-{1000 + i} Completed</p>
                                        <p className="text-xs text-gray-500 font-medium">Customer: user_{i + 5} • Time: {i + 1}h ago</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-8 border-2 border-gray-100 py-4 rounded-2xl font-black text-gray-400 hover:text-orange-600 hover:border-orange-500 transition-all uppercase tracking-widest text-xs">
                            View All Activity
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
