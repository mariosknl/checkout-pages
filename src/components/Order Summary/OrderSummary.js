import React, { useState } from "react";

import { cubbitProduct, getPrice } from "./Cubbit";

const OrderSummary = () => {
  const [qty, setQty] = useState(1);
  return (
    <>
      <h1>Order Summary</h1>
      {[...Array(cubbitProduct)].map((item) => (
        <>
          <h2 key={item.name}>{item.name}</h2>
          <option value={item.qty}>{item.qty}</option>
          <img src={item.img} alt={item.name} />
          <ul
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              listStyleType: "none",
              borderBottom: "1px solid #000",
            }}
          >
            <li>{item.description}</li>
            <li>&#8364;{item.price}</li>
            <li>Shipping</li>
            <li>&#8364;0</li>
            <li>Discount 44%</li>
            <li>100</li>
          </ul>
          <hr />
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              listStyleType: "none",
            }}
          >
            <li>Total</li>
            <li>{item.price}</li>
          </ul>
        </>
      ))}
    </>
  );
};

export default OrderSummary;

{
  /* <p>Cubbit Cell 1TB up to 4TB</p>
        <p>&#8364;589</p>
        <p>Shipping</p>
        <p>&#8364;</p>
        <p>Discount 44%</p>
        <p>-&#8364;260</p>
        <hr />
        <p>Total</p>
        <p>&#8364;329</p> */
}
