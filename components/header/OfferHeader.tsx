"use client";

import { OFFER_LISTS } from "@/constant";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";

export default function OfferHeader() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervelId = setInterval(() => {
      setCurrentIndex((state) => {
        if (state === OFFER_LISTS.length - 1) return 0;
        return state + 1;
      });

      return () => clearInterval(intervelId);
    }, 5000);
  }, []);

  return (
    <div className="w-full bg-primary overflow-hidden">
      <ul className="font-jost relative min-h-12 wrapper">
        {OFFER_LISTS.map((item, index) => (
          <li
            key={item.id}
            className={cn(
              "font-[400] text-lg text-white flex flex-col items-center justify-center text-center absolute inset-0",
              "",
              currentIndex === index ? "translate-y-0" : "translate-y-full transition-all duration-700",
              "max-sm:text-xs" 
            )}
          >
            <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
