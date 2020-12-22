import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { defaultTheme, GlobalStyle } from "../utils";

import Header from "./Header/Header";
import ContactInformation from "./Forms/Contact-Information";
import Shipping from "./Forms/ShippingForm";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
`;

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <MainContainer>
      <>
        <Header />
      </>
      <ContactInformation />
      <Shipping />
    </MainContainer>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
