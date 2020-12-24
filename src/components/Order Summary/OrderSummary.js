import React, { useState } from "react";

import { cubbitProduct, getPrice } from "./Cubbit";

const OrderSummary = () => {
  const [qty, setQty] = useState(1);
  return (
    <>
      <h1>Order Summary</h1>
      {[...Array(cubbitProduct)].map((item) => (
        <>
          <h2 key={item.id}>{item.name}</h2>
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
            <li>Discount {item.discount}</li>
            <li>
              {item.price -
                Number(getPrice(item.price, item.discount)).toFixed(0)}
            </li>
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
            <li>{Number(getPrice(item.price, item.discount)).toFixed(0)}</li>
          </ul>
        </>
      ))}
    </>
  );
};

export default OrderSummary;
