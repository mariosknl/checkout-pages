import styled from "styled-components";

import * as theme from "../../../utils";

const PaymentMethodsStyles = styled.div`
  border: 1px solid black;
`;

const BannerStyles = styled.div`
  width: 100%;
  background-color: ${theme.black[600]};
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${theme.typeScale.paragraph};
  }
`;

export { BannerStyles, PaymentMethodsStyles };
