"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface IProps {
  children: React.ReactNode;
}

export default function MobileSideBar({ children }: IProps) {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <aside onClick={() => setIsOpen(false)} className="fixed inset-0 min-h-screen flex items-start justify-end">
      <div className="h-screen w-[80%] backdrop-blur-2xl bg-teal-200/90">
        <div>
          <Image
            className="w-[10rem]"
            alt="Green Space Logo"
            src={"/Green-Space-Interior-logo-5.1.png"}
            height={200}
            width={200}
          />
        </div>
        {children}
      </div>
    </aside>
  );
}
