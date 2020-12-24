import styled from "styled-components";

import { black, typeScale } from "../../../utils";

const OrderBox2Styles = styled.div`
  width: 90%;
  margin: 4rem auto;
  border-radius: 4px;
  height: 14%;
  padding-top: 0.1rem;

  p {
    color: ${black[700]};
    font-weight: ${typeScale.maxBold};
    margin-top: 3rem;
    font-size: 18px;
  }

  .fbrands {
    margin-left: 2.5rem;
  }

  .brands {
    margin-left: 3.8rem;
  }
`;

export { OrderBox2Styles };
