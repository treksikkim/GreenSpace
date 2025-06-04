import { GalleryItem } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  galleryItem: GalleryItem | null;
  isOpen: boolean;
}

const initialState: IInitialState = {
  galleryItem: null,
  isOpen: false,
};

const galleryDialogSlice = createSlice({
  name: "Gallery Dialog Slice",
  initialState,
  reducers: {
    setGalleryDialog: (state, action: PayloadAction<IInitialState>) =>
      action.payload,
  },
});

export const galleryDialogReducer = galleryDialogSlice.reducer;
export const { setGalleryDialog } = galleryDialogSlice.actions;
