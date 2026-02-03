import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { ShoppingCart, Star, MapPin, ArrowLeft, Store } from 'lucide-react';

export const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { products, loading } = useProducts();
    const { dispatch } = useCart();
    const { t } = useLanguage();

    const product = products.find(p => String(p.id) === String(id));

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
                <p className="text-gray-500">กำลังโหลดข้อมูลสินค้า...</p>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-gray-800">Product not found</h2>
                <button
                    onClick={() => navigate('/')}
                    className="mt-4 text-orange-500 hover:underline"
                >
                    Back to Home
                </button>
            </div>
        );
    }

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    const isOutOfStock = product.stock === 0;

    return (
        <div className="container mx-auto px-4 py-8">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-gray-600 hover:text-orange-600 mb-6 transition-colors"
            >
                <ArrowLeft size={20} />
                Back
            </button>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                    {/* Image Section */}
                    <div className="relative">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-96 object-contain bg-gray-50 rounded-lg"
                        />
                        {isOutOfStock && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                                <span className="text-white font-bold text-2xl px-6 py-2 bg-red-500 rounded-full">{t('common.outOfStock')}</span>
                            </div>
                        )}
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center text-orange-500">
                                <span className="underline mr-1">{product.rating || 0}</span>
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        fill={i < Math.floor(product.rating || 0) ? "currentColor" : "none"}
                                        className={i < Math.floor(product.rating || 0) ? "" : "text-gray-300"}
                                    />
                                ))}
                            </div>
                            <div className="w-px h-4 bg-gray-300"></div>
                            <span className="text-gray-500">{product.soldCount || 0} {t('product.sold')}</span>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg mb-6">
                            <div className="text-3xl font-bold text-orange-600">฿{product.price.toLocaleString()}</div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                            <div className="text-gray-500">{t('common.stock')}</div>
                            <div>{product.stock} pieces</div>
                            <div className="text-gray-500">{t('cart.shipping')}</div>
                            <div>
                                {product.shipping?.fee === 0 ? t('cart.freeShipping') : `฿${product.shipping?.fee || 50}`}
                                {product.shipping?.freeShippingMin && ` (Free over ฿${product.shipping.freeShippingMin.toLocaleString()})`}
                            </div>
                        </div>

                        <div className="flex gap-4 mt-auto">
                            <button
                                onClick={handleAddToCart}
                                disabled={isOutOfStock}
                                className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-md font-bold border-2 transition-colors
                                    ${isOutOfStock
                                        ? 'border-gray-300 text-gray-400 cursor-not-allowed'
                                        : 'border-orange-500 text-orange-500 hover:bg-orange-50'
                                    }`}
                            >
                                <ShoppingCart size={20} />
                                {t('common.addToCart')}
                            </button>
                            <button
                                onClick={() => {
                                    handleAddToCart();
                                    navigate('/cart');
                                }}
                                disabled={isOutOfStock}
                                className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-md font-bold transition-colors
                                    ${isOutOfStock
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'bg-orange-500 text-white hover:bg-orange-600 shadow-md hover:shadow-lg'
                                    }`}
                            >
                                {t('common.buyNow')}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Seller Info */}
                <div className="border-t border-gray-100 p-6">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                            <Store size={32} />
                        </div>
                        <div>
                            <div className="font-bold text-lg text-gray-800">{product.shopName}</div>
                            <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                                <span className="flex items-center gap-1"><MapPin size={14} /> {product.shopLocation}</span>
                                <span className="flex items-center gap-1"><Star size={14} className="text-orange-500" /> {product.shopRating} Rating</span>
                            </div>
                            <div className="mt-2 flex gap-3">
                                <button className="text-red-500 border border-red-500 px-3 py-1 rounded-sm text-xs hover:bg-red-50 transition-colors">Chat Now</button>
                                <Link to="#" className="text-gray-500 border border-gray-300 px-3 py-1 rounded-sm text-xs hover:bg-gray-50 transition-colors">{t('shop.viewShop')}</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Description */}
                <div className="border-t border-gray-100 p-6 bg-gray-50/50">
                    <h3 className="font-bold text-lg text-gray-800 mb-4">{t('cart.product')}</h3>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                        {product.description}
                    </p>
                </div>
            </div>
        </div>
    );
};
