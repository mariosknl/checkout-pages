import React from "react";
import { ThemeProvider } from "styled-components";

import { defaultTheme, GlobalStyle } from "../utils";

import Header from "./Header/Header";
import ContactInformation from "./Forms/Contact-Information";
import Shipping from "./Forms/Shipping-Form";
import BillingInformation from "./Forms/Billing-information";
import PaymentInformation from "./Forms/Payment-Methods";

import * as common from "./styles";

const { MainContainer } = common;

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <MainContainer>
      <>
        <Header />
      </>
      <ContactInformation />
      <Shipping />
      <BillingInformation />
      <PaymentInformation />
    </MainContainer>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
