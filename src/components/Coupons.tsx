import { TicketPercent } from 'lucide-react';
import { useCoupons } from '../context/CouponContext';
import { availableCoupons } from '../data/coupons';

export const Coupons: React.FC = () => {
    const { collectCoupon, isCollected } = useCoupons();

    const coupons = availableCoupons;

    return (
        <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
                <TicketPercent className="text-orange-500" />
                <h3 className="text-lg font-bold text-gray-700">Vouchers for you</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {coupons.map((coupon, index) => {
                    const collected = isCollected(coupon.code);
                    return (
                        <div key={index} className="bg-white border-l-4 border-orange-500 rounded shadow-md p-4 relative flex flex-col justify-between h-28 hover:shadow-lg transition-all cursor-pointer group">
                            <div>
                                <div className="font-black text-orange-600 text-xl md:text-2xl leading-tight">{coupon.discount}</div>
                                <div className="text-xs md:text-sm text-gray-500 font-bold mt-1">{coupon.minSpend}</div>
                            </div>
                            <div className="flex justify-between items-end">
                                <div className="text-xs text-gray-400 font-mono font-black uppercase">{coupon.code}</div>
                                <button
                                    onClick={() => collectCoupon(coupon.code)}
                                    disabled={collected}
                                    className={`text-white text-xs md:text-sm px-4 py-1.5 rounded-lg font-black transition-all shadow-md transform active:scale-95 ${collected
                                        ? 'bg-gray-400 cursor-not-allowed opacity-80'
                                        : 'bg-orange-600 hover:bg-orange-700 group-hover:scale-110'
                                        }`}
                                >
                                    {collected ? 'Collected' : 'Collect'}
                                </button>
                            </div>
                            <div className="absolute -left-1 top-1/2 -mt-1 w-2 h-2 bg-gray-50 rounded-full border border-gray-100"></div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
