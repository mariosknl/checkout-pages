import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";

import { defaultTheme, typeScale } from "../utils";

const BUTTON_MODIFIERS = {
  small: () => `
    min-width: 72px;
    min-height: 40px;
    text-align: center;
  `,
  large: () => `
    min-width: 168px;
    min-height: 40px;
  `,
};

const Button = styled.button`
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  cursor: pointer;
  font-family: ${defaultTheme.primaryFont};
  text-align: center;
`;

const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.buttonColor};
  box-shadow: 0px 10px 20px rgba(0, 158, 255, 0.1);
  color: white;
  border: none;

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid ${defaultTheme.buttonColor};
  color: ${defaultTheme.buttonColor};

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export { PrimaryButton, SecondaryButton };
