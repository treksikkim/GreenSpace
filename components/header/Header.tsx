"use client";

import Image from "next/image";
import React from "react";
import NavItems from "./NavItems";
import {  Headset } from "lucide-react";
import OpenGetQuoteDialog from "../Utils/OpenGetQuoteDialog";
import Button from "../Button";
import {
  MobileMenuButton,
  MobileSidebar,
  useMobileNav,
} from "./MobileNavItesm";

export default function Header() {
  const { isOpen, toggleSidebar, closeSidebar } = useMobileNav();
  return (
    <>
      <div className="sticky top-0 z-50 backdrop-blur-2xl bg-[#ffffff8e] shadow-xl">
        <div className="wrapper flex items-center justify-between py-3.5">
          <Image
            className="w-[10rem]"
            alt="Green Space Logo"
            src={"/Green-Space-Interior-logo-5.1.png"}
            // src={"/Green-Space-Interior-logo-new1.png"}
            height={500}
            width={500}
          />

          <div className="max-sm:hidden">
            <NavItems />
          </div>

          {/* <MobileSideBar>
          <NavItems />
        </MobileSideBar> */}

          <OpenGetQuoteDialog isOpen>
            <Button className="max-sm:hidden">
              <Headset size={15} />
              Booking & Consultation
            </Button>
          </OpenGetQuoteDialog>

          {/* <AlignJustify className="max-sm:block hidden" /> */}

          {/* Mobile Menu Button - Visible only on mobile */}
          <MobileMenuButton onClick={toggleSidebar} isOpen={isOpen} />
        </div>
      </div>
      {/* Mobile Sidebar - Only renders on mobile */}
      <MobileSidebar isOpen={isOpen} onClose={closeSidebar} />
    </>
  );
}
