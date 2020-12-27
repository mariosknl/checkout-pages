import styled from "styled-components";

import * as theme from "../../../utils";

const { defaultTheme } = theme;

const FormStyles = styled.div`
  width: 100%;
  height: 35vh;
  padding: 0.875rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid ${defaultTheme.borderColor};
  border-radius: 4px;
  gap: 20px;

  input {
    width: 100%;
    height: 60%;
    border: 1px solid ${theme.black[300]};
    border-radius: 4px;
    margin-top: 0.4rem;
  }

  .full-width {
    width: 100%;
    grid-column: 1 / 3;
  }

  @media screen and (min-width: 375px) and (max-width: 750px) {
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 1rem;
  }
`;

const FormStyles2 = styled.div`
  width: 90%;
  height: 43vh;
  padding: 0.875rem;
  border: 1px solid ${defaultTheme.borderColor};
  border-radius: 4px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  input {
    width: 100%;
    height: 60%;
    border: 1px solid ${theme.black[300]};
    border-radius: 4px;
    padding-top: 14px;
  }

  select {
    width: 100%;
    padding: 7px;
    border: 1px solid ${theme.black[300]};
    border-radius: 4px;
  }

  .full-width {
    width: 100%;
    grid-column: 1 / 3;
  }

  @media screen and (min-width: 375px) and (max-width: 750px) {
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 1rem;
  }
`;

export { FormStyles, FormStyles2 };
