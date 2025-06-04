import Image from "next/image";
import React from "react";
import NavItems from "./NavItems";
import Button from "../Button";
import { AlignJustify } from "lucide-react";
import OpenGetQuoteDialog from "../Utils/OpenGetQuoteDialog";

export default function Header() {
  return (
    <div className="wrapper">
      <div className="flex items-center justify-between py-3.5">
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
          <Button className="max-sm:hidden">Booking & Consultation</Button>
        </OpenGetQuoteDialog>

        <AlignJustify className="max-sm:block hidden" />
      </div>
    </div>
  );
}
