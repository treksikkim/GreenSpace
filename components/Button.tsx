import { cn } from "@/utils/cn";
import React from "react";

export default function Button({
  children,
  className,
  ...rest
}: React.ComponentProps<"button">) {
  return (
    <div className="relative inline-block">
      <button
        {...rest}
        className={cn(
          "group cursor-pointer relative overflow-hidden px-8 py-4 inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1",
          className
        )}
      >
        {children}

        <div className="bg-white/40 w-[60%] h-[100%] rotate-[45deg] absolute -left-[100%] transition-all duration-[1000ms] group-hover:left-[100%]"></div>
      </button>
      <div className="size-full absolute inset-0 bg-teal-500 -z-10 inline-block blur-[5px] rounded-full"></div>
    </div>
  );
}
