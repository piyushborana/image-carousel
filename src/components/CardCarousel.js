import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const templates = [
    {
        id: 1,
        title: "Flux",
        customTitle: "Flux",
        image: "/image.png",
        genTime: "30 Sec",
        features: ["text-to-image", "Controlnet", "face-generation"],
        bgColor: "bg-blue-200",
        btnColor: "bg-blue-500",
        textColor: "text-blue-600",
    },
    {
        id: 2,
        title: "Flux Realtime",
        customTitle: "Speed",
        image: "/image2.png",
        genTime: "5 Sec",
        features: ["text-to-image", "image-to-image"],
        bgColor: "bg-white",
        btnColor: "bg-black",
        textColor: "text-black",
    },
    {
        id: 3,
        title: "Stable Diffusion XL",
        customTitle: "SDXL",
        image: "/image3.png",
        genText: "with loras",
        features: ["text-to-image", "Controlnet", "face-generation"],
        bgColor: "bg-gray-300",
        btnColor: "bg-black",
        textColor: "text-black",
    },
    {
        id: 4,
        title: "Stable Diffusion 1.5",
        customTitle: "SD1.5",
        image: "/image4.png",
        genText: "with loras",
        features: ["text-to-image", "Controlnet", "face-generation"],
        bgColor: "bg-slate-900",
        btnColor: "bg-gray-400",
        textColor: "text-white",
    },
    {
        id: 5,
        title: "Controlnet",
        customTitle: "ControlNet",
        image: "/image5.png",
        genText: "with multi controlnet",
        features: ["text-to-image", "Controlnet", "face-generation"],
        bgColor: "bg-gray-400",
        btnColor: "bg-black",
        textColor: "text-black",
    },
];

export default function CardCarousel() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8;
            scrollRef.current.scrollTo({
                left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
            <div className="flex flex-col items-center justify-center w-full bg-white">
                {/* Heading & Arrows */}
                <div className="w-full px-10 py-6 flex justify-stretch items-center text-black z-10">
                    <h2 className="text-4xl font-bold">Image Generation Models</h2>

                    {/* Arrow Buttons */}
                    <div className="flex items-center border-2 bg-white px-2 py-1 rounded-lg">
                        <button className="p-2 rounded-md text-black" onClick={() => scroll("left")}>
                            <ArrowLeft size={24} />
                        </button>
                        <button className="p-2 rounded-md text-black" onClick={() => scroll("right")}>
                            <ArrowRight size={24} />
                        </button>
                    </div>
                </div>

            {/* Scrollable Section */}
            <div className="w-screen h-full flex items-center justify-center overflow-hidden">
                <div ref={scrollRef} className="flex space-x-8 px-10 py-24 overflow-x-auto scrollbar-hide">
                    {templates.map(({ id, title, customTitle, image, genTime, genText, features, bgColor, btnColor, textColor }) => (
                        <motion.div
                            key={id}
                            className="relative w-[400px] h-[350px] rounded-3xl shadow-md flex-shrink-0 group overflow-hidden"
                        >
                            {/* Image */}
                            <img
                                src={image}
                                alt={title}
                                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                            />

                            {/* Dark Overlay (Before Hover) */}
                            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>

                            {/* Background Color on Hover */}
                            <div className={`absolute inset-0 ${bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                            {/* Overlay Text Content */}
                            <div className="absolute top-5 left-0 w-full h-full flex flex-col px-6 z-10">
                                {/* Title */}
                                <h2 className={`text-4xl font-bold text-white group-hover:${textColor} transition-colors duration-300`}>
                                    {title}
                                </h2>

                                {/* Generation Time or Custom Text */}
                                <p className="bg-gradient-to-r from-gray-400 to-gray-400 bg-clip-text text-transparent text-3xl font-bold mt-2 group-hover:text-gray-200 transition-colors duration-300">
                                    {genTime ? `Generation time ${genTime}` : genText}
                                </p>

                                {/* Feature Boxes */}
                                <div className="mt-6 space-y-2">
                                    {features.length > 1 ? (
                                        <>
                                            <div className="flex space-x-2">
                                                {features.slice(0, 2).map((feature, index) => (
                                                    <div key={index} className="border border-black bg-white text-black px-2 py-2 rounded-md shadow-md text-sm font-medium">
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>
                                            {features.slice(2).map((feature, index) => (
                                                <div key={index} className="flex">
                                                    <div className="border border-black bg-white text-black px-2 py-2 rounded-md shadow-md text-sm font-medium">
                                                        {feature}
                                                    </div>
                                                </div>
                                            ))}
                                        </>
                                    ) : (
                                        features.map((feature, index) => (
                                            <div key={index} className="flex">
                                                <div className="border border-black bg-white text-black px-2 py-2 rounded-md shadow-md text-sm font-medium">
                                                    {feature}
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>

                            {/* Hover Buttons & Additional Title */}
                            <motion.div
                                className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center space-y-2 z-10"
                            >
                                {/* Buttons */}
                                <div className="flex space-x-5">
                                    <button className={`px-3 py-2 w-24 ${btnColor} text-white rounded-lg text-base font-semibold`}>
                                        Generate
                                    </button>
                                    <button className={`px-3 py-2 w-24 border-2 border-${btnColor} bg-opacity-20 text-${btnColor} rounded-lg text-base font-semibold`}>
                                        API Docs
                                    </button>
                                    {/* Custom Title Instead of Repeating 'title' */}
                                    <h2 className={`text-3xl font-bold ${textColor}`}>{customTitle}</h2>
                                </div>

                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
