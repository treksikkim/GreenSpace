"use client";

import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { CircleArrowRight, Play, Star } from "lucide-react";

export default function Reviews() {
  SwiperCore.use([Navigation]);
  const swiperRef = useRef<SwiperClass | null>(null);
  const [sliderPreviewView, setSliderPreviewView] = useState(3);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSliderPreviewView(window.innerWidth <= 639 ? 1 : 3);
    }
  }, []);

  const goNext = () => {
    swiperRef.current?.slideNext();
  };

  const goBack = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <div className="w-full font-jost relative mx-auto max-w-[90%]">
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
            className="flex-center shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] mb-6 border border-amber-200 p-1.5 flex-col relative w-48 overflow-hidden sm:w-full z-10"
          >
            <div className="block min-h-[13rem]">
              <div className="overflow-hidden relative w-full  min-h-[13rem]">
                <Image
                  className="w-full min-h-[13rem] object-cover"
                  src={"/happy-customer.png"}
                  alt="Service Image"
                  height={1200}
                  width={1200}
                />
                {/* <div className="absolute inset-0 bg-[#00776d0c] flex items-end z-0">
                  <h2 className="font-[400] tracking-wider bg-[#00776da6] w-full text-lg text-white text-center py-3.5">
                    Sumit Mukherjee Kolkata
                  </h2>
                </div> */}
                <button className="size-10  absolute right-0 top-0 bg-[#00776da1] flex items-center justify-center z-10">
                  <Play size={15} color="#fff" />
                </button>
              </div>

              <div className="p-3 px-3">
                {/* <h2 className="font-[400] tracking-wider bg-[#00776d] w-full text-lg text-white text-center py-3.5">
                  Sumit Mukherjee Kolkata
                </h2> */}
                <h2 className="font-semibold">Sumit Mukherjee Kolkata</h2>
                <p className="line-clamp-2">
                  Their service is one of the best service in kolkata and
                  provide customized designs which has
                </p>

                <div className="flex items-center gap-1.5 mt-2.5 text-primary">
                  <Star strokeWidth={0} fill="#00776e" size={18} />
                  <Star strokeWidth={0} fill="#00776e" size={18} />
                  <Star strokeWidth={0} fill="#00776e" size={18} />
                  <Star strokeWidth={0} fill="#00776e" size={18} />
                  <Star strokeWidth={0} fill="#00776e" size={18} />
                </div>
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
