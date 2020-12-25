import React from "react";

import { MainContainerStyles } from "../styles/index";
import MainForm from "../Forms/Forms/MainForm";
import Order from "../OrderSummary/Order";

const OrderPage = () => {
  return (
    <MainContainerStyles>
      <div></div>
      <MainForm />
      <Order />
    </MainContainerStyles>
  );
};

export default OrderPage;
