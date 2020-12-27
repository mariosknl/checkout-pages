import { configureStore } from "@reduxjs/toolkit";

import contactReducer from "./reducers/contactSlice";
import paymentReducer from "./reducers/paymentSlice";
import shippingReducer from "./reducers/shippingSlice";
import cartReducer from "./reducers/cartSlice";
import errorsReducer from "./reducers/errorsSlice";

export default configureStore({
  reducer: {
    contactInfo: contactReducer,
    paymentInfo: paymentReducer,
    shippingInfo: shippingReducer,
    cartInfo: cartReducer,
    errors: errorsReducer,
  },
});
