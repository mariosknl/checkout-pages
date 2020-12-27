import styled from "styled-components";

import { black, typeScale } from "../../../utils";

const OrderBox2Styles = styled.div`
  width: 90%;
  margin: 0 auto;
  border-radius: 4px;
  height: 14%;
  padding: 2rem;

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

  @media screen and (min-width: 375px) {
    padding: 0;
    padding-top: 1rem;

    p {
      width: 100%;
      font-size: 16px;
    }

    img {
      width: 100%;
    }

    .fbrands {
      width: 100%;
      margin: 0;
    }

    .brands {
      width: 100%;
      margin: 0;
    }
  }
`;

export { OrderBox2Styles };
