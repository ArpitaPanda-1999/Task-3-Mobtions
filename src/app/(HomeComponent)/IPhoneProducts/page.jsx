'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { MoveRight } from 'lucide-react';
import { MoveLeft } from 'lucide-react';

import {
    Monitor,
    Tablet,
    Smartphone,
    Watch,
    Headphones,
    Tv,
    CreditCard,
    Gift,
    ShoppingBag,
    User,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';

const categories = [
    { icon: <Monitor size={28} />, label: 'Mac' },
    { icon: <Tablet size={28} />, label: 'iPad' },
    { icon: <Smartphone size={28} />, label: 'iPhone' },
    { icon: <Watch size={28} />, label: 'Watch' },
    { icon: <Headphones size={28} />, label: 'AirPods' },
    { icon: <Tv size={28} />, label: 'TV & Home' },
    { icon: <CreditCard size={28} />, label: 'Wallet' },
    { icon: <Gift size={28} />, label: 'Gift Cards' },
    { icon: <ShoppingBag size={28} />, label: 'Store' },
    { icon: <User size={28} />, label: 'Support' },
];

export default function CategorySlider() {
    return (
        <>        
            <div className="w-full px-4 py-6">
                {/* Desktop view - Grid */}
                <div className="hidden sm:grid grid-cols-5 md:grid-cols-10 gap-y-6 text-center">
                    {categories.map((cat, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center gap-1 text-gray-700 hover:text-blue-600 transition"
                        >
                            {cat.icon}
                            <span className="text-xs font-medium">{cat.label}</span>
                        </div>
                    ))}
                </div>

                {/* Mobile view - Swiper Slider */}
                <div className="sm:hidden relative">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3.2}
                        grabCursor={true}
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                    >
                        {categories.map((cat, i) => (
                            <SwiperSlide key={i}>
                                <div className="flex flex-col items-center gap-1 text-gray-700 hover:text-blue-600 transition">
                                    {cat.icon}
                                    <span className="text-xs font-medium">{cat.label}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Arrows - small on mobile */}
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 sm:hidden">
                        <button className="p-1 rounded-full bg-white shadow text-gray-700">
                            <MoveLeft />
                        </button>
                    </div>
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 sm:hidden">
                        <button className="p-1 rounded-full bg-white shadow text-gray-700">
                            <MoveRight />
                        </button>
                    </div>
                </div>
            </div>

            {/* Top Banner */}
            <div className="w-full text-[13px] text-center bg-gray-100 py-2 px-4">
                Get iPhone 16 Pro from just ₹9825.00/mo. for up to 12 mo. with No Cost EMI and instant cashback.{" "}
                <a href="#" className="text-blue-500 hover:underline">Buy ›</a>
            </div>
        </>
    );
}

