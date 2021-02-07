import styled from "styled-components";

import * as theme from "../../../utils";

const PaymentMethodsStyles = styled.div`
  width: 90%;
  margin: 1rem 3rem;

  input {
    width: 90%;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 0;
    padding: 10px;
    border: 1px solid ${theme.black[300]};
    border-radius: 4px;
  }

  @media screen and (min-width: 375px) and (max-width: 750px) {
    width: 90%;
    margin: 0 auto;

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

  @media screen and (min-width: 1081px) {
  }

  @media screen and (max-width: 1080px) {
  }
  @media screen and (min-width: 375px) and (max-width: 750px) {
  }
`;

const BannerStyles = styled.div`
  width: 100%;
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

  @media screen and (min-width: 375px) and (max-width: 750px) {
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
