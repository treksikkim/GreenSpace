"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface IProps extends React.ComponentProps<"span"> {
  from?: number;
  to: number;
  intervel?: number;
}
export default function Counter({
  from = 0,
  to,
  intervel = 1,
  ...rest
}: IProps) {
  const [number, setNumber] = useState(from);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      const timeIntervelId = setInterval(() => {
        setNumber((prev) => {
          if (prev >= to) {
            clearInterval(timeIntervelId);
            return to;
          }
          return prev + 1;
        });
      }, intervel);

      return () => clearInterval(timeIntervelId);
    }
  }, [inView]);

  return (
    <span ref={ref} {...rest}>
      {number}
    </span>
  );
}
