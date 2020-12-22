import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, { SecondaryButton } from "./components/Buttons";
import { GlobalStyle } from "./utils";

const App = () => (
  <div>
    <PrimaryButton modifiers="large">Buy Now</PrimaryButton>
    <SecondaryButton modifiers="small">Back</SecondaryButton>
    <GlobalStyle />
  </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
