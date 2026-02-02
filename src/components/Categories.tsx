import React from 'react';
import { Smartphone, Monitor, Headphones, Camera, Watch, Home, Shirt, Gamepad2 } from 'lucide-react';

interface CategoriesProps {
    onCategorySelect: (category: string) => void;
    selectedCategory: string | null;
}

export const Categories: React.FC<CategoriesProps> = ({ onCategorySelect, selectedCategory }) => {
    const categories = [
        { name: 'Electronics', icon: <Monitor size={24} /> },
        { name: 'Mobile', icon: <Smartphone size={24} /> },
        { name: 'Fashion', icon: <Shirt size={24} /> },
        { name: 'Home', icon: <Home size={24} /> },
        { name: 'Gaming', icon: <Gamepad2 size={24} /> },
        { name: 'Audio', icon: <Headphones size={24} /> },
        { name: 'Camera', icon: <Camera size={24} /> },
        { name: 'Accessories', icon: <Watch size={24} /> },
    ];

    return (
        <div className="w-full py-6">
            <h3 className="text-lg font-bold text-gray-700 mb-4 px-4 md:px-0 max-w-7xl mx-auto">Categories</h3>
            <div className="container mx-auto">
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 md:gap-4">
                        {categories.map((cat, index) => {
                            const isActive = selectedCategory === cat.name;
                            return (
                                <div
                                    key={index}
                                    onClick={() => onCategorySelect(cat.name)}
                                    className="flex flex-col items-center gap-2 group cursor-pointer p-1"
                                >
                                    <div className={`w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center transition-all shadow-md group-hover:shadow-lg transform group-hover:scale-110 duration-200 ${isActive
                                        ? 'bg-orange-50 border-2 md:border-4 border-orange-500 text-orange-600 scale-105 shadow-orange-200'
                                        : 'bg-gray-50 border-2 border-gray-100 text-gray-600 group-hover:bg-orange-50 group-hover:border-orange-500 group-hover:text-orange-600'
                                        }`}>
                                        {React.cloneElement(cat.icon as React.ReactElement<any>, { className: "w-8 h-8 md:w-10 md:h-10" })}
                                    </div>
                                    <span className={`text-[11px] md:text-lg font-bold transition-colors text-center leading-tight max-w-full break-words ${isActive ? 'text-orange-600 underline' : 'text-gray-700 group-hover:text-orange-600'
                                        }`}>{cat.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
