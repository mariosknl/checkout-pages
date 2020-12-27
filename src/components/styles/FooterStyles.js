import styled from "styled-components";

import { typeScale, blue, black } from "../../utils";

const FooterStyles = styled.div`
  width: 90%;
  height: 300px;

  input {
    margin-top: 1rem;
    margin-right: 1rem;
  }

  label {
    font-size: ${typeScale.input};
    margin-left: 0.5rem;
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

  @media screen and (min-width: 375px) {
    width: 100%;
    color: ${black[200]};

    p {
      font-size: 12px;
      margin: 1.5rem auto;
    }
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
