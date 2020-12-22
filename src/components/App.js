import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { defaultTheme, GlobalStyle } from "../utils";

import Header from "./Header/Header";

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
    </MainContainer>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
