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
  }

  .inputError {
    border:1px solid red !important;
  }

  .errorMessage {
    width: 80%;
    font-size: 1rem; 
    padding-top: 2rem;
    color: ${red[400]}
  }
`;
