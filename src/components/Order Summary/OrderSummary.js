import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addProduct, removeProduct } from "../../reducers/cartSlice";
import { getPrice } from "./getPrice";

import {
  ButtonStyles,
  CartContainerStyles,
  CartInnerContainerStyles,
  ListStyles,
} from "../styles/OrderSummaryStyles";

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
    <div>
      <h2>Order Summary</h2>
      <CartContainerStyles>
        {displayedProducts.map((item) => {
          if (displayedProducts.includes(item.id)) {
            return "";
          } else {
            displayedProducts.push(item.id);

            return (
              <CartInnerContainerStyles key={item.id}>
                <ButtonStyles>
                  <h2>{item.name}</h2>
                  <div className="buttons">
                    <button onClick={() => handleDecrement(item)} type="button">
                      -
                    </button>
                    <p>{totalProducts}</p>
                    <button onClick={() => handleIncrement(item)} type="button">
                      +
                    </button>
                  </div>
                </ButtonStyles>
                <img src={item.img} alt={item.name} />
                <ListStyles>
                  <li>{item.description}</li>
                  <li>&#8364;{totalPrice}</li>
                  <li>Shipping</li>
                  <li>&#8364;0</li>
                  <li>Discount {item.discount}%</li>
                  <li>
                    {item.price -
                      Number(getPrice(item.price, totalDiscount)).toFixed(0)}
                  </li>
                </ListStyles>
                <hr className="lists" />
                <ListStyles>
                  <li>Total</li>
                  <li>
                    {totalPrice -
                      item.price +
                      Number(getPrice(item.price, totalDiscount).toFixed(0))}
                  </li>
                </ListStyles>
              </CartInnerContainerStyles>
            );
          }
        })}
      </CartContainerStyles>
    </div>
  );
};

export default OrderSummary;
