import React, { useState } from 'react';
import { Filter, X, Star, Truck, Package, ChevronDown } from 'lucide-react';
import { products } from '../data/products';

export interface FilterState {
    priceRange: [number, number];
    categories: string[];
    brands: string[];
    minRating: number;
    freeShippingOnly: boolean;
    inStockOnly: boolean;
}

interface ProductFiltersProps {
    filters: FilterState;
    onFiltersChange: (filters: FilterState) => void;
    onClearFilters: () => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
    filters,
    onFiltersChange,
    onClearFilters
}) => {
    const [isOpen, setIsOpen] = useState(false);

    // Get unique categories and brands from products
    const categories = Array.from(new Set(products.map(p => p.category)));
    const brands = Array.from(new Set(products.map(p => p.brand).filter(Boolean) as string[]));

    const maxPrice = Math.max(...products.map(p => p.price));
    const minPrice = Math.min(...products.map(p => p.price));

    const handlePriceChange = (index: 0 | 1, value: number) => {
        const newRange: [number, number] = [...filters.priceRange];
        newRange[index] = value;
        onFiltersChange({ ...filters, priceRange: newRange });
    };

    const handleCategoryToggle = (category: string) => {
        const newCategories = filters.categories.includes(category)
            ? filters.categories.filter(c => c !== category)
            : [...filters.categories, category];
        onFiltersChange({ ...filters, categories: newCategories });
    };

    const handleBrandToggle = (brand: string) => {
        const newBrands = filters.brands.includes(brand)
            ? filters.brands.filter(b => b !== brand)
            : [...filters.brands, brand];
        onFiltersChange({ ...filters, brands: newBrands });
    };

    const hasActiveFilters =
        filters.categories.length > 0 ||
        filters.brands.length > 0 ||
        filters.minRating > 0 ||
        filters.freeShippingOnly ||
        filters.inStockOnly ||
        filters.priceRange[0] !== minPrice ||
        filters.priceRange[1] !== maxPrice;

    return (
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between py-2 px-4 bg-orange-50 rounded-lg text-orange-600 font-medium"
                >
                    <span className="flex items-center gap-2">
                        <Filter size={18} />
                        ตัวกรอง
                        {hasActiveFilters && (
                            <span className="bg-orange-600 text-white text-xs px-2 py-0.5 rounded-full">
                                {filters.categories.length + filters.brands.length + (filters.minRating > 0 ? 1 : 0) + (filters.freeShippingOnly ? 1 : 0) + (filters.inStockOnly ? 1 : 0)}
                            </span>
                        )}
                    </span>
                    <ChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} size={20} />
                </button>
            </div>

            {/* Filter Content */}
            <div className={`${isOpen ? 'block' : 'hidden lg:block'} space-y-6`}>
                {/* Header with Clear Button */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-2 text-gray-800 font-bold">
                        <Filter size={20} />
                        <span>ตัวกรอง</span>
                        {hasActiveFilters && (
                            <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full font-medium">
                                {filters.categories.length + filters.brands.length + (filters.minRating > 0 ? 1 : 0) + (filters.freeShippingOnly ? 1 : 0) + (filters.inStockOnly ? 1 : 0)}
                            </span>
                        )}
                    </div>
                    {hasActiveFilters && (
                        <button
                            onClick={onClearFilters}
                            className="flex items-center gap-1 text-sm text-orange-600 hover:text-orange-700 font-medium"
                        >
                            <X size={16} />
                            ล้างทั้งหมด
                        </button>
                    )}
                </div>

                {/* Price Range */}
                <div>
                    <h3 className="font-bold text-gray-800 mb-3">ช่วงราคา</h3>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                value={filters.priceRange[0]}
                                onChange={(e) => handlePriceChange(0, Number(e.target.value))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                placeholder="฿ ต่ำสุด"
                                min={minPrice}
                                max={filters.priceRange[1]}
                            />
                            <span className="text-gray-400">-</span>
                            <input
                                type="number"
                                value={filters.priceRange[1]}
                                onChange={(e) => handlePriceChange(1, Number(e.target.value))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                placeholder="฿ สูงสุด"
                                min={filters.priceRange[0]}
                                max={maxPrice}
                            />
                        </div>
                        <input
                            type="range"
                            min={minPrice}
                            max={maxPrice}
                            value={filters.priceRange[1]}
                            onChange={(e) => handlePriceChange(1, Number(e.target.value))}
                            className="w-full accent-orange-600"
                        />
                    </div>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="font-bold text-gray-800 mb-3">หมวดหมู่</h3>
                    <div className="space-y-2">
                        {categories.map(category => (
                            <label key={category} className="flex items-center gap-2 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={filters.categories.includes(category)}
                                    onChange={() => handleCategoryToggle(category)}
                                    className="w-4 h-4 accent-orange-600 cursor-pointer"
                                />
                                <span className="text-sm text-gray-700 group-hover:text-orange-600">
                                    {category}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Brands */}
                <div>
                    <h3 className="font-bold text-gray-800 mb-3">แบรนด์</h3>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                        {brands.map(brand => (
                            <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={filters.brands.includes(brand)}
                                    onChange={() => handleBrandToggle(brand)}
                                    className="w-4 h-4 accent-orange-600 cursor-pointer"
                                />
                                <span className="text-sm text-gray-700 group-hover:text-orange-600">
                                    {brand}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Rating */}
                <div>
                    <h3 className="font-bold text-gray-800 mb-3">คะแนนรีวิว</h3>
                    <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map(rating => (
                            <button
                                key={rating}
                                onClick={() => onFiltersChange({ ...filters, minRating: rating === filters.minRating ? 0 : rating })}
                                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${filters.minRating === rating
                                    ? 'bg-orange-50 border-2 border-orange-600'
                                    : 'border border-gray-200 hover:border-orange-300'
                                    }`}
                            >
                                {Array.from({ length: rating }).map((_, i) => (
                                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                                ))}
                                <span className="text-sm text-gray-700">ขึ้นไป</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Other Filters */}
                <div className="space-y-3 pt-4 border-t border-gray-200">
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                            type="checkbox"
                            checked={filters.freeShippingOnly}
                            onChange={(e) => onFiltersChange({ ...filters, freeShippingOnly: e.target.checked })}
                            className="w-4 h-4 accent-orange-600 cursor-pointer"
                        />
                        <Truck size={18} className="text-green-600" />
                        <span className="text-sm text-gray-700 group-hover:text-orange-600 font-medium">
                            ส่งฟรีเท่านั้น
                        </span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                            type="checkbox"
                            checked={filters.inStockOnly}
                            onChange={(e) => onFiltersChange({ ...filters, inStockOnly: e.target.checked })}
                            className="w-4 h-4 accent-orange-600 cursor-pointer"
                        />
                        <Package size={18} className="text-blue-600" />
                        <span className="text-sm text-gray-700 group-hover:text-orange-600 font-medium">
                            มีของพร้อมส่ง
                        </span>
                    </label>
                </div>
            </div>
        </div>
    );
};
