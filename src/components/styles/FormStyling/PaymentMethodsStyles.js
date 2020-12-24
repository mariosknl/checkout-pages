import styled from "styled-components";

import * as theme from "../../../utils";

const PaymentMethodsStyles = styled.div`
  border: 1px solid black;
  width: 90%;

  input {
    width: 100%;
  }

  label {
    font-size: 14px;
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
    margin-left: 3rem;
  }
`;

const CardStyles = styled.div`
  width: 90px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 2rem;
`;

export { BannerStyles, CardStyles, PaymentMethodsStyles };
