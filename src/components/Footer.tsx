import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-200 pt-16 pb-12 text-lg text-gray-600">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Customer Service */}
                    <div>
                        <h4 className="font-extrabold text-xl text-gray-900 mb-6 uppercase tracking-wider">Customer Service</h4>
                        <ul className="space-y-4 font-medium">
                            <li><a href="#" className="hover:text-orange-600 transition-colors">Help Centre</a></li>
                            <li><a href="#" className="hover:text-orange-600 transition-colors">How to Buy</a></li>
                            <li><a href="#" className="hover:text-orange-600 transition-colors">How to Sell</a></li>
                            <li><a href="#" className="hover:text-orange-600 transition-colors">Payment Methods</a></li>
                            <li><a href="#" className="hover:text-orange-600 transition-colors">Coins</a></li>
                            <li><a href="#" className="hover:text-orange-600 transition-colors">Shipping</a></li>
                        </ul>
                    </div>

                    {/* About Shopee */}
                    <div>
                        <h4 className="font-extrabold text-xl text-gray-900 mb-6 uppercase tracking-wider">About MiniShopee</h4>
                        <ul className="space-y-4 font-medium">
                            <li><a href="#" className="hover:text-orange-600 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-orange-600 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-orange-600 transition-colors">Policies</a></li>
                            <li><a href="#" className="hover:text-orange-600 transition-colors">Privacy</a></li>
                            <li><a href="#" className="hover:text-orange-600 transition-colors">Seller Centre</a></li>
                            <li><a href="#" className="hover:text-orange-600 transition-colors">Flash Deals</a></li>
                        </ul>
                    </div>

                    {/* Payment & Logistics */}
                    <div>
                        <h4 className="font-extrabold text-xl text-gray-900 mb-6 uppercase tracking-wider">Payment & Logistics</h4>
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            <div className="bg-white border-2 border-gray-100 p-2 rounded-lg shadow-sm flex items-center justify-center font-extrabold text-sm h-12 uppercase">VISA</div>
                            <div className="bg-white border-2 border-gray-100 p-2 rounded-lg shadow-sm flex items-center justify-center font-extrabold text-sm h-12 uppercase">Master</div>
                            <div className="bg-white border-2 border-gray-100 p-2 rounded-lg shadow-sm flex items-center justify-center font-extrabold text-sm h-12 uppercase">PromptPay</div>
                        </div>
                        <h4 className="font-extrabold text-xl text-gray-900 mb-6 uppercase tracking-wider mt-10">Logistics</h4>
                        <div className="grid grid-cols-3 gap-3">
                            <div className="bg-white border-2 border-gray-100 p-2 rounded-lg shadow-sm flex items-center justify-center font-extrabold text-sm h-12 uppercase">Kerry</div>
                            <div className="bg-white border-2 border-gray-100 p-2 rounded-lg shadow-sm flex items-center justify-center font-extrabold text-sm h-12 uppercase">J&T</div>
                            <div className="bg-white border-2 border-gray-100 p-2 rounded-lg shadow-sm flex items-center justify-center font-extrabold text-sm h-12 uppercase">EMS</div>
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className="font-extrabold text-xl text-gray-900 mb-6 uppercase tracking-wider">Follow Us</h4>
                        <div className="flex gap-6 mb-10">
                            <a href="#" className="text-gray-500 hover:text-blue-600 transform hover:scale-125 transition-all"><Facebook size={32} /></a>
                            <a href="#" className="text-gray-500 hover:text-pink-600 transform hover:scale-125 transition-all"><Instagram size={32} /></a>
                            <a href="#" className="text-gray-500 hover:text-blue-400 transform hover:scale-125 transition-all"><Twitter size={32} /></a>
                            <a href="#" className="text-gray-500 hover:text-red-600 transform hover:scale-125 transition-all"><Youtube size={32} /></a>
                        </div>
                        <h4 className="font-extrabold text-xl text-gray-900 mb-6 uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-4 font-medium">
                            <li className="flex items-center gap-3"><MapPin size={24} className="text-orange-500" /> Bangkok, Thailand</li>
                            <li className="flex items-center gap-3"><Mail size={24} className="text-orange-500" /> support@minishopee.com</li>
                            <li className="flex items-center gap-3"><Phone size={24} className="text-orange-500" /> 02-123-4567</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-10 text-center text-gray-500 text-base font-medium">
                    <p>&copy; {new Date().getFullYear()} MiniShopee. All rights reserved. <span className="ml-2 text-orange-600 font-bold">by ken ❤️</span></p>
                </div>
            </div>
        </footer>
    );
};
