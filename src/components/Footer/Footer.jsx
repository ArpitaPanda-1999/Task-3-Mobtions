// 'use client';

// import { ChevronDown, ChevronUp } from 'lucide-react';
// import { useState } from 'react';

// const footerSections = [
//     {
//         title: 'Shop and Learn',
//         items: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards'],
//     },
//     {
//         title: 'Apple Wallet',
//         items: ['Wallet'],
//     },
//     {
//         title: 'Account',
//         items: ['Manage Your Apple Account', 'Apple Store Account', 'iCloud.com'],
//     },
//     {
//         title: 'Entertainment',
//         items: ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Podcasts', 'Apple Books', 'App Store'],
//     },
//     {
//         title: 'Apple Store',
//         items: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Group Reservations', 'Apple Camp', 'Apple Trade In', 'Ways to Buy', 'Recycling Programme', 'Order Status', 'Shopping Help'],
//     },
//     {
//         title: 'For Business',
//         items: ['Apple and Business', 'Shop for Business'],
//     },
//     {
//         title: 'For Education',
//         items: ['Apple and Education', 'Shop for Education', 'Shop for University'],
//     },
//     {
//         title: 'For Healthcare',
//         items: ['Apple in Healthcare', 'Mac in Healthcare', 'Health on Apple Watch'],
//     },
//     {
//         title: 'Apple Values',
//         items: ['Accessibility', 'Education', 'Environment', 'Privacy', 'Supply Chain Innovation'],
//     },
//     {
//         title: 'About Apple',
//         items: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple'],
//     },
// ];

// const Footer = () => {
//     const [openSections, setOpenSections] = useState({});
//     const [openSubSections, setOpenSubSections] = useState({});

//     const toggleSection = (index) => {
//         setOpenSections((prev) => ({
//             ...prev,
//             [index]: !prev[index],
//         }));
//     };

//     const toggleSubSection = (sectionIdx, subIdx) => {
//         const key = `${sectionIdx}-${subIdx}`;
//         setOpenSubSections((prev) => ({
//             ...prev,
//             [key]: !prev[key],
//         }));
//     };

//     return (
//         <footer className="bg-[#f5f5f7] text-gray-700 text-xs border-t border-gray-300">
//             <div className="max-w-6xl mx-auto px-4 py-8">

//                 {/* Desktop View */}
//                 <div className="hidden lg:grid grid-cols-5 gap-6 text-left">
//                     {footerSections.map((section, idx) => (
//                         <div key={idx}>
//                             <ul className="space-y-[2px]">
//                                 <li className="text-[12px] font-semibold text-gray-800 mb-2 tracking-wide uppercase">
//                                     {section.title}
//                                 </li>
//                                 {section.items.map((item, i) => (
//                                     <li key={i} className="text-[11px] hover:underline cursor-pointer">{item}</li>
//                                 ))}
//                             </ul>
//                             {section.subSections?.map((sub, si) => (
//                                 <div key={si} className="mt-4">
//                                     <p className="text-[12px] font-semibold text-gray-800 mb-2 tracking-wide uppercase">
//                                         {sub.title}
//                                     </p>
//                                     <ul className="space-y-[2px]">
//                                         {sub.items.map((item, ii) => (
//                                             <li key={ii} className="text-[11px] hover:underline cursor-pointer">{item}</li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             ))}
//                         </div>
//                     ))}
//                 </div>

//                 {/* Mobile View */}
//                 <div className="lg:hidden space-y-4">
//                     {footerSections.map((section, sectionIdx) => (
//                         <div key={sectionIdx} className="border-b border-gray-300 pb-2">
//                             <button
//                                 onClick={() => toggleSection(sectionIdx)}
//                                 className="w-full text-left text-sm font-medium flex justify-between items-center py-2"
//                             >
//                                 <span className="text-[11px] font-semibold text-gray-800 tracking-wide uppercase">
//                                     {section.title}
//                                 </span>
//                                 {openSections[sectionIdx] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
//                             </button>

//                             {openSections[sectionIdx] && (
//                                 <ul className="pl-4 text-xs space-y-[2px]">
//                                     {section.items.map((item, i) => (
//                                         <li key={i} className="text-[11px]">{item}</li>
//                                     ))}
//                                 </ul>
//                             )}

//                             {section.subSections?.map((sub, subIdx) => {
//                                 const key = `${sectionIdx}-${subIdx}`;
//                                 return (
//                                     <div key={key} className="pt-2 border-t border-gray-300">
//                                         <button
//                                             onClick={() => toggleSubSection(sectionIdx, subIdx)}
//                                             className="w-full text-left text-[10px] font-semibold text-gray-800 tracking-wide uppercase mt-2 flex justify-between items-center"
//                                         >
//                                             {sub.title}
//                                             {openSubSections[key] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
//                                         </button>
//                                         {openSubSections[key] && (
//                                             <ul className="pl-4 text-xs space-y-[2px] mt-1">
//                                                 {sub.items.map((item, ii) => (
//                                                     <li key={ii} className="text-[11px]">{item}</li>
//                                                 ))}
//                                             </ul>
//                                         )}
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     ))}
//                 </div>

//                 {/* Divider and Bottom Links */}
//                 <hr className="my-6 border-gray-300" />
//                 <p className="text-[11px] text-gray-600 leading-relaxed">
//                     More ways to shop: <a href="#" className="text-blue-600 no-underline">Find an Apple Store</a> or{' '}
//                     <a href="#" className="text-blue-600 no-underline">other retailer</a> near you. Or call{' '}
//                     <a href="#" className="text-blue-600 no-underline">000800 040 1966</a>.
//                 </p>
//                 <hr className="my-6 border-gray-300" />

//                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-[11px] text-gray-600 gap-3">
//                     <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
//                     <div className="flex flex-wrap gap-x-4 gap-y-1">
//                         <a href="#" className="no-underline">Privacy Policy</a>
//                         <a href="#" className="no-underline">Terms of Use</a>
//                         <a href="#" className="no-underline">Sales Policy</a>
//                         <a href="#" className="no-underline">Legal</a>
//                         <a href="#" className="no-underline">Site Map</a>
//                         <a href="#" className="no-underline">India</a>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;


'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const footerSections = [
    {
        title: 'Shop and Learn',
        items: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards'],
    },
    {
        title: 'Apple Wallet',
        items: ['Wallet'],
    },
    {
        title: 'Account',
        items: ['Manage Your Apple Account', 'Apple Store Account', 'iCloud.com'],
    },
    {
        title: 'Entertainment',
        items: ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Podcasts', 'Apple Books', 'App Store'],
    },
    {
        title: 'Apple Store',
        items: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Group Reservations', 'Apple Camp', 'Apple Trade In', 'Ways to Buy', 'Recycling Programme', 'Order Status', 'Shopping Help'],
    },
    {
        title: 'For Business',
        items: ['Apple and Business', 'Shop for Business'],
    },
    {
        title: 'For Education',
        items: ['Apple and Education', 'Shop for Education', 'Shop for University'],
    },
    {
        title: 'For Healthcare',
        items: ['Apple in Healthcare', 'Mac in Healthcare', 'Health on Apple Watch'],
    },
    {
        title: 'Apple Values',
        items: ['Accessibility', 'Education', 'Environment', 'Privacy', 'Supply Chain Innovation'],
    },
    {
        title: 'About Apple',
        items: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple'],
    },
];

const Footer = () => {
    const [openSections, setOpenSections] = useState({});
    const [openSubSections, setOpenSubSections] = useState({});

    const toggleSection = (index) => {
        setOpenSections((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const toggleSubSection = (sectionIdx, subIdx) => {
        const key = `${sectionIdx}-${subIdx}`;
        setOpenSubSections((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    // Split into 5 columns manually, 2 sections per column
    const columnCount = 5;
    const groupedSections = Array.from({ length: columnCount }, (_, i) =>
        footerSections.slice(i * 2, i * 2 + 2)
    );

    return (
        <footer className="bg-[#f5f5f7] text-gray-700 text-xs border-t border-gray-300">
            <div className="max-w-6xl mx-auto px-4 py-8">

                {/* Desktop View */}
                <div className="hidden lg:grid grid-cols-5 gap-6 text-left">
                    {groupedSections.map((group, colIdx) => (
                        <div key={colIdx}>
                            {group.map((section, idx) => (
                                <div key={idx} className="mb-4">
                                    <ul className="space-y-1">
                                        <li className="text-[12px] space-y-2 font-semibold text-gray-800 mb-2 tracking-wide uppercase">
                                            {section.title}
                                        </li>
                                        {section.items.map((item, i) => (
                                            <li key={i} className="text-[11px] hover:underline cursor-pointer">{item}</li>
                                        ))}
                                    </ul>
                                    {section.subSections?.map((sub, si) => (
                                        <div key={si} className="mt-4">
                                            <p className="text-[12px] font-semibold text-gray-800 mb-2 tracking-wide uppercase">
                                                {sub.title}
                                            </p>
                                            <ul className="space-y-1">
                                                {sub.items.map((item, ii) => (
                                                    <li key={ii} className="text-[11px] hover:underline cursor-pointer">{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Mobile View */}
                <div className="lg:hidden space-y-4">
                    {footerSections.map((section, sectionIdx) => (
                        <div key={sectionIdx} className="border-b border-gray-300 pb-2">
                            <button
                                onClick={() => toggleSection(sectionIdx)}
                                className="w-full text-left text-sm font-medium flex justify-between items-center py-2"
                            >
                                <span className="text-[11px] font-semibold text-gray-800 tracking-wide uppercase">
                                    {section.title}
                                </span>
                                {openSections[sectionIdx] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                            </button>

                            {openSections[sectionIdx] && (
                                <ul className="pl-4 text-xs space-y-[2px]">
                                    {section.items.map((item, i) => (
                                        <li key={i} className="text-[11px]">{item}</li>
                                    ))}
                                </ul>
                            )}

                            {section.subSections?.map((sub, subIdx) => {
                                const key = `${sectionIdx}-${subIdx}`;
                                return (
                                    <div key={key} className="pt-2 border-t border-gray-300">
                                        <button
                                            onClick={() => toggleSubSection(sectionIdx, subIdx)}
                                            className="w-full text-left text-[10px] font-semibold text-gray-800 tracking-wide uppercase mt-2 flex justify-between items-center"
                                        >
                                            {sub.title}
                                            {openSubSections[key] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                        </button>
                                        {openSubSections[key] && (
                                            <ul className="pl-4 text-xs space-y-[2px] mt-1">
                                                {sub.items.map((item, ii) => (
                                                    <li key={ii} className="text-[11px]">{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>

                {/* Divider and Bottom Links */}
                <hr className="my-6 border-gray-300" />
                <p className="text-[11px] text-gray-600 leading-relaxed">
                    More ways to shop: <a href="#" className="text-blue-600 no-underline">Find an Apple Store</a> or{' '}
                    <a href="#" className="text-blue-600 no-underline">other retailer</a> near you. Or call{' '}
                    <a href="#" className="text-blue-600 no-underline">000800 040 1966</a>.
                </p>
                <hr className="my-6 border-gray-300" />

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-[11px] text-gray-600 gap-3">
                    <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                        <a href="#" className="no-underline">Privacy Policy</a>
                        <a href="#" className="no-underline">Terms of Use</a>
                        <a href="#" className="no-underline">Sales Policy</a>
                        <a href="#" className="no-underline">Legal</a>
                        <a href="#" className="no-underline">Site Map</a>
                        <a href="#" className="no-underline">India</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
