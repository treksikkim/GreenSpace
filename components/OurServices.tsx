"use client";

import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { ArrowUpRight, CircleArrowRight } from "lucide-react";

const OUR_SERVICES = [
  {
    id: 1,
    title: "Modular Kitchen Designs",
    image: "/Services/ModularKitchenDesigns.webp",
  },
  {
    id: 2,
    title: "Living Room Designs",
    image: "/Services/LivingRoom.webp",
  },
  {
    id: 3,
    title: "Bedroom Designs",
    image: "/Services/BadRoom.webp",
  },
  {
    id: 4,
    title: "Kids Bedroom Designs",
    image: "/Services/KidsBadroom.webp",
  },
  {
    id: 5,
    title: "Wardrobe Designs",
    image: "/Services/WardrobeDesign.webp",
  },
  {
    id: 6,
    title: "Dining Room Designs",
    image: "/Services/DiningRoom.webp",
  },
  {
    id: 7,
    title: "Pooja Room Designs",
    image: "/Services/PoojaRoom.webp",
  },
  {
    id: 8,
    title: "Space Saving Designs",
    image: "/Services/SpaceSaving.webp",
  },
  {
    id: 9,
    title: "Bathroom Designs",
    image: "/Services/BathRoom.webp",
  },
  {
    id: 10,
    title: "Balcony Designs",
    image: "/Services/Balcony.webp",
  },
  {
    id: 11,
    title: "1 BHK Designs",
    image: "/Services/1BhK.webp",
  },
  {
    id: 12,
    title: "2 BHK Designs",
    image: "/Services/2BhK.webp",
  },
  {
    id: 13,
    title: "3 BHK Designs",
    image: "/Services/3bhk.webp",
  },
];

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
        {OUR_SERVICES.map((item, index) => (
          <SwiperSlide
            key={item.id}
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
                  src={item.image}
                  alt="Service Image"
                  height={1200}
                  width={1200}
                />
                <div className="absolute inset-0 bg-[#00776d0c] flex items-end z-0">
                  <h2 className="font-[400] tracking-wider bg-[#00776da6] backdrop-blur-3xl w-full text-lg text-white text-center py-3.5">
                    {item.title}
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
