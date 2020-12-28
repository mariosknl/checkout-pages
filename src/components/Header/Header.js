import React from "react";
import { HeaderContainer, StepsContainer } from "../styles/HeaderStyles";

import light from "../../assets/light.png";
import filled from "../../assets/filled.svg";
import empty from "../../assets/empty.svg";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <img src={light} alt="logo_image" />
        <StepsContainer>
          <div>
            <img src={filled} alt="filled_step" />
          </div>
          <div>
            <img src={empty} alt="empty_step" />
          </div>
        </StepsContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
