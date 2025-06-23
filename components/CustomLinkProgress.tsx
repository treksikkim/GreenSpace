"use client";

import React from "react";
import { useCustomLink } from "./CustomLink";
import { Loader2 } from "lucide-react";

interface IProps {
  spinnerSize?: number;
  className?: string;
  children: React.ReactNode;
  withChildren?: boolean;
}

export default function CustomLinkProgress({
  className,
  spinnerSize = 15,
  children,
  // withChildren = false,
}: IProps) {
  const { isLoading } = useCustomLink();
  return (
    <div className={className}>
      {isLoading ? (
        <Loader2 className="animate-spin" size={spinnerSize} />
      ) : null}
      {children}
    </div>
  );
}
