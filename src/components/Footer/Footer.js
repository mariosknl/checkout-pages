import React from "react";

import { ButtonStyles, FooterStyles } from "./FooterStyles";
import { Input } from "../ui/Input";
import { PrimaryButton, SecondaryButton } from "../ui/Buttons";

const Footer = () => {
  return (
    <FooterStyles>
      <Input
        id="terms"
        type="checkbox"
        name="terms"
        value="terms"
        label="I agree to the Terms and Conditions and the Privacy Policy"
      />
      <ButtonStyles>
        <SecondaryButton modifiers="small">Back</SecondaryButton>
        <PrimaryButton modifiers="large">Buy Now</PrimaryButton>
      </ButtonStyles>
      <p>
        By clicking the button 'Buy Now', I agree to the{" "}
        <span>Terms and Conditions</span> and the <span>Privacy Policy</span>
      </p>
    </FooterStyles>
  );
};

export default Footer;
