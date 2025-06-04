import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"; // optional for Tailwind projects

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
