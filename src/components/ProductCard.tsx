import React from 'react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { ShoppingCart, Star, MapPin, Truck, Zap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { dispatch } = useCart();
    const { t } = useLanguage();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    const isOutOfStock = product.stock === 0;
    const isFreeShipping = product.shipping.fee === 0;

    // Format sold count (e.g., 1200 -> "1.2k", 500 -> "500")
    const formatSoldCount = (count: number) => {
        if (count >= 10000) return `${(count / 1000).toFixed(1)}k`;
        if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
        return count.toString();
    };

    return (
        <Link to={`/product/${product.id}`} className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 group relative">
            {/* Badges */}
            <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
                {product.isFlashSale && (
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1 shadow-lg">
                        <Zap size={12} fill="white" />
                        FLASH SALE
                    </div>
                )}
                {product.isPremium && (
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1 shadow-lg">
                        <Award size={12} />
                        PREMIUM
                    </div>
                )}
            </div>

            {/* Discount Badge */}
            {product.discountPercent && product.discountPercent > 0 && (
                <div className="absolute top-2 right-2 z-10 bg-yellow-400 text-red-600 px-2 py-1 rounded-md text-sm font-black shadow-lg">
                    -{product.discountPercent}%
                </div>
            )}

            {/* Image Section */}
            <div className="relative h-48 overflow-hidden bg-gray-50">
                <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${isOutOfStock ? 'opacity-50 grayscale' : ''}`}
                />
                {isOutOfStock && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <span className="text-white font-bold px-3 py-1 bg-red-500 rounded-full">{t('common.outOfStock')}</span>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-4">
                {/* Product Name */}
                <h3 className="text-base font-semibold text-gray-900 line-clamp-2 min-h-[2.5rem] mb-2 group-hover:text-orange-600 transition-colors">
                    {product.name}
                </h3>

                {/* Price Section */}
                <div className="mb-3">
                    <div className="flex items-baseline gap-2">
                        <span className="text-orange-600 text-2xl font-bold">
                            ฿{product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                            <span className="text-gray-400 text-sm line-through">
                                ฿{product.originalPrice.toLocaleString()}
                            </span>
                        )}
                    </div>
                </div>

                {/* Rating & Sold */}
                <div className="flex items-center gap-3 mb-3 text-sm">
                    <div className="flex items-center gap-1">
                        <Star size={14} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-gray-700 font-medium">{product.rating}</span>
                    </div>
                    <div className="w-px h-3 bg-gray-300"></div>
                    <span className="text-gray-500">
                        ขายแล้ว {formatSoldCount(product.soldCount)}
                    </span>
                </div>

                {/* Shipping Info */}
                <div className="flex items-center gap-2 mb-3 text-sm">
                    <Truck size={14} className={isFreeShipping ? "text-green-600" : "text-gray-400"} />
                    <span className={isFreeShipping ? "text-green-600 font-medium" : "text-gray-600"}>
                        {isFreeShipping ? "ส่งฟรี" : `฿${product.shipping.fee}`}
                    </span>
                    <MapPin size={12} className="text-gray-400 ml-1" />
                    <span className="text-gray-500 text-xs">{product.shipping.location}</span>
                </div>

                {/* Stock Status or Brand */}
                {!isOutOfStock && product.brand && (
                    <div className="text-xs text-gray-400 mb-3">
                        {product.brand}
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                        className="flex-1 py-2 px-3 border-2 border-orange-500 text-orange-500 rounded-lg font-medium text-sm hover:bg-orange-50 transition-colors"
                    >
                        ดูสินค้า
                    </button>
                    <button
                        onClick={handleAddToCart}
                        disabled={isOutOfStock}
                        className={`p-2 rounded-lg transition-all ${isOutOfStock
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                : 'bg-orange-600 text-white hover:bg-orange-700 hover:scale-105 active:scale-95'
                            }`}
                        title={t('common.addToCart')}
                    >
                        <ShoppingCart size={20} />
                    </button>
                </div>
            </div>
        </Link>
    );
};
