"use client";

import { X } from "lucide-react";
import DialogWrapper from "./DialogWrapper";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function VideoViewDialog({ isOpen, setIsOpen }: IProps) {
  return (
    <DialogWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[45rem] aspect-video relative"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute p-2.5 rounded-full right-0 z-10 -top-12 cursor-pointer flex items-center justify-center bg-teal-400 text-white"
        >
          <X />
        </button>
        <iframe
          className="size-full z-0"
          src="https://www.youtube.com/embed/6MqJ7mU6yNs?rel=0"
          allowFullScreen
          allow="accelerometer *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *; web-share *;"
        ></iframe>
      </div>
    </DialogWrapper>
  );
}
