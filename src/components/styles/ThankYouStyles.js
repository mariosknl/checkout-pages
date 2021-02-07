import styled from "styled-components";

import { defaultTheme } from "../../utils";

const ThankYouStyles = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BoxStyles = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid ${defaultTheme.borderColor};

  img {
    width: 50%;
    padding-bottom: 3rem;
  }

  p {
    text-align: center;
    width: 90%;
    color: ${defaultTheme.textColor};
  }

  span {
    width: 60%;
    text-align: center;
    color: ${defaultTheme.subTextColor};
  }

  @media screen and (max-width: 1080px) {
    height: 80%;
    padding: 0.5rem;

    img {
      width: 60%;
    }

    h2 {
      font-size: 20px;
    }
  }
  @media screen and (min-width: 375px) and (max-width: 750px) {
    width: 90%;
    height: 80%;
  }
`;

const CopyrightStyles = styled.div`
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${defaultTheme.subTextColor};
  position: fixed;
  bottom: 1rem;

  p {
    margin-block: 0;
  }
  @media screen and (min-width: 375px) and (max-width: 750px) {
    width: 90%;
    height: 5%;

    p {
      font-size: 10px;
    }
  }
`;

export { BoxStyles, CopyrightStyles, ThankYouStyles };
