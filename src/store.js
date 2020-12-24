import { configureStore } from "@reduxjs/toolkit";

import contactReducer from "./reducers/contactSlice";
import paymentReducer from "./reducers/paymentSlice";
import shippingReducer from "./reducers/shippingSlice";

export default configureStore({
  reducer: {
    contactInfo: contactReducer,
    paymentInfo: paymentReducer,
    shippingInfo: shippingReducer,
  },
});
