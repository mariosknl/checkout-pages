import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";

const Button = styled.button`
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  cursor: pointer;
  font-family: ${defaultTheme.primaryFont};
`;

const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.buttonColor};
  box-shadow: 0px 10px 20px rgba(0, 158, 255, 0.1);
  padding: 14px 24px;
  color: white;
  border: none;
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid ${defaultTheme.buttonColor};
  color: ${defaultTheme.buttonColor};
  padding: 14px 24px;
`;

export default PrimaryButton;
