import React, { useEffect, useRef } from "react";

import { MainContainerStyles } from "../styles/index";
import MainForm from "../Forms/Forms/MainForm";
import Order from "../OrderSummary/Order";
import Header from "../Header/Header";
import PerfectScrollbar from "perfect-scrollbar";

const OrderPage = () => {
  const container = useRef();
  useEffect(() => {
    let ps = new PerfectScrollbar(container.current);
    return () => {
      ps.destroy();
      ps = null;
    };
  }, []);
  return (
    <div ref={container}>
      <MainContainerStyles>
        <Header step="1" />
        <MainForm />
        <Order />
      </MainContainerStyles>
    </div>
  );
};

export default OrderPage;
