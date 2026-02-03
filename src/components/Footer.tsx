import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-200 pt-16 pb-12 text-lg text-gray-600">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Customer Service */}
                    <div>
                        <h4 className="font-extrabold text-xl text-gray-900 mb-6 uppercase tracking-wider">Customer Service</h4>
                        <ul className="space-y-4 font-medium">
                            <li><Link to="/help" className="hover:text-orange-600 transition-colors">Help Centre</Link></li>
                            <li><Link to="/buy" className="hover:text-orange-600 transition-colors">How to Buy</Link></li>
                            <li><Link to="/sell" className="hover:text-orange-600 transition-colors">How to Sell</Link></li>
                            <li><Link to="/payment" className="hover:text-orange-600 transition-colors">Payment Methods</Link></li>
                            <li><Link to="/coins" className="hover:text-orange-600 transition-colors">Coins</Link></li>
                            <li><Link to="/shipping" className="hover:text-orange-600 transition-colors">Shipping</Link></li>
                        </ul>
                    </div>

                    {/* About Shopee */}
                    <div>
                        <h4 className="font-extrabold text-xl text-gray-900 mb-6 uppercase tracking-wider">About MiniShopee</h4>
                        <ul className="space-y-4 font-medium">
                            <li><Link to="/about" className="hover:text-orange-600 transition-colors">About Us</Link></li>
                            <li><Link to="/careers" className="hover:text-orange-600 transition-colors">Careers</Link></li>
                            <li><Link to="/policies" className="hover:text-orange-600 transition-colors">Policies</Link></li>
                            <li><Link to="/privacy" className="hover:text-orange-600 transition-colors">Privacy</Link></li>
                            <li><Link to="/seller" className="hover:text-orange-600 transition-colors">Seller Centre</Link></li>
                            <li><Link to="/admin" className="hover:text-orange-600 transition-colors">Admin Centre</Link></li>
                            <li><Link to="/flash-deals" className="hover:text-orange-600 transition-colors">Flash Deals</Link></li>
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
                            <a href="https://www.facebook.com/Kentrollinglol/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transform hover:scale-125 transition-all"><Facebook size={32} /></a>
                            <a href="https://www.instagram.com/kenjiiiii0o0/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transform hover:scale-125 transition-all"><Instagram size={32} /></a>
                            <a href="#" className="text-gray-500 hover:text-blue-400 transform hover:scale-125 transition-all"><Twitter size={32} /></a>
                            <a href="https://www.youtube.com/@kenjiiiii104" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600 transform hover:scale-125 transition-all"><Youtube size={32} /></a>
                        </div>
                        <h4 className="font-extrabold text-xl text-gray-900 mb-6 uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-4 font-medium">
                            <li className="flex items-center gap-3"><MapPin size={24} className="text-orange-500" /> Bangkok, Thailand</li>
                            <li className="flex items-center gap-3"><Mail size={24} className="text-orange-500" /> iamkenkrub@gmail.com</li>
                            <li className="flex items-center gap-3"><Phone size={24} className="text-orange-500" /> xx-xxx-xxxx</li>
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
