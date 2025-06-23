"use client";

import { TVideoState } from "@/types";
import { Pause, Play } from "lucide-react";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  videostate: TVideoState;
  setVideoState: React.Dispatch<React.SetStateAction<TVideoState>>;
}

export default function LazyVideo({
  src,
  poster,
  videostate,
  setVideoState,
  ...props
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { ref: inViewRef, inView } = useInView();

  const setRefs = (node: HTMLDivElement) => {
    inViewRef(node);
  };

  return (
    <div ref={setRefs}>
      <video
        className="absolute inset-0 z-10 size-full object-cover"
        ref={videoRef}
        controls={false}
        autoPlay
        loop
        poster={poster}
        preload="none"
        {...props}
      >
        {inView && <source src={src} type="video/mp4" />}
        Your browser does not support the video tag.
      </video>
      <button
        onClick={() => {
          setVideoState((pre) => {
            if (pre === "playing") {
              videoRef.current?.pause();
              return "pause";
            }
            videoRef.current?.play();
            return "playing";
          });
        }}
        className="opacity-20 group-hover/videopart:opacity-100 transition-opacity duration-300 absolute z-20 top-5 max-sm:left-3.5 flex items-center justify-center bg-white/70 backdrop-blur-2xl size-14 rounded-full"
      >
        {videostate === "playing" ? <Pause size={18} /> : <Play size={18} />}
      </button>
    </div>
  );
}
