import { cn } from "@/utils/cn";
import React from "react";

export default function Button(props: React.ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={cn(
        "font-jost cursor-pointer active:scale-95 bg-primary text-white px-3.5 py-2 rounded-tr-xl rounded-bl-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]",
        props.className
      )}
    >
      {props.children}
    </button>
  );
}
