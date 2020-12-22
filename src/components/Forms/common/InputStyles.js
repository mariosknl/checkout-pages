import styled from "styled-components";

import * as theme from "../../../utils";

const { defaultTheme } = theme;

export const InputStyles = styled.div`
  width: 90%;
  margin: 0.8rem auto;
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
  }

  .label {
    font-size: 1rem;
    text-align: start;
  }
`;
