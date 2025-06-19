import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const mobileMenuSlice = createSlice({
  initialState: false,
  name: "Mobile Menu",
  reducers: {
    setMobileMenu: (state, action: PayloadAction<boolean>) => action.payload,
  },
});

export const mobileMenuReducer = mobileMenuSlice.reducer;
export const { setMobileMenu } = mobileMenuSlice.actions;
