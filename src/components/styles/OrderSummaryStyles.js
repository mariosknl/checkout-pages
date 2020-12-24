import styled from "styled-components";

import { blue } from "../../utils/colors";
const CartContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CartInnerContainerStyles = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 40%;
    margin-bottom: 2rem;
  }

  .lists {
    width: 100%;
    border: 1px solid #ccc;
  }
`;

const ButtonStyles = styled.div`
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

    p {
      background-color: #ccc;
      cursor: none;
      font-size: 16px;
      padding: 9px;
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
  list-style-type: none;
  padding-inline-start: 0;
  gap: 20px;

  .firstList {
    border-bottom: 1px solid #ccc;
  }
`;

export {
  ButtonStyles,
  CartContainerStyles,
  CartInnerContainerStyles,
  ListStyles,
};
