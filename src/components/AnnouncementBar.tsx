import React from 'react';
import { Truck, ShieldCheck, Ticket, AppWindow, Store, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AnnouncementBar: React.FC = () => {
    return (
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white text-xs md:text-sm py-2 px-1 font-bold shadow-sm">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center gap-4 md:gap-7">
                    <span className="flex items-center gap-1.5 hover:text-orange-100 transition-colors cursor-pointer group">
                        <ShieldCheck size={14} className="group-hover:scale-110 transition-transform" />
                        <span className="opacity-90">Shopee Guarantee</span>
                    </span>
                    <span className="flex items-center gap-1.5 hover:text-orange-100 transition-colors cursor-pointer group">
                        <Truck size={14} className="group-hover:scale-110 transition-transform" />
                        <span className="opacity-90">Free Shipping</span>
                    </span>
                </div>
                <div className="flex items-center gap-4 md:gap-7">
                    <Link to="/vouchers" className="flex items-center gap-1.5 cursor-pointer hover:text-orange-100 transition-colors group">
                        <Ticket size={14} className="group-hover:scale-110 transition-transform" />
                        <span>Vouchers</span>
                    </Link>
                    <Link to="/seller" className="flex items-center gap-1.5 cursor-pointer hover:text-orange-100 transition-colors group">
                        <Store size={14} className="group-hover:scale-110 transition-transform" />
                        <span>Seller Centre</span>
                    </Link>
                    <Link to="/admin" className="flex items-center gap-1.5 cursor-pointer hover:text-orange-100 transition-colors group">
                        <Settings size={14} className="group-hover:scale-110 transition-transform" />
                        <span>Admin</span>
                    </Link>
                    <span className="flex items-center gap-1.5 cursor-pointer hover:text-orange-100 transition-colors group">
                        <AppWindow size={14} className="group-hover:scale-110 transition-transform" />
                        <span>Download App</span>
                    </span>
                </div>
            </div>
        </div>
    );
};
