import React from 'react';
import { Truck, ShieldCheck, Ticket } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
    return (
        <div className="bg-orange-600 text-white text-base py-3 font-medium">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <span className="flex items-center gap-2 hover:opacity-90 cursor-pointer"><ShieldCheck size={18} /> Shopee Guarantee</span>
                    <span className="flex items-center gap-2 hover:opacity-90 cursor-pointer"><Truck size={18} /> Free Shipping</span>
                </div>
                <div className="flex items-center gap-6">
                    <span className="flex items-center gap-2 cursor-pointer hover:underline"><Ticket size={18} /> Vouchers</span>
                    <span className="cursor-pointer hover:underline">Seller Centre</span>
                    <span className="cursor-pointer hover:underline">Download App</span>
                </div>
            </div>
        </div>
    );
};
