import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { ProductCard } from '../components/ProductCard';
import { useLanguage } from '../context/LanguageContext';

export const SearchPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { t } = useLanguage();
    const { products } = useProducts();
    const initialQuery = searchParams.get('q') || '';
    const [searchQuery, setSearchQuery] = useState(initialQuery);
    const [inputValue, setInputValue] = useState(initialQuery);

    useEffect(() => {
        const query = searchParams.get('q') || '';
        // Only update if value changed to minimize re-renders
        setSearchQuery(prev => prev !== query ? query : prev);
        setInputValue(prev => prev !== query ? query : prev);
    }, [searchParams]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            navigate(`/search?q=${encodeURIComponent(inputValue.trim())}`);
        }
    };

    const clearSearch = () => {
        setInputValue('');
        setSearchQuery('');
        navigate('/search');
    };

    const filteredProducts = searchQuery.trim()
        ? products.filter(product => {
            const query = searchQuery.toLowerCase();
            return (
                product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query) ||
                product.shopName.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            );
        })
        : [];

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                {/* Search Bar */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
                    <form onSubmit={handleSearch} className="flex items-center gap-3">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder={t('searchPlaceholder') || "ค้นหาสินค้า..."}
                                className="w-full pl-14 pr-12 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                                autoFocus
                            />
                            {inputValue && (
                                <button
                                    type="button"
                                    onClick={clearSearch}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl"
                        >
                            {t('search') || 'ค้นหา'}
                        </button>
                    </form>
                </div>

                {/* Search Results */}
                {searchQuery.trim() ? (
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold text-gray-800">
                                {t('searchResults') || 'ผลการค้นหา'}: <span className="text-orange-600">"{searchQuery}"</span>
                            </h1>
                            <p className="text-gray-500 mt-2">
                                {t('foundProducts') || 'พบสินค้า'} {filteredProducts.length} {t('items') || 'รายการ'}
                            </p>
                        </div>

                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all duration-500">
                                {filteredProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                                    <Search className="w-12 h-12 text-gray-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                    {t('noResults') || 'ไม่พบสินค้าที่ค้นหา'}
                                </h2>
                                <p className="text-gray-500 text-lg">
                                    {t('tryDifferentKeywords') || 'ลองค้นหาด้วยคำค้นอื่นดูนะ'}
                                </p>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl shadow-lg p-16 border border-gray-100 text-center">
                        <div className="bg-orange-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                            <Search className="w-12 h-12 text-orange-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            {t('startSearching') || 'เริ่มค้นหาสินค้า'}
                        </h2>
                        <p className="text-gray-500 text-lg">
                            {t('enterKeywords') || 'กรอกคำค้นหาด้านบนเพื่อค้นหาสินค้าที่คุณต้องการ'}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
