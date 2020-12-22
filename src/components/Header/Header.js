import React from "react";
import { Steps, HeaderContainer } from "./headerStyles";

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
