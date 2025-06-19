"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import LazyVideo from "./LazyVideo";

export default function VideoViewSection() {
  const [videoState, setVideoState] = useState<
    "init" | "playing" | "pause" | "stop"
  >("stop");

  return (
    <div className="relative group/videopart min-w-[60%] h-full max-w-[60%] overflow-hidden max-sm:w-full max-sm:max-w-max">
      <Image
        className="size-full max-h-[35rem] min-h-[35rem] object-cover group-hover/videopart:scale-105 transition-all duration-700"
        src={"/our-works.jpg"}
        alt="Our Works"
        height={1200}
        width={1200}
      />

      {/* <div className="bg-white/40 w-[10%] h-[200%] -rotate-[45deg] absolute -left-[100%] transition-all duration-[2000ms] group-hover/videopart:translate-y-[-120%] group-hover/videopart:left-[100%]"></div> */}

      <div className="absolute inset-0 black-overlay-to-top flex flex-col justify-end p-10">
        {videoState === "stop" ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="size-20 relative cursor-pointer">
              <button
                onClick={() => {
                  setVideoState("init");
                }}
                className="size-full flex items-center justify-center rounded-full bg-[#ffffffc5] backdrop-blur-3xl"
              >
                <Play size={25} color="#fff" fill="#fff" />
              </button>
              <div
                onClick={() => {
                  setVideoState("init");
                }}
                className="size-full absolute top-0 bg-amber-600 rounded-full blur-3xl"
              ></div>
            </div>
          </div>
        ) : (
          <LazyVideo
            // poster="/our-works.jpg"
            src="/videos/MicrosoftTeams-video.mp4"
          />
        )}

        <h2 className="text-2xl text-white group-hover/videopart:-translate-y-3.5 transition-all duration-500">
          2 BHK Designs
        </h2>
      </div>
    </div>
  );
}
