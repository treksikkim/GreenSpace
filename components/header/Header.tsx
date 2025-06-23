"use client";

import Image from "next/image";
import React from "react";
import NavItems from "./NavItems";
import { Headset, Menu } from "lucide-react";
import OpenGetQuoteDialog from "../Utils/OpenGetQuoteDialog";
import Button from "../Button";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { useDispatch } from "react-redux";
import { setMobileMenu } from "@/redux/slice/mobileMenuSlice";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div className="wrapper flex items-center justify-between py-3.5">
          <Link href="/">
            <Image
              className="w-[12rem]"
              alt="Green Space Logo"
              src={"/logo.png"}
              height={500}
              width={500}
            />
          </Link>

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

          <button
            onClick={() => {
              dispatch(setMobileMenu(true));
            }}
            className="lg:hidden p-2 rounded-lg hover:bg-amber-50 transition-colors duration-200 relative overflow-hidden group"
            aria-label="Toggle mobile menu"
          >
            <div className="bg-amber-300/20 w-[60%] h-[100%] rotate-[45deg] absolute transition-all duration-[800ms] group-hover:left-[100%]"></div>
            <Menu
              size={24}
              className={cn(
                "text-gray-700 transition-transform duration-300 relative z-10"
              )}
            />
          </button>
        </div>
      </div>
    </>
  );
}
