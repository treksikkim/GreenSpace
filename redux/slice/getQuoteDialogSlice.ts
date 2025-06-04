import { IGetQuoteDialog } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IGetQuoteDialog = {
  isOpen: false,
};

const getQuoteDialogSlice = createSlice({
  name: "Get Quote Dialog Slice",
  initialState,
  reducers: {
    setGetQuoteDialog: (state, action: PayloadAction<IGetQuoteDialog>) =>
      action.payload,
  },
});

export const getQuoteDialogReducer = getQuoteDialogSlice.reducer;
export const { setGetQuoteDialog } = getQuoteDialogSlice.actions;
