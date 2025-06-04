"use client";

import { setGetQuoteDialog } from "@/redux/slice/getQuoteDialogSlice";
import { IGetQuoteDialog } from "@/types";
import { useDispatch } from "react-redux";

interface IProps extends IGetQuoteDialog {
  children: React.ReactNode;
  className?: string;
}

export default function OpenGetQuoteDialog({
  isOpen,
  extraValue,
  children,
  className,
}: IProps) {
  const dispatch = useDispatch();
  return (
    <div
      className={className}
      onClick={() => {
        dispatch(setGetQuoteDialog({ isOpen, extraValue }));
      }}
    >
      {children}
    </div>
  );
}
