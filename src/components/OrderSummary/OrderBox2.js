import React from "react";

import group1 from "../../assets/group1.png";
import forbes from "../../assets/forbes.png";
import funded from "../../assets/funded.png";

import { OrderBox2Styles } from "../styles/OrderStyles/OrderBox2Styles";

const OrderBox2 = () => {
  return (
    <OrderBox2Styles>
      <p>More than $1 Million raised by 3000+ backers on:</p>
      <img
        src={group1}
        className="fbrands"
        alt="Kickstarter and Indiegogo logos"
      />
      <p>As seen on</p>
      <img src={forbes} alt="Forbes" />
      <p>Funded by</p>
      <img
        src={funded}
        className="brands"
        alt="Funded by Barclays TIM EU Techstarts"
      />
    </OrderBox2Styles>
  );
};

export default OrderBox2;
