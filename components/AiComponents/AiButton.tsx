// Enhanced Button Component
import { cn } from "@/utils/cn";
import { forwardRef, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  glowing?: boolean;
}

const AiButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      glowing = true,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative font-semibold transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-teal-300/50 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group";

    const variants = {
      primary: `
        bg-gradient-to-r from-teal-500 to-teal-600 
        hover:from-teal-600 hover:to-teal-700 
        text-white 
        shadow-lg hover:shadow-xl 
        hover:scale-105
        ${
          glowing
            ? "before:absolute before:-inset-1 before:bg-gradient-to-r before:from-teal-400 before:to-teal-600 before:rounded-full before:blur before:opacity-30 hover:before:opacity-60 before:transition-opacity before:duration-300 before:animate-pulse"
            : ""
        }
      `,
      secondary: `
        bg-gradient-to-r from-gray-100 to-gray-200 
        hover:from-gray-200 hover:to-gray-300 
        text-gray-800 
        shadow-md hover:shadow-lg 
        hover:scale-105
      `,
      outline: `
        border-2 border-teal-500 
        bg-transparent 
        hover:bg-teal-500 
        text-teal-500 hover:text-white 
        shadow-md hover:shadow-lg 
        hover:scale-105
      `,
    };

    const sizes = {
      sm: "px-4 py-2 text-sm rounded-lg",
      md: "px-6 py-3 text-base rounded-xl",
      lg: "px-8 py-4 text-lg rounded-2xl",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {/* Glow effect background */}
        {glowing && variant === "primary" && (
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 animate-pulse -z-10"></div>
        )}

        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 group-hover:translate-x-full"></div>

        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {isLoading && (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          )}
          {children}
        </span>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      </button>
    );
  }
);

AiButton.displayName = "Button";

export default AiButton;
