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
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid ${theme.black[300]};
    border-radius: 4px;
  }

  label {
    text-align: left;
    font-size: 12px;
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
    padding: 10px;
    border: 1px solid ${theme.black[300]};
    border-radius: 4px;
  }

  label {
    text-align: left;
    font-size: 12px;
  }
`;

const MultipleInputStyles = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;

  input {
    padding: 10px;
  }

  label {
    font-size: 12px;
  }
`;

export { FormStyles, FormStyles2, MultipleInputStyles };
