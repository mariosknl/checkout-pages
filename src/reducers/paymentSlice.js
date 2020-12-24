import { createSlice } from "@reduxjs/toolkit";

import paymentInfo from "../actions/paymentInfo";

const paymentSlice = createSlice({
  name: "contactInfo",
  initialState: {
    cardHolder: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  },
  reducers: {},
  extraReducers: {
    [paymentInfo.pending]: (state, action) => {
      state.status = "loading";
    },
    [paymentInfo.fulfilled]: (state, action) => ({
      ...state,
      status: "fulfilled",
      paymentInfo: action.payload,
    }),
    [paymentInfo.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default paymentSlice.reducer;
