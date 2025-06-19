import { configureStore } from "@reduxjs/toolkit";
import { galleryDialogReducer } from "./slice/galleryDialogSlice";
import { getQuoteDialogReducer } from "./slice/getQuoteDialogSlice";
import { mobileMenuReducer } from "./slice/mobileMenuSlice";


export const store = configureStore({
  reducer: {
    galleryDialogReducer: galleryDialogReducer,
    getQuoteDialogReducer: getQuoteDialogReducer,
    mobileMenuReducer : mobileMenuReducer
  },

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
