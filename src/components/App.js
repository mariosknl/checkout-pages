import React from "react";
import { ThemeProvider } from "styled-components";

import { defaultTheme, GlobalStyle } from "../utils";

import Header from "./Header";

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <Header />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
