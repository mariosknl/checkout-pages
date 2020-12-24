import React from "react";
import { ThemeProvider } from "styled-components";

import { defaultTheme, GlobalStyle } from "../utils";

import Header from "./Header/Header";

import * as main from "./styles";
import MainForm from "./Forms/Forms/MainForm";
import OrderSummary from "./Order Summary/OrderSummary";

const { MainContainer } = main;

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <MainContainer>
      <Header />
      {/* <MainForm /> */}
      <OrderSummary />
    </MainContainer>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
