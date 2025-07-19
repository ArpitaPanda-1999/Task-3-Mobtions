"use client";
import { useState } from "react";

const disclaimerData = [
    "Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro and iPhone 15 Pro Max, with Siri and device language set to the same supported language...",
    "Cinematic mode is available on iPhone 13 models, iPhone 14 models, iPhone 15 models, iPhone 16, iPhone 16 Plus, iPhone 16 Pro and iPhone 16 Pro Max...",
    "Battery life claim refers to larger models. All battery claims depend on network configuration and many other factors; actual results will vary...",
    "Data plan is required. 5G is available in selected markets and through selected carriers...",
    "Accessories are sold separately. The included USB-C Charge Cable is compatible with AirPods Pro (2nd generation)...",
    "iPhone 16 models are splash, water and dust resistant...",
    "On a mass balance allocation. Responsible sourcing of wood fibre is defined in Apple’s Responsible Fibre Specification.",
    "iPhone 14 and later can detect a severe car crash and call for help...",
    "Visual intelligence is available in iOS 18.2 or later on iPhone 16 models...",
    "Mac, iPad and Apple Watch trade-in is available only in-store in India...",
    "Requires an iPhone and Apple Watch with second-generation Ultra Wideband chip...",
    "Features are subject to change. Some features, applications and services may not be available in all regions or all languages."
];

const staticParagraphs = [
    "Listed pricing is Maximum Retail Price (inclusive of all taxes).",
    "‡Includes instant cashback and No Cost EMI.",
    "No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3-, 6-, 9- or 12-month tenures from most leading card issuers...",
    "Representative example: A purchase of ₹79900.00 repaid over 12 months with an interest rate of 15.99% p.a. and No Cost EMI savings of ₹6514.00 requires monthly payments of ₹6658.00. Total amount payable: ₹79900.00.",
    "Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank and ICICI Bank cards only...",
    "◊No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3-, 6-, 9- or 12-month tenures...",
];

const Terms = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <footer className="bg-[#f5f5f7] text-gray-700 text-[11px] leading-relaxed px-4 sm:px-6 lg:px-8 py-6">
            <div className="container mx-auto space-y-6">

                {/* Static Text Blocks - Shown always */}
                <div className="space-y-3">
                    {staticParagraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                    ))}
                </div>

                {/* Desktop View - Numbered List */}
                <div className="hidden sm:block">
                    <ol className="list-decimal list-inside space-y-2">
                        {disclaimerData.map((text, i) => (
                            <li key={i}>{text}</li>
                        ))}
                    </ol>
                </div>

                {/* Mobile View - Collapsible List */}
                <div className="sm:hidden space-y-2">
                    {disclaimerData.map((text, i) => (
                        <div key={i} className="border-b border-gray-300 pb-2">
                            <button
                                className="w-full text-left font-medium"
                                onClick={() => toggle(i)}
                            >
                                {`${i + 1}. ${text.slice(0, 40)}...`}
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out text-gray-600 ${openIndex === i ? "max-h-[1000px]" : "max-h-0 overflow-hidden"
                                    }`}
                            >
                                <p className="pt-1">{text}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </footer>
    );
};

export default Terms;
