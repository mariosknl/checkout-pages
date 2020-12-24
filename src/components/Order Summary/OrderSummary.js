import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addProduct, removeProduct } from "../../reducers/cartSlice";
import { getPrice } from "./getPrice";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cartInfo.products);

  const totalPrice = products.reduce((acc, item) => acc + item.price, 0);
  const totalDiscount = products.reduce((acc, item) => acc + item.discount, 0);
  const totalProducts = products.reduce((acc, item) => acc + item.id, 0);

  const handleIncrement = (item) => dispatch(addProduct(item));
  const handleDecrement = (item) => dispatch(removeProduct(item));
  const displayedProducts = [...products];

  return (
    <>
      <h1>Order Summary</h1>
      {displayedProducts.map((item) => {
        if (displayedProducts.includes(item.id)) {
          return "";
        } else {
          displayedProducts.push(item.id);
          return (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button onClick={() => handleDecrement(item)}>-</button>
                <p style={{ backgroundColor: "#ccc" }}>{totalProducts}</p>
                <button onClick={() => handleIncrement(item)}>+</button>
              </div>
              <img src={item.img} alt={item.name} />
              <ul
                style={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  listStyleType: "none",
                }}
              >
                <li>{item.description}</li>
                <li>&#8364;{totalPrice}</li>
                <li>Shipping</li>
                <li>&#8364;0</li>
                <li>Discount {item.discount}%</li>
                <li>
                  {item.price -
                    Number(getPrice(item.price, totalDiscount)).toFixed(0)}
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
                <li>
                  {totalPrice -
                    item.price +
                    Number(getPrice(item.price, totalDiscount).toFixed(0))}
                </li>
              </ul>
            </div>
          );
        }
      })}
    </>
  );
};

export default OrderSummary;
