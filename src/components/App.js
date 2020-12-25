import React from "react";
import { ThemeProvider } from "styled-components";

import { defaultTheme, GlobalStyle } from "../utils";
import ErrorBoundary from "./pages/ErrorBoundary";
import RouteFile from "./RouteFile";

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <ErrorBoundary>
      <RouteFile />
      <GlobalStyle />
    </ErrorBoundary>
  </ThemeProvider>
);

export default App;
