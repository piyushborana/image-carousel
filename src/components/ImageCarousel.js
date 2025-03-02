import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample images
const models = [
  {
    name: "Flux",
    time: "Generation time 30sec",
    tags: ["text-to-image", "ControlNet", "face-generation"],
    image: "https://via.placeholder.com/400x250?text=Flux",
  },
  {
    name: "Flux Realtime",
    time: "Generation time 5sec",
    tags: ["text-to-image", "image-to-image"],
    image: "https://via.placeholder.com/400x250?text=Flux+Realtime",
  },
  {
    name: "Stable Diffusion XL",
    time: "with loras",
    tags: ["text-to-image", "ControlNet", "face-generation"],
    image: "https://via.placeholder.com/400x250?text=Stable+Diffusion+XL",
  },
];

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % models.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + models.length) % models.length);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Image Generation Models</h2>

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform ease-in-out duration-300"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {models.map((model, i) => (
            <motion.div key={i} className="min-w-full flex justify-center items-center">
              <motion.div
                className="relative w-80 h-52 rounded-lg overflow-hidden shadow-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <img src={model.image} alt={model.name} className="w-full h-full object-cover" />

                {/* Overlay on hover */}
                <motion.div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-lg font-semibold">{model.name}</h3>
                  <p className="text-white text-sm">{model.time}</p>

                  {/* Tags */}
                  <div className="mt-2 flex gap-2 flex-wrap justify-center">
                    {model.tags.map((tag, idx) => (
                      <span key={idx} className="bg-white text-black text-xs px-2 py-1 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-3 flex gap-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg">Generate</button>
                    <button className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-lg">API Docs</button>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-md"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-md"
        onClick={nextSlide}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ImageCarousel;
