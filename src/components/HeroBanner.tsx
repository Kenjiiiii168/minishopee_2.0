import React from 'react';

interface HeroBannerProps {
    onCategorySelect: (category: string | null) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onCategorySelect }) => {
    return (
        <div className="container mx-auto px-4 py-10 md:py-12">
            <div className="flex flex-col gap-8 md:gap-12">
                {/* Top Main Banner - Full Width Symmetrical Design */}
                <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer min-h-[400px] md:min-h-[600px] bg-orange-600 flex flex-col">
                    <img
                        src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1600"
                        alt="Super Sale"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-[2000ms] group-hover:scale-105"
                    />

                    {/* Content Layer - Structured for Professional Spacing */}
                    <div className="relative z-10 flex flex-col h-full p-6 md:p-16 lg:p-20 flex-1">
                        {/* 1. Header Section */}
                        <div className="mb-8 md:mb-12">
                            <span className="bg-white text-orange-600 px-6 py-2 text-base md:text-2xl font-black rounded-xl md:rounded-2xl uppercase tracking-[0.2em] shadow-xl inline-block">
                                Flash Deal
                            </span>
                        </div>

                        {/* 2. Main Action Section - Balanced Scaling */}
                        <div className="flex flex-col items-start gap-8 md:gap-10 mb-auto">
                            <div className="text-white max-w-4xl">
                                <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-4 md:mb-6 leading-tight drop-shadow-2xl uppercase tracking-tighter">
                                    Tech Super Sale
                                </h1>
                                <p className="text-lg md:text-3xl font-bold text-white/95 drop-shadow-lg tracking-tight border-l-4 border-white pl-4 md:pl-6">
                                    Up to 70% off on premium gadgets. <br className="hidden md:block" />
                                    Limited time only.
                                </p>
                            </div>

                            <button
                                onClick={() => onCategorySelect(null)}
                                className="bg-white text-orange-600 px-10 py-4 md:px-14 md:py-6 text-xl md:text-3xl rounded-xl md:rounded-[2rem] font-black transition-all shadow-2xl hover:bg-orange-50 hover:scale-105 active:scale-95 duration-200"
                            >
                                Shop Now
                            </button>
                        </div>

                        {/* 3. Bottom Trust Section - Clean & Spaced */}
                        <div className="mt-8 md:mt-16">
                            <div className="flex flex-wrap items-center gap-4 md:gap-12 p-4 md:p-8 bg-black/20 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/10">
                                <div className="flex items-center gap-3 md:gap-4 text-white">
                                    <div className="p-2 md:p-3 bg-white/10 rounded-xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-black text-sm md:text-xl uppercase tracking-tight leading-none">Authentic</span>
                                        <span className="text-[10px] md:text-sm font-bold text-white/60 uppercase tracking-widest mt-0.5 md:mt-1">Genuine</span>
                                    </div>
                                </div>

                                <div className="w-px h-8 md:h-10 bg-white/10 hidden md:block"></div>

                                <div className="flex items-center gap-3 md:gap-4 text-white">
                                    <div className="p-2 md:p-3 bg-white/10 rounded-xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-black text-sm md:text-xl uppercase tracking-tight leading-none">Warranty</span>
                                        <span className="text-[10px] md:text-sm font-bold text-white/60 uppercase tracking-widest mt-0.5 md:mt-1">Support</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Secondary Banners - Balanced Symmetry */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div
                        onClick={() => onCategorySelect('Electronics')}
                        className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer aspect-[2/1] bg-slate-900"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1200"
                            alt="Laptop"
                            className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center p-6 md:p-10 text-center">
                            <h3 className="text-white font-black text-3xl md:text-6xl mb-4 md:mb-6 drop-shadow-2xl uppercase tracking-tighter">New Arrivals</h3>
                            <span className="text-white text-lg md:text-xl font-black bg-orange-600 px-6 py-2 md:px-8 md:py-3 rounded-xl shadow-xl hover:scale-110 transition-transform">
                                Explore Laptops
                            </span>
                        </div>
                    </div>

                    <div
                        onClick={() => onCategorySelect('Fashion')}
                        className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer aspect-[2/1] bg-red-900"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200"
                            alt="Shoes"
                            className="w-full h-full object-cover object-center opacity-60 transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                            <h3 className="text-white font-black text-3xl md:text-6xl mb-3 md:mb-4 drop-shadow-2xl uppercase tracking-tighter">Hot Fashion</h3>
                            <button className="bg-white text-orange-600 font-black py-3 px-8 md:py-4 md:px-10 text-lg md:text-2xl rounded-xl md:rounded-2xl self-start hover:bg-orange-600 hover:text-white transition-all shadow-2xl mt-2 md:mt-4">
                                Shop Trends
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
