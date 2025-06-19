"use client";

import { Dispatch, SetStateAction, useEffect } from "react";

interface IProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function DialogWrapper({ children, setIsOpen, isOpen }: IProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style = "overflow : hidden";
    } else {
      document.body.style = "overflow : auto";
    }
  }, [isOpen]);

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  return isOpen ? (
    <div
      onClick={handleCloseDialog}
      className="fixed inset-0 min-h-screen bg-[#0000005e] bg-opacity-60 flex items-center justify-center z-[3000] p-4"
    >
      {children}
    </div>
  ) : null;
}
