import React from "react";

import group1 from "../../assets/group1.png";
import forbes from "../../assets/forbes.png";
import funded from "../../assets/funded.png";

const OrderBox2 = () => {
  return (
    <div>
      <h3>More than $1 Million raised by 3000+ backers on:</h3>
      <img src={group1} alt="Kickstarter and Indiegogo logos" />
      <h3>As seen on</h3>
      <img src={forbes} alt="Forbes" />
      <h3>Funded by</h3>
      <img src={funded} alt="Funded by Barclays TIM EU Techstarts" />
    </div>
  );
};

export default OrderBox2;
