"use client";

import { useReadmore } from "./ReadMore";

interface IProps {
  children: React.ReactNode;
  type: "OPEN" | "CLOSE";
  className?: string;
}

export default function ReadMoreToggle({ children, type, className }: IProps) {
  const { isOpen, setIsOpen } = useReadmore();
  if (!isOpen && type === "CLOSE") return null;
  if (isOpen && type === "OPEN") return null;
  return (
    <div className={className} onClick={() => setIsOpen(type === "OPEN")}>
      {children}
    </div>
  );
}
