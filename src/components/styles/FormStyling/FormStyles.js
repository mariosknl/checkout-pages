import styled from "styled-components";

import * as theme from "../../../utils";

const { defaultTheme } = theme;

const FormStyles = styled.div`
  width: 90%;
  height: 30vh;
  padding: 14px;
  border: 1px solid ${defaultTheme.borderColor};
  border-radius: 4px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  input {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid ${theme.black[300]};
    border-radius: 4px;
  }
`;

const FormStyles2 = styled.div`
  width: 90%;
  height: 40vh;
  padding: 14px;
  border: 1px solid ${defaultTheme.borderColor};
  border-radius: 4px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  input {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid ${theme.black[300]};
    border-radius: 4px;
  }
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

export { FormStyles, FormStyles2, MultipleInputStyles };
