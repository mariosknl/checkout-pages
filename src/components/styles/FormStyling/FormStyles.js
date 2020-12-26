import styled from "styled-components";

import * as theme from "../../../utils";

const { defaultTheme } = theme;

const FormStyles = styled.div`
  width: 90%;
  height: 30vh;
  padding: 14px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 3rem;

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
  height: 42vh;
  padding: 14px;
  border: 1px solid ${defaultTheme.borderColor};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 3rem;

  input {
    width: 90%;
    margin-bottom: 10px;
    margin: 10px auto;
    padding: 8px;
    border: 1px solid ${theme.black[300]};
    border-radius: 4px;
  }

  #postalCode {
    width: 70%;
  }

  select {
    width: 89%;
    margin-top: 0.6rem;
    margin-right: 2rem;
    padding: 5px;
    border: 1px solid ${theme.black[300]};
    border-radius: 4px;
  }

  #countryLabel {
    padding-left: 0;
  }

  #postalCode {
    width: 70%;
  }

  label {
    padding-left: 20px;
    font-size: 12px;
  }

  #city {
    width: 76%;
    margin-right: 5rem;
  }

  #state {
    width: 80%;
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
`;

export { FormStyles, FormStyles2, MultipleInputStyles };
