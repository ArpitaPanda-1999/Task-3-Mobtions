
"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
    {
        name: "iPhone 16 Pro",
        img: "/Image/20.png",
        desc: "The ultimate iPhone.",
        price: "From ₹119900.00",
        emi: "or ₹2085.00/mo. for 12 mo.",
        dots: "#d5b89b",
        features: [
            { icon: "/Image/24.png", title: "Apple Intelligence" },
            { icon: "/Image/25.png", title: "A18 Pro chip with 6-core GPU" },
            { icon: "/Image/27.png", title: "Pro camera system" },
            { icon: "/Image/26.png", title: "Up to 29 hours video playback" },
            { icon: "/Image/28.png", title: "Pro display" },
        ],
    },
    {
        name: "iPhone 16",
        img: "/Image/21.png",
        desc: "A total powerhouse.",
        price: "From ₹79900.00",
        emi: "or ₹2850.00/mo. for 12 mo.",
        dots: "#8379f6",
        features: [
            { icon: "/Image/24.png", title: "Apple Intelligence" },
            { icon: "/Image/29.png", title: "A18 chip with 4-core GPU" },
            { icon: "/Image/31.png", title: "Advanced dual-camera system" },
            { icon: "/Image/26.png", title: "Up to 26 hours video playback" },
            { icon: "/Image/28.png", title: "Up to 27 hours video playback" },
        ],
    },
    {
        name: "iPhone 16e",
        img: "Image/22.png",
        desc: "Latest iPhone. Greatest price.",
        price: "From ₹69900.00",
        emi: "or ₹4090.00/mo. for 12 mo.",
        dots: "#000000",
        features: [
            { icon: "/Image/24.png", title: "Apple Intelligence" },
            { icon: "/Image/29.png", title: "A17 chip with 4-core GPU" },
            { icon: "/Image/27.png", title: "--------------" },
            { icon: "/Image/32.png", title: "24MP dual-camera system" },
            { icon: "/Image/28.png", title: "Up to 20 hours video playback" },
        ],
    },
    {
        name: "iPhone 15",
        img: "Image/23.png",
        desc: "As amazing as ever.",
        price: "From ₹58900.00",
        emi: "or ₹2850.00/mo. for 12 mo.",
        dots: "#ec8fa7",
        features: [
            { icon: "/Image/24.png", title: "Apple Intelligence" },
            { icon: "/Image/30.png", title: "A16 chip with 5-core GPU" },
            { icon: "/Image/27.png", title: "--------------" },
            { icon: "/Image/31.png", title: "Dual-camera system" },
            { icon: "/Image/28.png", title: "Up to 19 hours video playback" },
        ],
    },
];

export default function ExploreIPhone() {
    const swiperRef = useRef(null);

    return (
        <section className="px-4 py-10 bg-gray-100 relative">
            <div className="lg:w-1/2 w-full px-4 mb-6 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                    Explore the line-up.
                </h1>
            </div>
            {/* Desktop View */}
            <div className="hidden lg:grid grid-cols-4 gap-6">
                {products.map((p, idx) => (
                    <div key={idx} className="text-center p-4">
                        <img
                            src={p.img}
                            alt={p.name}
                            width={150}
                            height={250}
                            className="mx-auto mb-4"
                        />
                        <div
                            className="mx-auto h-2 w-2 rounded-full mb-2"
                            style={{ backgroundColor: p.dots }}
                        ></div>
                        <h3 className="text-lg font-semibold">{p.name}</h3>
                        <p className="text-sm text-gray-600">{p.desc}</p>
                        <p className="text-sm font-medium mt-1">{p.price}</p>
                        <p className="text-xs text-gray-500">{p.emi}</p>
                        <div className="mt-4">
                            <button className="text-white rounded bg-blue-600 px-4 py-2 text-sm font-semibold">
                                Learn more
                            </button>
                            <span className="text-blue-500 text-sm ml-2">Buy &gt;</span>
                        </div>
                        <hr className="my-4 border-t border-gray-300" />
                        <div className="space-y-4">
                            {p.features.map((f, i) => (
                                <div key={i} className="flex flex-col items-center space-y-1">
                                    <img src={f.icon} alt={f.title} width={24} height={24} />
                                    <p className="text-xs text-gray-700 w-24 text-center">
                                        {f.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile Swiper */}
            <div className="lg:hidden relative">
                <Swiper
                    slidesPerView={1.1}
                    spaceBetween={15}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Navigation]}
                    className="!pb-10"
                >
                    {products.map((p, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="text-center p-4">
                                <img
                                    src={p.img}
                                    alt={p.name}
                                    width={150}
                                    height={250}
                                    className="mx-auto mb-4"
                                />
                                <div
                                    className="mx-auto h-2 w-2 rounded-full mb-2"
                                    style={{ backgroundColor: p.dots }}
                                ></div>
                                <h3 className="text-lg font-semibold">{p.name}</h3>
                                <p className="text-sm text-gray-600">{p.desc}</p>
                                <p className="text-sm font-medium mt-1">{p.price}</p>
                                <p className="text-xs text-gray-500">{p.emi}</p>
                                <div className="mt-4">
                                    <button className="text-blue-600 text-sm font-semibold">
                                        Learn more
                                    </button>
                                    <span className="text-blue-500 text-sm ml-2">Buy &gt;</span>
                                </div>
                                <hr className="my-4 border-t border-gray-300" />
                                <div className="space-y-4">
                                    {p.features.map((f, i) => (
                                        <div
                                            key={i}
                                            className="flex flex-col items-center space-y-1"
                                        >
                                            <img src={f.icon} alt={f.title} width={24} height={24} />
                                            <p className="text-xs text-gray-700 w-24 text-center">
                                                {f.title}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="absolute right-4 bottom-0 flex space-x-2 z-10">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="bg-gray-200 p-2 rounded-full shadow"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="bg-gray-200 p-2 rounded-full shadow"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
