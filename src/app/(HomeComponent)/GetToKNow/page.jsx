"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Dialog } from "@headlessui/react";
import { Plus } from "lucide-react";
import { MoveLeft } from 'lucide-react';
import { MoveRight } from 'lucide-react';

const cardData = [
    {
        title: "Cutting-Edge Cameras",
        desc: "Picture your best photos and videos.",
        longDesc:
            "iPhone’s advanced camera system uses cutting-edge computational photography to help you take stunning pictures in any lighting condition. Whether it’s bright daylight or low light, your memories will shine through. Capture more detail, vibrant colors, and cinematic-quality video like never before.",
        img: "Image/4.jpg",
        pic: "Image/12.jpg",
    },
    {
        title: "Chip and Battery Life",
        desc: "Fast that lasts.",
        longDesc:
            "Powered by the latest Apple silicon, iPhone delivers industry-leading performance while maintaining incredible battery efficiency. Stream, game, create, and stay productive longer with a device that’s designed to last all day and beyond.",
        img: "Image/5.jpg",
        pic: "Image/13.jpg",
    },
    {
        title: "Innovation",
        desc: "Beautiful and durable, by design.",
        longDesc:
            "From aerospace-grade materials to cutting-edge manufacturing, every iPhone is crafted with elegance and built to withstand the elements of everyday life. With water resistance and Ceramic Shield, it's as durable as it is beautiful.",
        img: "Image/6.jpg",
        pic: "Image/14.jpg",
    },
    {
        title: "Environment",
        desc: "Recycle. Reuse. Repeat.",
        longDesc:
            "Apple is committed to a greener planet. iPhone is made with recycled materials and designed to reduce environmental impact. Every step we take brings us closer to our 2030 goal of carbon neutrality across all our products.",
        img: "Image/7.jpg",
        pic: "Image/15.jpg",
    },
    {
        title: "Privacy",
        desc: "Your data. Just where you want it.",
        longDesc:
            "iPhone is designed to protect your personal data. With features like App Tracking Transparency and on-device processing, your privacy is built into every level of your experience — because your information belongs to you, and only you.",
        img: "Image/8.jpg",
        pic: "Image/16.jpg",
    },
    {
        title: "Personalise Your iPhone",
        desc: "Make it you. Through and through.",
        longDesc:
            "Customize your iPhone like never before. With new lock screen options, widgets, and Focus modes, you can tailor your device to fit your lifestyle and personality. Make it your own with ease.",
        img: "Image/9.jpg",
        pic: "Image/17.jpg",
    },
    {
        title: "Your Next iPhone",
        desc: "The Next Generation.",
        longDesc:
            "iPhone 15 is the next generation of iPhone. With the power to take your creativity to new heights, it's time to unlock the full potential of your iPhone.",
        img: "Image/10.jpg",
        pic: "Image/18.jpg",
    },
    {
        title: "Your Next iPhone",
        desc: "The Next Generation.",
        longDesc:
            "iPhone 15 is the next generation of iPhone. With the power to take your creativity to new heights, it's time to unlock the full potential of your iPhone.",
        img: "Image/11.jpg",
        pic: "Image/19.jpg",
    },
];

export default function GetToKNow() {
    const [selectedCard, setSelectedCard] = useState(null);
    const swiperRef = useRef(null);

    return (
        <div className="w-full bg-white py-10">
            <div className="lg:w-1/2 w-full px-4 mb-6 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                    Get to know iPhone.
                </h1>
            </div>
            {/* Cards */}
            <Swiper
                spaceBetween={20}
                slidesPerView={1.2}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                className="px-4"
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                {cardData.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative bg-white rounded-xl shadow-md overflow-hidden h-[480px] group">
                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4 text-white">
                                <h3 className="text-sm font-semibold opacity-80">
                                    {card.title}
                                </h3>
                                <p className="text-lg font-semibold leading-tight">
                                    {card.desc}
                                </p>
                            </div>
                            <button
                                className="absolute bottom-4 right-4 bg-white/80 backdrop-blur p-2 rounded-full shadow-md hover:scale-110 transition"
                                onClick={() => setSelectedCard(card)}
                            >
                                <Plus className="text-black w-5 h-5" />
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Arrow Buttons Below Cards */}
            <div className="flex justify-end gap-4 mt-6">
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="bg-gray-200 text-white px-4 py-2 rounded-full text-sm"
                >
                    <MoveLeft className="text-gray-600" />
                </button>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="bg-gray-200 text-white px-4 py-2 rounded-full text-sm"
                >
                    <MoveRight className="text-gray-600" />
                </button>
            </div>

            <Dialog
                open={!!selectedCard}
                onClose={() => setSelectedCard(null)}
                className="fixed z-50 inset-0 overflow-y-auto"
            >
                <div className="flex items-center justify-center min-h-screen px-4">
                    {/* Overlay */}
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />

                    {/* Modal content */}
                    <Dialog.Panel className="relative bg-gray-100 rounded-xl max-w-4xl w-full p-6 z-50 shadow-xl">
                        {/* Close (X) button */}
                        <button
                            onClick={() => setSelectedCard(null)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold"
                        >
                            &times;
                        </button>

                        {/* Content grid */}
                        <div className="flex flex-col md:flex-row gap-6 mt-6 p-3 bg-gray-200 rounded-2">
                            {/* Image */}
                            <div className="md:w-1/2">
                                <img
                                    src={selectedCard?.pic}
                                    alt={selectedCard?.title}
                                    className="rounded-lg w-full h-auto object-cover"
                                />
                            </div>

                            {/* Text */}
                            <div className="md:w-1/2">
                                <Dialog.Title className="text-sm font-bold mb-4">
                                    {selectedCard?.title}
                                </Dialog.Title>
                                <h3>{selectedCard?.desc}</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {selectedCard?.longDesc}
                                </p>
                            </div>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
}
