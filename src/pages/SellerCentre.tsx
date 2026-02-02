import React, { useState } from 'react';
import { Store, TrendingUp, ShieldCheck, Globe, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

export const SellerCentre: React.FC = () => {
    const [isRegistered, setIsRegistered] = useState(false);

    const stats = [
        { label: 'Active Sellers', value: '500K+', icon: <Store /> },
        { label: 'Monthly Visitors', value: '10M+', icon: <TrendingUp /> },
        { label: 'Safe Payments', value: '100%', icon: <ShieldCheck /> },
        { label: 'Global Reach', value: '10+ Countries', icon: <Globe /> },
    ];

    const benefits = [
        {
            title: 'Low Commission Fees',
            desc: 'Maximise your profits with our industry-leading low commission structural.',
            icon: <TrendingUp size={32} />
        },
        {
            title: 'Powerful Tools',
            desc: 'Access advanced analytics and marketing tools to grow your business.',
            icon: <Rocket size={32} />
        },
        {
            title: 'Seller Support',
            desc: 'Dedicated 24/7 support team to help you at every step of your journey.',
            icon: <ShieldCheck size={32} />
        }
    ];

    if (isRegistered) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center p-4">
                <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl text-center max-w-xl border-4 border-orange-100">
                    <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 size={60} className="text-orange-600" />
                    </div>
                    <h2 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Welcome Aboard!</h2>
                    <p className="text-xl text-gray-600 mb-10 font-medium">Your application is being processed. Our team will contact you within 24 hours to set up your store.</p>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="bg-orange-600 text-white px-10 py-4 rounded-2xl font-black text-xl shadow-xl hover:bg-orange-700 transition-all hover:scale-105"
                    >
                        Return to Shopping
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-900 text-white">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600"
                        alt="Retail"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl lg:text-8xl font-black mb-8 leading-tight tracking-tighter uppercase">
                        Start Your Online <br />
                        <span className="text-orange-500">Business Journey</span>
                    </h1>
                    <p className="text-xl lg:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto font-bold">
                        Join millions of sellers on MiniShopee and reach customers across the globe.
                    </p>
                    <button
                        onClick={() => setIsRegistered(true)}
                        className="bg-orange-600 text-white px-16 py-6 rounded-3xl font-black text-2xl lg:text-3xl shadow-2xl hover:bg-orange-700 hover:scale-105 active:scale-95 transition-all flex items-center gap-4 mx-auto"
                    >
                        Register as Seller
                        <ArrowRight size={32} strokeWidth={3} />
                    </button>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all text-center border-2 border-transparent hover:border-orange-500 group">
                                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-50 transition-colors">
                                    {React.cloneElement(stat.icon as React.ReactElement, { className: "w-8 h-8" } as any)}
                                </div>
                                <div className="text-3xl lg:text-4xl font-black text-gray-900 mb-2 truncate">{stat.value}</div>
                                <div className="text-lg font-bold text-gray-500 uppercase tracking-tighter">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl lg:text-6xl font-black text-center mb-20 uppercase tracking-tighter">
                        Why Sell on <span className="text-orange-600">MiniShopee?</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="flex flex-col items-center text-center group">
                                <div className="w-24 h-24 bg-orange-600 text-white rounded-[2rem] flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase">{benefit.title}</h3>
                                <p className="text-lg text-gray-600 font-medium leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-orange-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl lg:text-6xl font-black mb-10 uppercase tracking-tighter">Ready to become a top seller?</h2>
                    <button
                        onClick={() => setIsRegistered(true)}
                        className="bg-white text-orange-600 px-16 py-6 rounded-3xl font-black text-2xl lg:text-3xl shadow-2xl hover:bg-orange-50 transition-all active:scale-95"
                    >
                        Start Selling Today
                    </button>
                </div>
            </section>
        </div>
    );
};
