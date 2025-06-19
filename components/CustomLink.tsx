"use client";

import { cn } from "@/utils/cn";
import { Loader2 } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

interface IProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  spinnerSize?: number;
  queryParams?: boolean;
}

export default function CustomLink({
  href,
  children,
  spinnerSize,
  className,
  queryParams = false,
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
    <Link
      href={href}
      {...rest}
      className={cn(className, "flex relative items-center gap-2")}
      onClick={handleLinkClick}
    >
      {isPending ? (
        <Loader2 className="animate-spin absolute" size={spinnerSize ?? 15} />
      ) : null}
      {children}
    </Link>
  );
}
