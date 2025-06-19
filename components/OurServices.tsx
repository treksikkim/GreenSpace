"use client";

import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { ArrowUpRight, CircleArrowRight } from "lucide-react";

export default function OurServices() {
  SwiperCore.use([Navigation]);

  const swiperRef = useRef<SwiperClass | null>(null);
  const [sliderPreviewView, setSliderPreviewView] = useState(4);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSliderPreviewView(window.innerWidth <= 639 ? 1 : 4);
    }
  }, []);

  const goNext = () => {
    swiperRef.current?.slideNext();
  };

  const goBack = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <div className="w-full relative mx-auto max-w-[90%] max-sm:max-w-full max-sm:mx-0">
      <Swiper
        slidesPerView={sliderPreviewView}
        centeredSlides={false}
        spaceBetween={40}
        className={cn("w-full hover:cursor-grab")}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
          <SwiperSlide
            key={item}
            className="flex-center flex-col relative min-h-[19rem] w-48 overflow-hidden max-sm:w-full z-10"
          >
            <div
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="block  min-h-[19rem]"
            >
              <div className="overflow-hidden relative w-full  min-h-[19rem]">
                <Image
                  className="w-full min-h-[19rem] object-cover"
                  src={"/services/service1.jpg"}
                  alt="Service Image"
                  height={1200}
                  width={1200}
                />
                <div className="absolute inset-0 bg-[#00776d0c] flex items-end z-0">
                  <h2 className="font-[400] tracking-wider bg-[#00776da6] w-full text-lg text-white text-center py-3.5">
                    Modular Kitchen
                  </h2>
                </div>
                <button className="size-10  absolute right-0 top-0 bg-secondary flex items-center justify-center z-10">
                  <ArrowUpRight size={18} color="#fff" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="max-sm:flex max-sm:gap-9 max-sm:pt-2.5 max-sm:justify-center">
        <div className="absolute top-0 bottom-0 -left-12 flex items-center justify-center max-sm:static">
          <CircleArrowRight
            className="rotate-180 active:scale-90 cursor-pointer"
            strokeWidth={1}
            color="#000"
            onClick={goBack}
            size={30}
          />
        </div>

        <div className="absolute top-0 bottom-0 -right-12 flex items-center justify-center max-sm:static">
          <CircleArrowRight
            strokeWidth={1}
            color="#000"
            className="active:scale-90 cursor-pointer"
            onClick={goNext}
            size={30}
          />
        </div>
      </div>
    </div>
  );
}
