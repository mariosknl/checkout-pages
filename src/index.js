import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/App";
import store from "../src/store";
import RouteFile from "./components/RouteFile";

const Index = () => (
  <Provider store={store}>
    <Router>
      <RouteFile />
    </Router>
  </Provider>
);

ReactDOM.render(<Index />, document.querySelector("#root"));
