import styled from "styled-components";

import { black } from "../../utils/colors";

const MainContainerStyles = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  position: relative;
  overflow-x: hidden;
`;

const OrderContainerStyles = styled.div`
  width: 100%;
  background-color: ${black[100]};
`;

export { MainContainerStyles, OrderContainerStyles };
