import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
import { normalize } from "polished";
import { red } from "./colors";

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html{
    font-size: 16px;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: ${primaryFont};
  }

  main {
    width: 90%;
    margin: 0 auto;
  }

  ul {
    list-style-type: none;
  }

  .error {
    color: ${red[400]};
    padding-left: 20px;
  }
`;
