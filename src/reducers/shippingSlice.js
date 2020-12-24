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
  extraReducers: {
    [shippingInfo.pending]: (state, action) => {
      state.status = "loading";
    },
    [shippingInfo.fulfilled]: (state, action) => ({
      ...state,
      status: "fulfilled",
      shippingInfo: action.payload,
    }),
    [shippingInfo.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default shippingSlice.reducer;
