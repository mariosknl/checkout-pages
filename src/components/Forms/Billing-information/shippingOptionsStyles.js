import styled from "styled-components";

import * as theme from "../../../utils";

const ShippingOptionsStyles = styled.div`
  border: 1px solid ${theme.black[300]};
  width: 100%;

  p {
    width: 90%;
    margin: 1rem auto;
    font-size: ${theme.typeScale.paragraph};
  }

  form {
    width: 90%;
    display: flex;
    align-items: center;
  }

  input {
    margin: 0.8rem 3rem;
  }
`;

const BillingInformationStyles = styled.div`
  display: flex;
  flex-direction: column;
`;

export { BillingInformationStyles, ShippingOptionsStyles };
