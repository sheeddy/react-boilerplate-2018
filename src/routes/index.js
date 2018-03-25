import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "../containers/App";
import NotFound from "./NotFound";
import Home from "../containers/Home";

const RootRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/app" render={props => <App {...props} />} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default RootRouter;
