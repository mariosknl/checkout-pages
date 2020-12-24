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
});

export default paymentSlice.reducer;
