"use client";

import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { CircleArrowRight } from "lucide-react";

export default function OurDesignGallery() {
  SwiperCore.use([Navigation]);
  const swiperRef = useRef<SwiperClass | null>(null);
  const [sliderPreviewView, setSliderPreviewView] = useState(2);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSliderPreviewView(window.innerWidth <= 639 ? 1 : 2);
    }
  }, []);

  const goNext = () => {
    swiperRef.current?.slideNext();
  };

  const goBack = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <div className="w-full relative font-jost mx-auto max-w-[90%]">
      <Swiper
        slidesPerView={sliderPreviewView}
        centeredSlides={false}
        spaceBetween={40}
        className={cn("w-full hover:cursor-grab")}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <SwiperSlide
            key={item}
            className="flex-center flex-col relative h-60 w-48 overflow-hidden sm:w-full sm:h-96"
          >
            <div className="inline-block relative overflow-hidden rounded-b-2xl">
              <Image
                src={"/gallery-image.jpg"}
                alt="Service Image"
                height={1200}
                width={1200}
              />
              <div className="absolute left-0 right-0 bottom-0 p-5 bg-[#00776dc2] text-white">
                <h2>Modern Minimalistic 4 BHK Home Of Auro Smitha</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="flex items-center justify-center gap-5 mt-10">
        <CircleArrowRight
          className="rotate-180 active:scale-90 cursor-pointer"
          strokeWidth={1}
          color="#000"
          onClick={goBack}
          size={30}
        />
        <CircleArrowRight
          strokeWidth={1}
          color="#000"
          className="active:scale-90 cursor-pointer"
          onClick={goNext}
          size={30}
        />
      </div> */}

      <div className="absolute top-0 bottom-0 -left-12 flex items-center justify-center">
        <CircleArrowRight
          className="rotate-180 active:scale-90 cursor-pointer"
          strokeWidth={1}
          color="#000"
          onClick={goBack}
          size={30}
        />
      </div>

      <div className="absolute top-0 bottom-0 -right-12 flex items-center justify-center">
        <CircleArrowRight
          strokeWidth={1}
          color="#000"
          className="active:scale-90 cursor-pointer"
          onClick={goNext}
          size={30}
        />
      </div>
    </div>
  );
}
