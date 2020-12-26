import styled from "styled-components";

import { black } from "../../utils/colors";

const MainContainerStyles = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 60% 1fr;
  position: relative;
  overflow-x: hidden;
`;

const OrderContainerStyles = styled.div`
  width: 100%;
  justify-self: end;
  background-color: ${black[100]};
`;

export { MainContainerStyles, OrderContainerStyles };
