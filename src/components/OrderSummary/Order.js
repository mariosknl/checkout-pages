import React from "react";

import OrderSummary from "./OrderSummary";
import OrderBox1 from "./OrderBox1";
import OrderBox2 from "./OrderBox2";

import { OrderContainerStyles } from "../styles";

const Order = () => {
  return (
    <OrderContainerStyles>
      <OrderSummary />
      <OrderBox1 />
      <OrderBox2 />
    </OrderContainerStyles>
  );
};

export default Order;
