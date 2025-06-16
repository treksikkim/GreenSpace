import Image from "next/image";
import React from "react";
import NavItems from "./NavItems";
import { AlignJustify, Headset } from "lucide-react";
import OpenGetQuoteDialog from "../Utils/OpenGetQuoteDialog";
import Button from "../Button";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-2xl bg-[#ffffff8e]">
      <div className="wrapper flex items-center justify-between py-3.5">
        <Image
          className="w-[10rem]"
          alt="Green Space Logo"
          src={"/Green-Space-Interior-logo-5.1.png"}
          height={200}
          width={200}
        />

        <div className="max-sm:hidden">
          <NavItems />
        </div>

        <OpenGetQuoteDialog isOpen>
          <Button className="max-sm:hidden">
            <Headset size={15} />
            Booking & Consultation
          </Button>
        </OpenGetQuoteDialog>

        <AlignJustify className="max-sm:block hidden" />
      </div>
    </div>
  );
}
