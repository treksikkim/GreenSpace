"use client";

import { setGalleryDialog } from "@/redux/slice/galleryDialogSlice";
import { GalleryItem } from "@/types";
import { useDispatch } from "react-redux";

interface IProps extends React.ComponentProps<"div"> {
  galleryItem: GalleryItem;
  isOpen: boolean;
}

export default function OpenGallery({ galleryItem, isOpen, children }: IProps) {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(
          setGalleryDialog({
            galleryItem,
            isOpen,
          })
        );
      }}
    >
      {children}
    </div>
  );
}
