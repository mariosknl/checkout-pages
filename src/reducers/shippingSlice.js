import { createSlice } from "@reduxjs/toolkit";

const shippingSlice = createSlice({
  name: "contactInfo",
  initialState: {
    customerAddress: {
      streetAddress: "",
      otherInfo: "",
      postalCode: "",
      country: "",
      city: "",
      state: "",
    },
  },
  reducers: {
    getShippingInfo: (state, action) => {
      state.customerAddress = action.payload;
    },
  },
});

export const { getShippingInfo } = shippingSlice.actions;

export default shippingSlice.reducer;
