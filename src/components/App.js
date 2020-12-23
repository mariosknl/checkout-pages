import React from "react";
import { ThemeProvider } from "styled-components";

import { defaultTheme, GlobalStyle } from "../utils";

import Header from "./Header/Header";

import * as main from "./styles";
import MainForm from "./Forms/Forms/MainForm";

const { MainContainer } = main;

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <MainContainer>
      <Header />
      <MainForm />
    </MainContainer>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
