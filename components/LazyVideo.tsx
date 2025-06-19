"use client";

import { useInView } from "react-intersection-observer";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
}

export default function LazyVideo({ src, poster, ...props }: LazyVideoProps) {
  const { ref, inView } = useInView();

  return (
    <video
      className="absolute inset-0 bottom-0 size-full object-cover"
      ref={ref}
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
  );
}
