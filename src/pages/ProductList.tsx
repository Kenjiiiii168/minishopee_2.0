import React, { useState, useEffect, useMemo } from 'react';
import { useProducts } from '../context/ProductContext';
import { ProductCard } from '../components/ProductCard';
import { HeroBanner } from '../components/HeroBanner';
import { Categories } from '../components/Categories';
import { Coupons } from '../components/Coupons';
import { TrendingBar } from '../components/TrendingBar';
import { ProductSort, type SortOption } from '../components/ProductSort';
import { ProductFilters, type FilterState } from '../components/ProductFilters';
import { Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ProductList: React.FC = () => {
    const { t } = useLanguage();
    const { products, loading } = useProducts(); // Get products from context
    const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 0 });
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [showAll, setShowAll] = useState(false);
    const productSectionRef = React.useRef<HTMLDivElement>(null);

    // Sort and Filter States
    const [sortBy, setSortBy] = useState<SortOption>('popular');
    const [filters, setFilters] = useState<FilterState>({
        priceRange: [0, 100000],
        categories: [],
        brands: [],
        minRating: 0,
        freeShippingOnly: false,
        inStockOnly: false,
    });

    const scrollToProducts = () => {
        productSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleCategorySelect = (category: string | null) => {
        setSelectedCategory(category);
        if (category) {
            setFilters({ ...filters, categories: [category] });
            setShowAll(true);
        } else {
            setFilters({ ...filters, categories: [] });
        }
        setTimeout(scrollToProducts, 100);
    };

    const handleClearFilters = () => {
        setFilters({
            priceRange: [0, 100000],
            categories: [],
            brands: [],
            minRating: 0,
            freeShippingOnly: false,
            inStockOnly: false,
        });
        setSelectedCategory(null);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return { hours: 2, minutes: 45, seconds: 0 };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (val: number) => val.toString().padStart(2, '0');

    // Filter and Sort Logic
    const filteredAndSortedProducts = useMemo(() => {
        let result = [...products];

        // Apply Filters
        // Price Range
        result = result.filter(p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]);

        // Categories
        if (filters.categories.length > 0) {
            result = result.filter(p => filters.categories.includes(p.category));
        }

        // Brands
        if (filters.brands.length > 0) {
            result = result.filter(p => p.brand && filters.brands.includes(p.brand));
        }

        // Rating
        if (filters.minRating > 0) {
            result = result.filter(p => p.rating >= filters.minRating);
        }

        // Free Shipping
        if (filters.freeShippingOnly) {
            result = result.filter(p => p.shipping.fee === 0);
        }

        // In Stock
        if (filters.inStockOnly) {
            result = result.filter(p => p.stock > 0);
        }

        // Apply Sorting
        switch (sortBy) {
            case 'latest':
                result.reverse(); // Simulate latest by reversing
                break;
            case 'priceLowHigh':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'priceHighLow':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'topSales':
                result.sort((a, b) => b.soldCount - a.soldCount);
                break;
            case 'popular':
            default:
                result.sort((a, b) => (b.rating * b.reviewCount) - (a.rating * a.reviewCount));
                break;
        }

        return result;
    }, [filters, sortBy]);

    const visibleProducts = showAll ? filteredAndSortedProducts : filteredAndSortedProducts.slice(0, 8);

    return (
        <div className="flex flex-col gap-6 pb-8 w-full overflow-x-hidden">
            {/* Hero Section */}
            <section className="w-full shrink-0">
                <HeroBanner onCategorySelect={handleCategorySelect} />
            </section>

            {/* Trending Section */}
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

            {/* Products Section with Filters */}
            <section ref={productSectionRef} className="container mx-auto px-4 mt-4" id="products">
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Sidebar Filters - Hidden on Mobile */}
                    <aside className="lg:w-64 shrink-0">
                        <ProductFilters
                            filters={filters}
                            onFiltersChange={setFilters}
                            onClearFilters={handleClearFilters}
                        />
                    </aside>

                    {/* Products Grid */}
                    <div className="flex-1">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            {/* Header with Flash Sale Title and Sort */}
                            <div className="flex flex-col gap-4 mb-6 pb-4 border-b border-gray-100">
                                <div className="flex flex-wrap items-center justify-between gap-4">
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

                                {/* Sort Options */}
                                <ProductSort
                                    currentSort={sortBy}
                                    onSortChange={setSortBy}
                                />

                                {/* Results Count */}
                                <div className="text-sm text-gray-600">
                                    พบสินค้า <span className="font-bold text-gray-800">{filteredAndSortedProducts.length}</span> รายการ
                                </div>
                            </div>

                            {/* Products Grid */}
                            {loading ? (
                                <div className="flex flex-col items-center justify-center py-16 w-full">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mb-4"></div>
                                    <p className="text-gray-500 font-medium">กำลังโหลดสินค้า...</p>
                                </div>
                            ) : filteredAndSortedProducts.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all duration-500">
                                    {visibleProducts.map(product => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-16 w-full">
                                    <p className="text-gray-500 text-lg">ไม่พบสินค้าที่ตรงกับเงื่อนไข</p>
                                    <button
                                        onClick={handleClearFilters}
                                        className="mt-4 text-orange-600 font-medium hover:underline"
                                    >
                                        ล้างตัวกรอง
                                    </button>
                                </div>
                            )}

                            {/* Show More/Less Button */}
                            {filteredAndSortedProducts.length > 8 && !selectedCategory && (
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
                    </div>
                </div>
            </section>
        </div>
    );
};
