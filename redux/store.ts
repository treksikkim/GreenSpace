import { configureStore } from "@reduxjs/toolkit";
import { galleryDialogReducer } from "./slice/galleryDialogSlice";
import { getQuoteDialogReducer } from "./slice/getQuoteDialogSlice";

export const store = configureStore({
  reducer: {
    galleryDialogReducer: galleryDialogReducer,
    getQuoteDialogReducer: getQuoteDialogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
