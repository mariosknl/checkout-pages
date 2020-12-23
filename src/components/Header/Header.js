import React from "react";
import { Steps, HeaderContainer } from "../styles/HeaderStyles";

import light from "../../assets/light.png";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <img src={light} alt="logo_image" />
        <Steps>1</Steps>
      </HeaderContainer>
    </>
  );
};

export default Header;
