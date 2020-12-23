import styled from "styled-components";

import * as theme from "../../../utils";

const PaymentMethodsStyles = styled.div`
  border: 1px solid black;
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
    margin-left: 3rem;
  }
`;

const CardStyles = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 2rem;
`;

export { BannerStyles, CardStyles, PaymentMethodsStyles };
