import React from "react";

import Header from "../Header/Header";
import { BoxStyles, CopyrightStyles, ThankYouStyles } from "../styles";

import thanks from "../../assets/thanks.png";

const ThankYou = () => {
  return (
    <>
      <Header step="2" />
      <ThankYouStyles>
        <BoxStyles>
          <img src={thanks} alt="illustration_image" />
          <h2>Welcome to the Swarn, &lt;name&gt;!</h2>

          <p>
            We're processing your order and will send you an email confirmation
            shortly.
          </p>

          <span>
            Please note VAT and other duties may be applied by customs according
            to your country's legislation.
          </span>
        </BoxStyles>

        <CopyrightStyles>
          <p>Coryright &copy 2019 Cubbit Srl. All rights reserved.</p>
          <p>REA: BO-518970, cubbit@pec.it</p>
          <p>
            VAT 02562001200 | Via della Zecca 1 - 40121 - Bologna (BO) - Italy
          </p>
        </CopyrightStyles>
      </ThankYouStyles>
    </>
  );
};

export default ThankYou;
