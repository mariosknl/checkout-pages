import React from "react";
import { Route, Switch } from "react-router-dom";

import App from "./App";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/ThankYou";

const RouteFile = () => {
  return (
    <Switch>
      <Route path="/thanks" component={ThankYou} />
      <Route exact path="/" component={App} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default RouteFile;
