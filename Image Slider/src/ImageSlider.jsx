import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = ({ Image, currentIndex, setCurrentIndex }) => {
  const prevSlider = () => {
    setCurrentIndex((prev) => (prev === 0 ? Image.length - 1 : prev - 1));
  };

  const nextSlider = () => {
    setCurrentIndex((prev) => (prev === Image.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <div className="relative max-w-[1200px] w-full h-[650px] overflow-hidden">
        <div className="relative w-full h-full">
          {Image.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10 " : "opacity-0 z-0 "
              }     ${index<currentIndex?"translate-x-full":"translate-x-0"}`
        
            }
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4 z-20">
          <button onClick={prevSlider}>
            <ChevronLeft size={50} color="#fff" />
          </button>
          <button onClick={nextSlider}>
            <ChevronRight size={50} color="#fff" />
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {Image.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
