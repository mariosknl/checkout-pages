import { createSlice } from "@reduxjs/toolkit";

import { cubbitProduct } from "../components/OrderSummary/Cubbit";

const cartSlice = createSlice({
  name: "cartInfo",
  initialState: {
    products: [cubbitProduct],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products.pop();
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
