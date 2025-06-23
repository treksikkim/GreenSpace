"use client";

import { cn } from "@/utils/cn";
import { Loader2 } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { createContext, useContext, useTransition } from "react";

interface IProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  spinnerSize?: number;
  queryParams?: boolean;
  withoutProgress?: boolean;
}

const CustomLinkContext = createContext<{ isLoading: boolean }>({
  isLoading: false,
});

export default function CustomLink({
  href,
  children,
  spinnerSize,
  className,
  queryParams = false,
  withoutProgress = false,
  ...rest
}: IProps) {
  const route = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleLinkClick = () => {
    startTransition(() => {
      if (!queryParams) {
        route.push(href.toString());
      } else {
        history.pushState(null, "", href.toString());
      }
    });
  };

  return (
    <CustomLinkContext.Provider value={{ isLoading: isPending }}>
      <Link
        href={href}
        {...rest}
        className={cn(className, "flex relative items-center gap-2")}
        onClick={handleLinkClick}
      >
        {isPending && withoutProgress === false ? (
          <Loader2 className="animate-spin" size={spinnerSize ?? 15} />
        ) : null}
        {children}
      </Link>
    </CustomLinkContext.Provider>
  );
}

export const useCustomLink = () => {
  const context = useContext(CustomLinkContext);

  if (!context) {
    throw new Error("useCustomLink must be used within a CustomLink component");
  }

  return context;
};
