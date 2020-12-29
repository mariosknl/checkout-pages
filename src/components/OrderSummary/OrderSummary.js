import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addProduct, removeProduct } from "../../reducers/cartSlice";
import { getPrice } from "./getPrice";

import { cubbitProduct } from "./Cubbit";

import {
  OrderButtonStyles,
  CartContainerStyles,
  CartInnerContainerStyles,
  ListStyles,
} from "../styles/OrderStyles/OrderSummaryStyles";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cartInfo.products);

  const totalPrice =
    products.length >= 1
      ? products.reduce((acc, item) => acc + item.price, 0)
      : 0;
  const totalDiscount =
    products.length >= 1
      ? products.reduce((acc, item) => acc + item.discount, 0)
      : 0;
  const totalProducts =
    products.length >= 0 ? products.reduce((acc, item) => acc + item.id, 0) : 0;

  const displayedProducts = [...products];
  const handleDecrement = (item) =>
    products.length >= 1 ? dispatch(removeProduct(item)) : 0;
  const handleIncrement = (item) => dispatch(addProduct(item));

  console.log(cubbitProduct);
  console.log(products.length);

  return (
    <div>
      <h2 style={{ marginLeft: "2rem" }}>Order Summary</h2>
      <CartContainerStyles>
        {products.length === 0 ? (
          <CartInnerContainerStyles key={cubbitProduct.id}>
            <OrderButtonStyles>
              <h2>{cubbitProduct.name}</h2>
              <div className="buttons">
                <button
                  onClick={() => handleDecrement(cubbitProduct)}
                  type="button"
                >
                  -
                </button>
                <p>{totalProducts}</p>
                <button
                  onClick={() => handleIncrement(cubbitProduct)}
                  type="button"
                >
                  +
                </button>
              </div>
            </OrderButtonStyles>
            <img src={cubbitProduct.img} alt={cubbitProduct.name} />
          </CartInnerContainerStyles>
        ) : (
          displayedProducts.map((item) => {
            if (displayedProducts.includes(item.id)) {
              return "";
            } else {
              displayedProducts.push(item.id);

              return (
                <CartInnerContainerStyles key={item.id}>
                  <OrderButtonStyles>
                    <h2>{item.name}</h2>
                    <div className="buttons">
                      <button
                        onClick={() => handleDecrement(item)}
                        type="button"
                      >
                        -
                      </button>
                      <p>{totalProducts}</p>
                      <button
                        onClick={() => handleIncrement(item)}
                        type="button"
                      >
                        +
                      </button>
                    </div>
                  </OrderButtonStyles>
                  <img src={item.img} alt={item.name} />
                  <ListStyles>
                    <li>{item.description}</li>
                    <li style={{ justifySelf: "end" }}>&#8364;{totalPrice}</li>
                    <li>Shipping</li>
                    <li style={{ justifySelf: "end" }}>&#8364;0</li>
                    <li>Discount {item.discount}%</li>
                    <li style={{ justifySelf: "end" }}>
                      -&#8364;
                      {item.price -
                        Number(getPrice(item.price, totalDiscount)).toFixed(0)}
                    </li>
                  </ListStyles>
                  <hr className="lists" />
                  <ListStyles>
                    <li>Total</li>
                    <li style={{ justifySelf: "end" }}>
                      &#8364;
                      {totalPrice -
                        item.price +
                        Number(getPrice(item.price, totalDiscount).toFixed(0))}
                    </li>
                  </ListStyles>
                </CartInnerContainerStyles>
              );
            }
          })
        )}
      </CartContainerStyles>
    </div>
  );
};

export default OrderSummary;
