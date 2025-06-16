"use client";

import Image from "next/image";
import React, { useState } from "react";
import Button from "../Button";
import {
  CircleArrowRight,
  Headset,
  House,
  Presentation,
  ShieldCheck,
} from "lucide-react";
import { BANNER_ITEMS } from "@/constant";
import { cn } from "@/utils/cn";
import OpenGetQuoteDialog from "../Utils/OpenGetQuoteDialog";

export default function Banner() {
  const [currentBannerIndex, setCurrentBannerInfo] = useState(0);

  const handleNextBanner = () => {
    setCurrentBannerInfo((state) => {
      if (state === BANNER_ITEMS.length - 1) return 0;
      return state + 1;
    });
  };

  const handlePrevBanner = () => {
    setCurrentBannerInfo((state) => {
      if (state === 0) return BANNER_ITEMS.length - 1;
      return state - 1;
    });
  };

  return (
    <section className="max-sm:mb-24 max-sm:mt-72">
      <div className="wrapper relative font-jost w-full overflow-hidden max-sm:overflow-visible aspect-[3/1] max-sm:aspect-[3/3] rounded-tr-3xl rounded-bl-3xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
        {BANNER_ITEMS.map((item, index) => (
          <Image
            key={item.id}
            className={cn(
              "size-full object-cover absolute",
              "transition-all duration-[2000ms]",
              currentBannerIndex === index
                ? "opacity-100 backdrop-blur-none"
                : "opacity-0 backdrop-blur-3xl"
            )}
            alt="Hero Section Image"
            src={item.bannerImage}
            height={1920}
            width={1920}
          />
        ))}

        <div className="absolute inset-0 black-overlay-to-right z-10 flex flex-col justify-center items-start">
          {BANNER_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "space-y-3 px-10 absolute max-sm:px-0 max-sm:-top-[17rem]",
                currentBannerIndex === index ? "z-10" : "z-0"
              )}
            >
              <h2
                className={cn(
                  "font-medium text-3xl w-fit bg-[#fef3c6] py-1 px-3.5 text-black",
                  "transition-all duration-1000 overflow-hidden",
                  currentBannerIndex === index
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-16 opacity-0",
                  "max-sm:bg-white max-sm:px-0"
                )}
              >
                {item.heading}
              </h2>
              <p
                className={cn(
                  "text-white max-w-lg tracking-wider font-[300]",
                  "transition-all duration-1000 overflow-hidden",
                  currentBannerIndex === index
                    ? "translate-y-0 opacity-100"
                    : "translate-x-16 opacity-0",
                  "max-sm:text-black max-sm:mb-5 max-sm:max-w-full max-sm:w-full"
                )}
              >
                {item.subheading}
              </p>

              {/* <OpenGetQuoteDialog isOpen>
                <Button className={cn("bg-primary")}>
                  <Headset size={15} />
                  Book Free Consultation
                </Button>
              </OpenGetQuoteDialog> */}

              <OpenGetQuoteDialog
                isOpen
                className={cn(
                  index === currentBannerIndex ? "opacity-100" : "opacity-0"
                )}
              >
                <Button>
                  <Headset size={15} />
                  Book Free Consultation
                </Button>
              </OpenGetQuoteDialog>
            </div>
          ))}

          <div className="absolute flex items-center gap-7 bottom-9 left-10 max-sm:bottom-16">
            <CircleArrowRight
              className="rotate-180 active:scale-90 cursor-pointer"
              strokeWidth={1}
              color="#fff"
              onClick={handlePrevBanner}
            />
            <CircleArrowRight
              strokeWidth={1}
              color="#fff"
              className="active:scale-90 cursor-pointer"
              onClick={handleNextBanner}
            />
          </div>
        </div>

        <div className="absolute z-20 right-0 bottom-0 max-sm:-bottom-10 flex items-center gap-8 bg-white backdrop-blur-2xl py-3.5 px-3.5 rounded-t-2xl">
          <div className="flex flex-col gap-1 justify-center items-center">
            <House strokeWidth={1} size={18} />
            <h3 className="font-medium text-xs text-center">
              20% Extra Storage
            </h3>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <ShieldCheck strokeWidth={1} size={18} />
            <h3 className="font-medium text-xs text-center">1 Year Warranty</h3>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <Presentation strokeWidth={1} size={18} />
            <h3 className="font-medium text-xs text-center">Modern Design</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
