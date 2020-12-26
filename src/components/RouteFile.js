import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";

import NotFound from "./pages/NotFound";
import OrderPage from "./pages/OrderPage";
import ThankYou from "./pages/ThankYou";

const RouteFile = () => {
  return (
    <Router>
      <Switch>
        <Route path="/thanks" component={ThankYou} />
        <Route exact path="/" component={OrderPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default RouteFile;
