import styled from "styled-components";

const primaryBlue = "#009eff";

const Button = styled.button`
  font-size: 1rem;
  border-radius: 2px;
  cursor: pointer;
  font-family: "Nunito", sans-serif;
`;

const PrimaryButton = styled(Button)`
  background-color: ${primaryBlue};
  box-shadow: 0px 10px 20px rgba(0, 158, 255, 0.1);
  padding: 14px 24px;
  color: white;
  border: none;
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid ${primaryBlue};
  color: ${primaryBlue};
  padding: 14px 24px;
`;

export default PrimaryButton;
