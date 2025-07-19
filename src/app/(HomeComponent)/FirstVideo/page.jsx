export default function FirstVideo() {
    return (
        <>
            {/* Header Section */}
            <div className="w-full flex justify-center items-center py-8 px-4">
                <div className="w-full max-w-6xl">
                    <div className="w-full px-4 sm:px-6">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 text-center sm:text-left">
                            <h1 className="text-4xl sm:text-5xl font-semibold w-full sm:w-auto">
                                iPhone
                            </h1>
                            <p className="text-lg md:text-xl font-bold w-full sm:w-auto">
                                Designed to be loved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Section */}
            <div className="w-full flex justify-center items-center py-8 px-4">
                <div className="w-full max-w-8xl aspect-video">
                    <video
                        className="w-full h-full object-cover rounded-xl shadow-xl"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    >
                        <source src="/Video/V1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </>
    );
}


