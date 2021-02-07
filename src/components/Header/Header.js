import React from "react";
import { HeaderContainer, StepsContainer } from "../styles/HeaderStyles";

import light from "../../assets/light.png";
import filled from "../../assets/filled.svg";
import filled2 from "../../assets/filled2.svg";
import empty from "../../assets/empty.svg";

const Header = ({ step }) => {
  return (
    <>
      <HeaderContainer>
        <img src={light} alt="logo_image" />
        <StepsContainer>
          <div>
            <img src={filled} alt="first_step" />
          </div>
          <div>
            {step === "1" ? (
              <img src={empty} alt="second_step" />
            ) : (
              <img src={filled2} alt="second_step" />
            )}
          </div>
        </StepsContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
