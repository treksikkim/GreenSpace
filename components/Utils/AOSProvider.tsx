"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface IProps {
  children: React.ReactNode;
}

export default function AOSProvider({ children }: IProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation runs only once
    });
  }, []);

  return children; // This component doesn't render anything, it just initializes AOS
}
