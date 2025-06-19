"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const ImageCarousel: React.FC<{ images: string[]; title: string }> = ({
  images,
  title,
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-72 overflow-hidden rounded-t-2xl group">
      <Image
        src={images[currentImage]}
        alt={`${title} - Image ${currentImage + 1}`}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        fill
        objectFit="cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-3 rounded-full shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 text-[#00776e]" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-3 rounded-full shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 text-[#00776e]" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImage
                    ? "bg-white scale-125"
                    : "bg-white/60 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
