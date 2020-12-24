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
  extraReducers: {
    [contactInfo.pending]: (state, action) => {
      state.status = "loading";
    },
    [contactInfo.fulfilled]: (state, action) => ({
      ...state,
      status: "fulfilled",
      contactInfo: action.payload,
    }),
    [contactInfo.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default contactSlice.reducer;
