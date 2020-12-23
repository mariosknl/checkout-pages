import React from "react";
import { Steps, HeaderContainer } from "../styles/HeaderStyles";

import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <img src={logo} alt="logo_image" />
        <Steps>1</Steps>
      </HeaderContainer>
    </>
  );
};

export default Header;
