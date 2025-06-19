import { cn } from "@/utils/cn";
import React from "react";

export default function NewButton({ className, children, ...rest }: React.ComponentProps<"button">) {
  return (
    <button className={cn("animated-button1 text-base", className)} {...rest}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </button>
  );
}
