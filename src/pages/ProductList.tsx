import React, { useState, useEffect } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { HeroBanner } from '../components/HeroBanner';
import { Categories } from '../components/Categories';
import { Coupons } from '../components/Coupons';
import { TrendingBar } from '../components/TrendingBar';
import { Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ProductList: React.FC = () => {
    const { t } = useLanguage();
    const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 0 });
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [showAll, setShowAll] = useState(false);
    const productSectionRef = React.useRef<HTMLDivElement>(null);

    const scrollToProducts = () => {
        productSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleCategorySelect = (category: string | null) => {
        setSelectedCategory(category);
        if (category) setShowAll(true); // Auto-expand when filtering
        setTimeout(scrollToProducts, 100);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return { hours: 2, minutes: 45, seconds: 0 }; // Reset
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (val: number) => val.toString().padStart(2, '0');

    const filteredProducts = selectedCategory
        ? products.filter(p => p.category === selectedCategory)
        : products;

    const visibleProducts = showAll ? filteredProducts : filteredProducts.slice(0, 8);

    return (
        <div className="flex flex-col gap-6 pb-8 w-full overflow-x-hidden">
            {/* Hero Section */}
            <section className="w-full shrink-0">
                <HeroBanner onCategorySelect={handleCategorySelect} />
            </section>

            {/* Trending Section - Fills the gap */}
            <section className="w-full shrink-0">
                <TrendingBar onCategorySelect={handleCategorySelect} />
            </section>

            {/* Categories Section */}
            <section className="w-full shrink-0 px-4">
                <Categories
                    selectedCategory={selectedCategory}
                    onCategorySelect={handleCategorySelect}
                />
            </section>

            {/* Coupons Section */}
            <section className="w-full shrink-0">
                <Coupons />
            </section>

            {/* Flash Sale & Products */}
            <section ref={productSectionRef} className="container mx-auto px-4 mt-4" id="products">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-gray-100 pb-4">
                        <div className="flex items-center gap-4">
                            <h1 className="text-2xl font-bold text-orange-600 italic uppercase flex items-center gap-2">
                                <Zap className="fill-orange-600" />
                                {selectedCategory ? `${selectedCategory}` : t('flashSales')}
                            </h1>
                            {!selectedCategory && (
                                <div className="flex items-center gap-2 font-mono font-bold text-lg">
                                    <span className="bg-gray-800 text-white px-2 py-1 rounded">{formatTime(timeLeft.hours)}</span>
                                    <span>:</span>
                                    <span className="bg-gray-800 text-white px-2 py-1 rounded">{formatTime(timeLeft.minutes)}</span>
                                    <span>:</span>
                                    <span className="bg-gray-800 text-white px-2 py-1 rounded">{formatTime(timeLeft.seconds)}</span>
                                </div>
                            )}
                        </div>
                        {selectedCategory && (
                            <button
                                onClick={() => {
                                    handleCategorySelect(null);
                                    setShowAll(false);
                                }}
                                className="text-orange-600 font-bold hover:underline"
                            >
                                Show All Products
                            </button>
                        )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-500">
                        {visibleProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {filteredProducts.length > 8 && !selectedCategory && (
                        <div className="mt-12 flex justify-center border-t border-gray-50 pt-8">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="group flex items-center gap-2 bg-orange-600 text-white px-12 py-4 rounded-2xl font-black text-xl shadow-xl hover:bg-orange-700 hover:scale-105 active:scale-95 transition-all outline-none ring-4 ring-orange-200"
                            >
                                {showAll ? 'Show Less' : 'See More Products'}
                                <div className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </div>
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};
