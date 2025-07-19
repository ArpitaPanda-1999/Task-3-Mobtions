"use client";

import { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";


const data = [
    {
        title: "iPhone and Mac",
        content:
            "With iPhone Mirroring, you can view your iPhone screen on your Mac and control it without picking up your phone. Continuity features also let you answer calls or messages right from your Mac. You can even copy images, video or text from your iPhone and paste it all into a different app on your Mac. And with iCloud, you can access your files from either device.",
        image: "/Image/16.jpg",
    },
    {
        title: "iPhone and Apple Watch",
        content:
            "Apple Watch and iPhone are perfect partners. From unlocking your iPhone to automatically logging into websites, your Apple Watch has you covered.",
        image: "/Image/18.jpg",
    },
    {
        title: "iPhone and AirPods",
        content:
            "AirPods pair instantly and switch seamlessly between your devices. Listen to audio on iPhone, then answer a call on Mac without missing a beat.",
        image: "/Image/14.jpg",
    },
];

export default function SignificantOthers() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <div className="lg:w-1/2 w-full px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                    Significant others.
                </h1>
            </div>
            {/* Accordion Section */}
            <div className="flex flex-col lg:flex-row max-w-6xl mx-auto py-10 px-4 gap-10">
                {/* Accordion */}
                <div className="lg:w-1/2 w-full">
                    {data.map((item, index) => (
                        <div key={index} className="mb-6 border-b pb-4">
                            <button
                                onClick={() =>
                                    setActiveIndex(activeIndex === index ? -1 : index)
                                }
                                className="w-full text-left"
                            >
                                <h2 className="text-xl font-semibold flex justify-between items-center">
                                    {item.title}
                                    <span>{activeIndex === index ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
                                </h2>
                            </button>
                            {activeIndex === index && (
                                <p className="mt-3 text-gray-600">{item.content}</p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Image Section */}
                <div className="lg:w-1/2 w-full">
                    <Image
                        src={data[activeIndex].image}
                        alt="Device preview"
                        width={700}
                        height={500}
                        className="rounded-xl mx-auto"
                    />
                </div>
            </div>
        </>
    );
}
