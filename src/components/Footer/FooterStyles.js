import styled from "styled-components";

import { typeScale, blue, black } from "../../utils";

const FooterStyles = styled.div`
  width: 100%;
  height: 300px;

  input {
    margin-top: 1rem;
  }

  label {
    font-size: ${typeScale.input};
    margin-left: 1rem;
  }

  p {
    font-size: ${typeScale.input};
    color: ${black[200]};
  }

  span {
    font-size: ${typeScale.small};
    text-decoration: underline;
    color: ${blue[400]};
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
