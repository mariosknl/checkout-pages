import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contactInfo",
  initialState: {
    customerShippingInfo: {
      email: "",
      phoneNumber: "",
      firstName: "",
      lastName: "",
    },
  },
  reducers: {
    getContactInfo: (state, action) => {
      state.customerShippingInfo = action.payload;
    },
  },
});

export const { getContactInfo } = contactSlice.actions;

export default contactSlice.reducer;
