import styled from "styled-components";

import * as theme from "../../../utils";

const { defaultTheme } = theme;

const FormStyles = styled.div`
  width: 90%;
  height: 30vh;
  padding: 14px;
  border: 1px solid ${defaultTheme.borderColor};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  input {
    width: 90%;
    margin-bottom: 10px;
    margin: 10px auto;
    padding: 8px;
    border: 1px solid ${theme.black[300]};
    border-radius: 4px;
  }

  label {
    text-align: left;
    padding-left: 20px;
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
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  input {
    width: 80%;
    margin-left: 20px;
  }

  label {
  }
`;

export { FormStyles, FormStyles2, MultipleInputStyles };
