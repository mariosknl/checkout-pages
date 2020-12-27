import styled from "styled-components";

const Steps = styled.span`
  width: 36px;
  height: 36px;
  left: 423px;
  top: 100px;

  background: #009eff;
  border: 2px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 2px;
`;

const HeaderContainer = styled.header`
  width: 100%;
  grid-area: header;
  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

export { Steps, HeaderContainer };
