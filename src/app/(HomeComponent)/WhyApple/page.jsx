"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
    Truck,
    DollarSign,
    RefreshCcw,
    User2,
    Plus,
    X,
    Smartphone,
    ShoppingBag,
    Video,
} from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";


const sliderData = [
    {
        icon: <RefreshCcw className="w-8 h-8" />,
        title: "Save with Apple Trade In.",
        title2: "Trade In & Save Big",
        desc1:
            "Get ₹16000.00–₹62200.00 in credit towards iPhone 16 or iPhone 16 Pro when you trade in iPhone 12 or higher.",
        desc2:
            "Exchange your eligible device for instant credit or an Apple Gift Card. If not eligible, we’ll recycle it for free.",
    },
    {
        icon: <DollarSign className="w-8 h-8" />,
        title: "Monthly payment options are available.",
        title2: "Flexible EMI Options",
        desc1:
            "Finance your iPhone with convenient monthly EMI options available with select credit and debit cards.",
        desc2:
            "Make big purchases simple with structured payments that fit your budget.",
    },
    {
        icon: <Truck className="w-8 h-8" />,
        title: "Get flexible delivery and easy pickup.",
        title2: "Free Delivery or Pickup",
        desc1:
            "Get free two-day delivery or choose to pick up your iPhone at an Apple Store near you.",
        desc2:
            "Enjoy seamless, real-time order tracking and personalized delivery options.",
    },
    {
        icon: <User2 className="w-8 h-8" />,
        title: "Shop one-to-one with a Specialist.",
        title2: "Personal Apple Shopping",
        desc1:
            "Connect with a Specialist online or in-store for product advice, setup help, and personalized support.",
        desc2:
            "Experience Apple’s premium service made just for you, wherever you are.",
    },
    {
        icon: <Video className="w-8 h-8" />,
        title: "Join an online Personal Setup session.",
        title2: "One-to-One Setup Help",
        desc1:
            "After you buy an iPhone, you can join a remote Personal Setup session to get guidance on setup and features.",
        desc2:
            "Our Specialists walk you through important steps, from transferring data to discovering key functions.",
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: "Explore a shopping experience designed around you.",
        title2: "Apple Store App Experience",
        desc1:
            "Use the Apple Store app to browse products, compare models, and buy with a more personal shopping flow.",
        desc2:
            "Get real-time updates, order tracking, and exclusive in-app features tailored to your preferences.",
    },
];

export default function AppleSlider() {
    const [selectedCard, setSelectedCard] = useState(null);
    const closeModal = () => setSelectedCard(null);

    return (
        <div className="relative bg-gray-100 py-10 px-4 md:px-16">

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-10 py-8">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                    Why Apple is the best <br className="hidden md:block" />
                    place to buy iPhone.
                </h1>

                <Link
                    href="#"
                    className="mt-4 md:mt-0 text-sm text-blue-600 font-medium hover:underline flex items-center group"
                >
                    Shop iPhone
                    <MdKeyboardArrowRight className="ml-1 text-xl group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            {/* Slider */}
            <Swiper
                spaceBetween={20}
                slidesPerView={1.2}
                breakpoints={{
                    640: { slidesPerView: 2.2 },
                    1024: { slidesPerView: 3.2 },
                }}
                navigation={{
                    nextEl: ".next-btn",
                    prevEl: ".prev-btn",
                }}
                modules={[Navigation]}
            >
                {sliderData.map((item, index) => (
                    <SwiperSlide key={index} className="py-4">
                        <div className="bg-white rounded-xl w-full h-[260px] p-6 relative shadow-xl ring-1 ring-black/5 flex flex-col justify-between">
                            <div>
                                <div className="mb-4">{item.icon}</div>
                                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                                <p className="text-gray-700 text-sm">{item.desc1}</p>
                            </div>
                            <button
                                onClick={() => setSelectedCard(item)}
                                className="absolute bottom-4 right-4 bg-white backdrop-blur p-2 rounded-full shadow-md hover:scale-110 transition"
                            >
                                <Plus className="text-black w-5 h-5" />
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="flex justify-end gap-2 mt-4 px-4 md:px-16">
                <button className="prev-btn bg-gray-200 p-2 rounded hover:bg-gray-300">←</button>
                <button className="next-btn bg-gray-200 p-2 rounded hover:bg-gray-300">→</button>
            </div>

            {/* Modal Dialog */}
            {selectedCard && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center">
                    <div className="bg-white rounded-xl w-[90%] md:w-[600px] max-w-[90%] p-6 relative shadow-2xl">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <h6 className="text-sm text-gray-500 mb-1">{selectedCard.title}</h6>
                        <h1 className="text-2xl font-bold mb-4">{selectedCard.title2}</h1>
                        <p className="text-gray-700 mb-3">{selectedCard.desc1}</p>
                        <p className="text-gray-700">{selectedCard.desc2}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
