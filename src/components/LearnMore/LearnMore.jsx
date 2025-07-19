"use client";

const Page1 = () => {
    return (
        <main className="min-h-screen bg-black text-white flex flex-col items-center text-center px-4">
            {/* Content Section */}
            <div className="flex flex-col items-center justify-center pt-16 sm:pt-20 px-2 w-full max-w-4xl">
                <h1 className="text-lg sm:text-xl font-semibold leading-none">
                    iPhone 16 Pro
                </h1>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mt-1">
                    Built for Apple Intelligence.
                </h2>
                <img
                    src="/Image/image1.png"
                    alt="iPhone 16 Pro"
                    className="mt-6 w-full max-w-[800px] mx-auto block"
                />
                 {/* Buy Button */}
                <a
                    href="/in/shop/goto/buy/iphone16pro"
                    className="mt-0 inline-block bg-blue-600 no-underline hover:bg-blue-700 text-white text-sm sm:text-base font-medium py-2 px-6 rounded-full transition duration-300"
                    aria-label="Buy iPhone 16 Pro"
                >
                    Buy
                </a>
                {/* Apple-Style Pricing Block */}
                <div className="mt-4 text-gray-300 text-sm sm:text-base">
                    <p className="flex flex-wrap items-center justify-center gap-1">
                        <span
                            data-pricing-product="iphone-16-pro"
                            data-product-template="${price.display.from}"
                            data-pricing-loaded=""
                        >
                            From ₹119900.00
                        </span>
                        <span className="text-blue-500 no-underline">
                            <a href="#footnote-1" aria-label="Footnote * symbol" className="no-underline">*</a>
                        </span>
                        <span className="ml-2" data-toggle="acmi">
                            <span
                                className="sosumi-link-follows"
                                data-pricing-product="iphone-16-pro"
                                data-product-template=" or ${price.display.perMonth} for ${price.display.months} mo."
                                data-pricing-loaded=""
                            >
                                or ₹9825.00/mo. for 12 mo.
                            </span>
                            <span className="text-blue-500 ml-1 no-underline">
                                <a href="#footnote-‡" aria-label="Footnote ‡ symbol" className="no-underline"> ‡</a>
                            </span>
                        </span>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Page1;
