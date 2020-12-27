import styled from "styled-components";

import { black } from "../../utils/colors";

const MainContainerStyles = styled.div`
  width: 90%;
  height: 100vh;
  display: grid;
  grid-template-areas: "forms order";
  grid-template-columns: repeat(auto-fill, minmax(540px, 1fr));
  position: relative;
  overflow-x: hidden;
  left: 10%;

  @media screen and (max-width: 1080px) {
    width: 100%;
    margin: 0 auto;
    grid-template-areas:
      "header"
      "order"
      "forms";
    grid-template-columns: 1fr;
    left: 0;
  }
  @media screen and (min-width: 375px) {
    width: 86%;
    margin: 0 auto;
    grid-template-areas:
      "order"
      "forms";
    grid-template-columns: 1fr;
    left: 0;
  }
`;

const OrderContainerStyles = styled.div`
  width: 100%;
  justify-self: end;
  background-color: ${black[100]};
  @media screen and (max-width: 1080px) {
    width: 100%;
    margin: 0 auto;
    background-color: white;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
    background-color: white;
    margin: 0;
  }
`;

export { MainContainerStyles, OrderContainerStyles };
