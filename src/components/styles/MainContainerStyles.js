import styled from "styled-components";

import { black } from "../../utils/colors";

const MainContainerStyles = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas: "header forms order";
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  position: relative;
  overflow-x: hidden;
  gap: 20px;

  @media screen and (min-width: 1081px) {
    width: 100%;
  }

  @media screen and (max-width: 1080px) {
    width: 100%;
    margin: 0 auto;
    grid-template-areas: "header forms order";
    grid-template-columns: 1fr;
    left: 0;
  }
  @media screen and (min-width: 375px) and (max-width: 750px) {
    width: 86%;
    margin: 0 auto;
    grid-template-areas: "header" "order" "forms";
    grid-template-columns: 1fr;
    left: 0;
  }
`;

const OrderContainerStyles = styled.div`
  width: 100%;
  justify-self: end;
  background-color: ${black[100]};
  grid-area: order;

  @media screen and (max-width: 1080px) {
    width: 100%;
    margin: 0 auto;
    background-color: white;
  }
  @media screen and (min-width: 375px) and (max-width: 750px) {
    width: 100%;
    background-color: white;
    margin: 0;
  }
`;

export { MainContainerStyles, OrderContainerStyles };
