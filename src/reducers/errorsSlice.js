import { createSlice } from "@reduxjs/toolkit";

const errorsSlice = createSlice({
  name: "errors",
  initialState: {
    errors: [],
  },
  reducers: {
    addError: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const { addError } = errorsSlice.actions;
export default errorsSlice.reducer;
