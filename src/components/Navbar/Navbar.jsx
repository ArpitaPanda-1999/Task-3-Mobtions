
"use client";
import { useState } from "react";
import { Search, ShoppingCart } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);

    const navItems = [
        { title: "Store", submenu: ["Shop", "Offers", "Gift Cards"] },
        { title: "Mac", submenu: ["MacBook Air", "MacBook Pro", "iMac"] },
        { title: "iPad", submenu: ["iPad Pro", "iPad Air", "iPad Mini"] },
        { title: "iPhone", submenu: ["iPhone 16", "iPhone 15", "Compare Models"] },
        { title: "Watch", submenu: ["Apple Watch Series 9", "SE", "Ultra 2"] },
        { title: "AirPods", submenu: ["AirPods Pro", "AirPods Max", "Compare"] },
        { title: "TV & Home", submenu: ["Apple TV 4K", "HomePod", "Accessories"] },
        { title: "Accessories", submenu: ["Cases", "Chargers", "Keyboards"] },
        { title: "Support", submenu: ["Help Center", "Contact", "Repair"] },
    ];

    return (
        <>
            <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Brand */}
                        <a href="#" className="text-lg font-semibold text-gray-800 no-underline">
                            Apple UI
                        </a>

                        {/* Desktop Nav Links */}
                        <div className="hidden lg:flex space-x-12 relative">
                            {navItems.map((item) => (
                                <div
                                    key={item.title}
                                    className="relative"
                                    onMouseEnter={() => setHoveredItem(item.title)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    <a
                                        href={`#${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                                        className="text-sm text-gray-700 hover:text-blue-600 transition no-underline"
                                    >
                                        {item.title}
                                    </a>

                                    {/* Dropdown */}
                                    {hoveredItem === item.title && (
                                        <ul className="absolute left-0 top-full bg-white shadow-lg rounded mt-2 py-2 w-48 z-50 animate-slideDown">
                                            {item.submenu.map((sub) => (
                                                <li key={sub}>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline"
                                                    >
                                                        {sub}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Desktop Icons */}
                        <div className="hidden lg:block">
                            <div className="flex space-x-4 text-gray-700">
                                <span className="cursor-pointer">
                                    <Search size={20} />
                                </span>
                                <span className="cursor-pointer">
                                    <ShoppingCart size={20} />
                                </span>
                            </div>
                        </div>

                        {/* Mobile Icons + Toggle */}
                        <div className="flex items-center space-x-4 lg:hidden">
                            <span className="cursor-pointer text-gray-700">
                                <Search size={20} />
                            </span>
                            <span className="cursor-pointer text-gray-700">
                                <ShoppingCart size={20} />
                            </span>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-500 hover:text-gray-700"
                                aria-label="Toggle Menu"
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {isOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Slide Down Nav */}
                    <div
                        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out transform ${isOpen
                            ? "max-h-[600px] opacity-100 translate-y-0"
                            : "max-h-0 opacity-0 -translate-y-4"
                            }`}
                    >
                        <ul className="flex flex-col space-y-2 pt-4 px-2">
                            {navItems.map((item) => (
                                <li key={item.title}>
                                    <a
                                        href={`#${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                                        className="text-gray-700 hover:text-blue-600 block transition no-underline"
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
