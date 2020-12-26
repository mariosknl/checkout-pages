import React from "react";

import { Checkbox } from "../common";
import { PrimaryButton, SecondaryButton } from "../../ui/Buttons";
import { ButtonStyles, FooterStyles } from "../../styles";

const Terms = ({ terms }) => {
  return (
    <FooterStyles>
      <Checkbox name={terms} type="checkbox">
        I agree to the <span>Terms and Conditions</span> and the
        <span>Privacy Policy</span>
      </Checkbox>
      <ButtonStyles>
        <SecondaryButton modifiers="small">Back</SecondaryButton>
        <PrimaryButton modifiers="large" type="submit">
          Buy Now
        </PrimaryButton>
      </ButtonStyles>
      <p>
        By clicking the button 'Buy Now', I agree to the
        <span> Terms and Conditions</span> and the <span>Privacy Policy</span>
      </p>
    </FooterStyles>
  );
};

export default Terms;
