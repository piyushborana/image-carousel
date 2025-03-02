import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const templates = [1, 2, 3, 4, 5, 6];

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
        <div className="flex justify-center items-center min-h-screen w-full bg-white px-10">
            <div className="relative w-[1500px] h-[500px] bg-black rounded-2xl shadow-lg p-6 overflow-hidden">
                {/* Heading & Arrow Buttons */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-4xl font-bold text-white">Image Generation Models</h2>
                    <div className="flex space-x-2">
                        <button className="p-2 bg-white shadow-md rounded-full" onClick={() => scroll("left")}>
                            <ArrowLeft size={24} />
                        </button>
                        <button className="p-2 bg-white shadow-md rounded-full" onClick={() => scroll("right")}>
                            <ArrowRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <div ref={scrollRef} className="flex space-x-8 p-4 overflow-hidden">
                        {templates.map((id) => (
                            <motion.div
                                key={id}
                                className="relative w-[400px] h-[350px] rounded-lg shadow-md flex-shrink-0 group overflow-hidden bg-blue-200"
                                whileHover={{ scale: 1.05 }}
                            >
                                {/* Background Div (Light Blue) */}
                                <div className="absolute top-0 left-0 w-full h-full bg-blue-200 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>

                                {/* Image with Fade Effect on Hover */}
                                <img
                                    src="/image.jpeg"
                                    alt={`Template ${id}`}
                                    className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                                />

                                {/* Buttons only visible on hover */}
                                <motion.div
                                    className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4 z-10"
                                >
                                    <button className="px-5 py-2 bg-blue-500 text-white rounded-lg text-base font-semibold">
                                        Generate
                                    </button>
                                    <button className="px-5 py-2 bg-green-500 text-white rounded-lg text-base font-semibold">
                                        API Docs
                                    </button>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

