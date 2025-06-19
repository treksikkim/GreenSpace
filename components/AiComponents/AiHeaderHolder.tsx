"use client";

import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";

interface IProps extends React.ComponentProps<"header"> {
  children: React.ReactNode;
}

export default function AiHeaderHolder({ children, ...props }: IProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false);
      } else {
        // Scrolling up or at top
        setIsVisible(true);
      }

      // Add background when scrolled
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events for better performance
    let timeoutId: NodeJS.Timeout;
    const throttledHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      clearTimeout(timeoutId);
    };
  }, [lastScrollY]);
  return (
    <header
      {...props}
      className={cn(
        "shadow-lg sticky top-0 z-50 backdrop-blur-2xl bg-[#ffffff8e] transition-all duration-500",
        // "sticky top-0 z-50 transition-all duration-500",
        isVisible ? "translate-y-0" : "-translate-y-full",
        isScrolled ? "shadow-xl backdrop-blur-sm bg-white/95" : "bg-white"
      )}
    >
      {children}
    </header>
  );
}
