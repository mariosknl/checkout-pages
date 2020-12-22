import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import PrimaryButton, { SecondaryButton } from "./components/Buttons";
import { defaultTheme, GlobalStyle } from "./utils";

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <PrimaryButton modifiers="large">Buy Now</PrimaryButton>
    <SecondaryButton modifiers="small">Back</SecondaryButton>
    <GlobalStyle />
  </ThemeProvider>
);

ReactDOM.render(<App />, document.querySelector("#root"));
