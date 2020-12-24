import React from "react";

import { OrderBox1Styles } from "../styles/OrderStyles/OrderBox1Styles";

const OrderBox1 = () => {
  return (
    <OrderBox1Styles>
      <ul>
        <li>
          <i class="far fa-check"></i>You will receive your Cell within 1 month
          in EU and US, and within 2 - 3 months in all other countries
        </li>
        <li>
          <i class="far fa-check"></i>Guaranteed delivery or money back
        </li>
        <li>
          <i class="far fa-check"></i>2 year warranty
        </li>
      </ul>
    </OrderBox1Styles>
  );
};

export default OrderBox1;
