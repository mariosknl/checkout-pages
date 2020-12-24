import { createSlice } from "@reduxjs/toolkit";

import shippingInfo from "../actions/shippingInfo";

const shippingSlice = createSlice({
  name: "contactInfo",
  initialState: {
    streetAddress: "",
    otherInfo: "",
    postalCode: "",
    country: "",
    city: "",
    state: "",
  },
  reducers: {},
});

export default shippingSlice.reducer;
