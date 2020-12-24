import styled from "styled-components";

import { black } from "../../../utils";

const OrderBox1Styles = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: white;
  border-radius: 4px;
  height: 14%;
  padding-top: 0.1rem;

  ul {
    margin-block: 0;
    padding: 0;
  }

  i {
    margin-right: 1rem;
    color: ${black[700]};
  }

  li {
    display: flex;
    justify-content: flex-start;
    width: 90%;
    font-size: 12px;
    margin: 1.8rem auto;
    color: ${black[700]};
  }
`;

export { OrderBox1Styles };
