import React from 'react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { dispatch } = useCart();
    const { t } = useLanguage();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent navigation when clicking button
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    const isOutOfStock = product.stock === 0;

    return (
        <Link to={`/product/${product.id}`} className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${isOutOfStock ? 'opacity-50 grayscale' : ''}`}
                />
                {isOutOfStock && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <span className="text-white font-bold px-3 py-1 bg-red-500 rounded-full">{t('common.outOfStock')}</span>
                    </div>
                )}
            </div>
            <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 line-clamp-2 min-h-[4rem] mb-3 group-hover:text-orange-600 transition-colors leading-relaxed">{product.name}</h3>

                <div className="flex items-end justify-between mb-4">
                    <div className="flex flex-col">
                        <span className="text-3xl font-extrabold text-orange-600">฿{product.price.toLocaleString()}</span>
                        <span className="text-lg text-gray-400 line-through font-medium">฿{(product.price * 1.2).toLocaleString()}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between text-base text-gray-600 mb-4 font-medium">
                    {isOutOfStock ? (
                        <span className="text-red-600 font-bold text-lg">{t('common.outOfStock')}</span>
                    ) : (
                        <span className="text-lg">{t('common.stock')}: {product.stock}</span>
                    )}
                </div>

                <button
                    onClick={handleAddToCart}
                    disabled={isOutOfStock}
                    className={`mt-2 w-full flex items-center justify-center gap-3 py-4 px-6 rounded-lg font-bold text-xl transition-all transform hover:scale-[1.02]
                        ${isOutOfStock
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-orange-600 text-white hover:bg-orange-700 active:bg-orange-800 shadow-lg hover:shadow-xl'}
                        `}
                >
                    <ShoppingCart size={28} />
                    {t('common.addToCart')}
                </button>
            </div>
        </Link>
    );
};
