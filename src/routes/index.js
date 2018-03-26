import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import Home from "../containers/Home";
import NotFound from "./NotFound";

class RootRouter extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default RootRouter;
