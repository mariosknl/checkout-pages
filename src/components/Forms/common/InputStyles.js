import styled from "styled-components";

import * as theme from "../../../utils";

export const InputStyles = styled.div`
  width: 90%;
  margin: 0.8rem auto;
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
  }

  .label {
    font-size: ${theme.typeScale.small};
    text-align: start;
  }
`;
