import React from "react";
import styled from "styled-components";

import logo from "../assets/logo.svg";

const Steps = styled.span`
  position: absolute;
  width: 36px;
  height: 36px;
  left: 423px;
  top: 100px;

  background: #009eff;
  border: 2px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 2px;
`;

const Header = () => {
  return (
    <div>
      <img src={logo} alt="logo_image" />
      <h1>Cubbit</h1>
      <Steps>1</Steps>
    </div>
  );
};

export default Header;
