import { createSlice } from "@reduxjs/toolkit";

import { contactInfo } from "../actions/contactInfo";

const contactSlice = createSlice({
  name: "contactInfo",
  initialState: {
    email: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
  },
  reducers: {},
});

export default contactSlice.reducer;
