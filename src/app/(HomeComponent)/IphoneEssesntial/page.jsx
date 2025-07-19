"use client";

import { MdKeyboardArrowRight } from "react-icons/md";

export default function IPhoneEssesntial() {
    const cardData = [
        {
            title: "iPhone accessories",
            desc: "Explore colourful cases, USB‑C power adapters, MagSafe accessories and more.",
            linkText: "Shop iPhone accessories",
            image: "/Image/2.jpg",
        },
        {
            title: "AirTag",
            desc: "Attach one to your keys. Put another in your backpack. If they’re misplaced, just use the Find My app.",
            linkText: "Buy",
            image: "/Image/3.jpg",
        },
    ];

    return (
        <div className="bg-white py-10 px-4 md:px-16">
            <div className="lg:w-1/2 w-full px-4 mb-6 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                    iPhone essentials.
                </h1>
            </div>
            {/* Card Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center"
                    >
                        <h4 className="text-xl font-semibold mb-2">{card.title}</h4>
                        <p className="text-gray-600 text-sm mb-2">{card.desc}</p>
                        <p className="text-blue-600 text-sm underline cursor-pointer mb-4">
                            {card.linkText}<MdKeyboardArrowRight className="inline-block ml-1" />
                        </p>
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-80 object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
