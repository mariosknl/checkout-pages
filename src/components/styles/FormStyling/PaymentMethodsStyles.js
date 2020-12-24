import styled from "styled-components";

import * as theme from "../../../utils";

const PaymentMethodsStyles = styled.div`
  width: 70%;
  margin: 1rem 3.5rem;

  input {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid ${theme.black[300]};
    border-radius: 4px;
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
    margin-left: 2rem;
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
