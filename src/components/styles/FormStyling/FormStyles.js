import styled from "styled-components";

import * as theme from "../../../utils";

const { defaultTheme } = theme;

const FormStyles = styled.div`
  width: 90%;
  height: 280px;
  padding: 14px;
  margin: 2rem auto;
  border: 1px solid ${defaultTheme.borderColor};
  border-radius: 4px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const FormStyles2 = styled.div`
  width: 90%;
  height: 394px;
  padding: 14px;
  margin: 2rem auto;
  border: 1px solid ${defaultTheme.borderColor};
  border-radius: 4px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ErrorMessage = styled.span`
  color: ${defaultTheme.status.errorColor};
`;

const MultipleInputStyles = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  input {
    width: 70%;
    margin: 0 auto;
  }

  label {
    padding-left: 1rem;
  }
`;

export { ErrorMessage, FormStyles, FormStyles2, MultipleInputStyles };
