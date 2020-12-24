import React from "react";

import thanks from "../../assets/thanks.png";

const ThankYou = () => {
  return (
    <div>
      <img src={thanks} alt="illustration_image" />
      <h1>Welcome to the Swarn, Marios!</h1>

      <p>
        We're processing your order and will send you an email confirmation
        shortly.
      </p>

      <p>
        Please note VAT and other duties may be applied by customs according to
        your country's legislation.
      </p>

      <p>Coryright &copy 2019 Cubbit Srl. All rights reserved.</p>
      <p>REA: BO-518970, cubbit@pec.it</p>
      <p>VAT 02562001200 | Via della Zecca 1 - 40121 - Bologna (BO) - Italy</p>
    </div>
  );
};

export default ThankYou;
