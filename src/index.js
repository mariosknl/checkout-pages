import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, { SecondaryButton } from "./components/Buttons";

const App = () => (
  <div>
    <PrimaryButton>Buy Now</PrimaryButton>
    <SecondaryButton>Back</SecondaryButton>
  </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
