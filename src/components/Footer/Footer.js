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
        <SecondaryButton />
        <PrimaryButton />
      </ButtonStyles>
    </FooterStyles>
  );
};

export default Footer;
