import React from 'react';

export type SortOption = 'popular' | 'latest' | 'priceLowHigh' | 'priceHighLow' | 'topSales';

interface ProductSortProps {
    currentSort: SortOption;
    onSortChange: (sort: SortOption) => void;
}

export const ProductSort: React.FC<ProductSortProps> = ({ currentSort, onSortChange }) => {
    const sortOptions: { value: SortOption; label: string }[] = [
        { value: 'popular', label: 'ยอดนิยม' },
        { value: 'latest', label: 'ใหม่ล่าสุด' },
        { value: 'topSales', label: 'ขายดี' },
        { value: 'priceLowHigh', label: 'ราคา: ต่ำ → สูง' },
        { value: 'priceHighLow', label: 'ราคา: สูง → ต่ำ' },
    ];

    return (
        <div className="flex items-center gap-2 flex-wrap">
            <span className="text-gray-600 font-medium">เรียงตาม:</span>
            <div className="flex gap-2 flex-wrap">
                {sortOptions.map((option) => (
                    <button
                        key={option.value}
                        onClick={() => onSortChange(option.value)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${currentSort === option.value
                            ? 'bg-orange-600 text-white shadow-md'
                            : 'bg-white text-gray-700 border border-gray-200 hover:border-orange-300 hover:text-orange-600'
                            }`}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
};
