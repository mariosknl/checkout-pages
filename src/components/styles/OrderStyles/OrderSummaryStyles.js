import styled from "styled-components";

import { black, blue } from "../../../utils";

const CartContainerStyles = styled.div`
  width: 90%;
  background-color: white;
  grid-column: 2/3;
  border-radius: 4px;
  margin: 0 auto;
  grid-area: order;

  @media screen and (min-width: 375px) and (max-width: 750px) {
    width: 100%;
  }
`;

const CartInnerContainerStyles = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 1rem;
  padding: 10px;
  border-radius: 4px;

  img {
    width: 40%;
    margin-bottom: 2rem;
  }

  .lists {
    width: 100%;
    border: 1px dotted ${black[300]};
  }

  @media screen and (min-width: 375px) and (max-width: 750px) {
    width: 100%;
    margin: 0;

    img {
      width: 30%;
      margin-bottom: 0;
    }

    lists {
      width: 70%;
    }
  }
`;

const OrderButtonStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: ${blue[400]};
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${black[300]};
    border-radius: 4px;

    p {
      background-color: white;
      cursor: none;
      font-size: 16px;
      padding: 9px;
      margin-block: 0;
    }

    button {
      cursor: pointer;
      border: none;
      font-size: 14px;
      padding: 10px;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 750px) {
    padding-inline-end: 10px;
  }
`;

const ListStyles = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 60px;
  padding-inline-start: 10px;
  gap: 20px;

  @media screen and (min-width: 375px) {
    padding-inline-start: 10px;
    gap: 10px;
  }
`;

export {
  OrderButtonStyles,
  CartContainerStyles,
  CartInnerContainerStyles,
  ListStyles,
};
