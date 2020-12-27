import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "paymentInfo",
  initialState: {
    paymentDetails: {
      cardHolder: "",
      cardNumber: "",
      expirationDate: "",
      cvv: "",
    },
  },
  reducers: {
    getPaymentDetails: (state, action) => {
      state.paymentDetails = action.payload;
    },
  },
});

export const { getPaymentDetails } = paymentSlice.actions;

export default paymentSlice.reducer;
