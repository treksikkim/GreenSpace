"use client";

import React from "react";
import { MobileSidebar } from "./header/MobileNavItesm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setMobileMenu } from "@/redux/slice/mobileMenuSlice";

export default function Slider() {
  const isOpen = useSelector((state: RootState) => state.mobileMenuReducer);
  const dispatch = useDispatch();

  return (
    <MobileSidebar
      isOpen={isOpen}
      onClose={() => {
        dispatch(setMobileMenu(false));
      }}
    />
  );
}
