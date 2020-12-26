import styled from "styled-components";

import { blue } from "../../../utils";
const CartContainerStyles = styled.div`
  width: 90%;
  background-color: white;
  grid-column: 2/3;
  border-radius: 4px;
  margin: 0 auto;
`;

const CartInnerContainerStyles = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0 auto;

  img {
    width: 40%;
    margin-bottom: 2rem;
  }

  .lists {
    width: 100%;
    border: 1px dotted #ccc;
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
    border: 1px solid #ccc;
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
`;

const ListStyles = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 50px;
  padding-inline-start: 0;
  gap: 20px;

  .firstList {
    border-bottom: 1px solid #ccc;
  }
`;

export {
  OrderButtonStyles,
  CartContainerStyles,
  CartInnerContainerStyles,
  ListStyles,
};
