import React from "react";
import { ThemeProvider } from "styled-components";

import { defaultTheme, GlobalStyle } from "../utils";

import Header from "./Header/Header";

import { MainContainerStyles } from "./styles";
import MainForm from "./Forms/Forms/MainForm";
import Order from "./OrderSummary/Order";

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <MainContainerStyles>
      <div>marios</div>
      <div>
        <Header />
        <MainForm />
      </div>
      <Order />
    </MainContainerStyles>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
