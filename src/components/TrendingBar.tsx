import React from 'react';
import { Search } from 'lucide-react';

interface TrendingBarProps {
    onCategorySelect: (category: string) => void;
}

export const TrendingBar: React.FC<TrendingBarProps> = ({ onCategorySelect }) => {
    const tags = ['MacBook', 'Sneakers', 'iPhone 15', 'Gaming Chair', 'Mechanical Keyboard', 'Airpods', 'Smart Home'];

    const mapTagToCategory = (tag: string) => {
        if (tag.includes('MacBook') || tag.includes('Keyboard')) return 'Electronics';
        if (tag.includes('Sneakers')) return 'Fashion';
        if (tag.includes('iPhone')) return 'Mobile';
        if (tag.includes('Gaming')) return 'Gaming';
        if (tag.includes('Airpods')) return 'Audio';
        if (tag.includes('Smart Home')) return 'Home';
        return tag;
    };

    return (
        <div className="bg-white border-b border-gray-100 sticky top-20 z-30">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-3 md:gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide py-3 md:py-4">
                    <span className="font-black text-gray-800 text-lg md:text-2xl flex items-center gap-2 md:gap-3 mr-2 md:mr-4 shrink-0">
                        <Search className="text-orange-600 w-5 h-5 md:w-8 md:h-8" strokeWidth={3} />
                        Trending:
                    </span>
                    <div className="flex gap-2 md:gap-4">
                        {tags.map((tag, index) => (
                            <button
                                key={index}
                                onClick={() => onCategorySelect(mapTagToCategory(tag))}
                                className="px-4 py-1.5 md:px-6 md:py-2 bg-gray-50 text-gray-700 rounded-full text-sm md:text-xl hover:bg-orange-500 hover:text-white transition-all font-bold border border-transparent hover:border-orange-600 hover:scale-105 active:scale-95 shadow-sm"
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
