import styled from "styled-components";

import * as theme from "../../../utils";

const PaymentMethodsStyles = styled.div`
  width: 70%;
  margin: 1rem 3rem;

  input {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 0;
    padding: 10px;
    border: 1px solid ${theme.black[300]};
    border-radius: 4px;
  }

  @media screen and (min-width: 375px) {
    width: 100%;
    margin: 1rem 1.5rem;

    input {
      width: 85%;
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

const PaymentMethodStylesInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  .cvv {
    width: 50%;
  }
`;

const BannerStyles = styled.div`
  width: 90%;
  height: 48px;
  background-color: ${theme.black[600]};
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: ${theme.typeScale.small};
    font-weight: ${theme.fontWeight.bold};
    margin-left: 2rem;
  }

  @media screen and (min-width: 375px) {
    width: 100%;
  }
`;

const CardStyles = styled.div`
  width: 90px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 2rem;
  border-radius: 4px;
`;

export {
  BannerStyles,
  CardStyles,
  PaymentMethodStylesInputs,
  PaymentMethodsStyles,
};
