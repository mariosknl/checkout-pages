import styled from "styled-components";

import { typeScale } from "../../utils";

const FooterStyles = styled.div`
  width: 100%;
  height: 300px;
  background-color: yellow;

  input {
    margin-top: 1rem;
  }

  label {
    font-size: ${typeScale.input};
    margin-left: 1rem;
  }
`;

const ButtonStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
`;

export { ButtonStyles, FooterStyles };
