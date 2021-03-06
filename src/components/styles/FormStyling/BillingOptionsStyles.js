import styled from "styled-components";

import * as theme from "../../../utils";

const BillingOptionsStyles = styled.div`
  border: 1px solid ${theme.black[300]};
  width: 90%;
  height: 20vh;
  margin: 0;
  border-radius: 4px;
  margin-bottom: 4rem;

  p {
    width: 90%;
    margin: 1rem auto;
    font-size: ${theme.typeScale.paragraph};
  }

  input {
    margin: 0.8rem 3rem;
  }
  @media screen and (min-width: 1300px) {
    width: 100%;
  }

  @media screen and (min-width: 1081px) and (max-width: 1300px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) and (max-width: 750px) {
    width: 100%;
    height: 30vh;
  }
`;

const BillingInformationStyles = styled.div`
  display: flex;
  flex-direction: column;
`;

export { BillingInformationStyles, BillingOptionsStyles };
