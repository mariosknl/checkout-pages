import styled from "styled-components";

import * as theme from "../../../utils";

const { defaultTheme } = theme;

const FormStyles = styled.form`
  width: 80%;
  padding: 14px;
  margin: 0 auto;
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
    width: 80%;
    margin: 0 auto;
  }

  label {
    padding-left: 1rem;
  }
`;

export { ErrorMessage, FormStyles, MultipleInputStyles };
