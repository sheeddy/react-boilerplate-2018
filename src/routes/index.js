import React, { PureComponent } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import Starter from "../containers/Starter";
import NotFound from "./NotFound";
import Login from "../containers/Login";

class RootRouter extends PureComponent {
  render() {
    const HomeIndex = () => (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/starter" component={Starter} />
      </div>
    );
    return (
      <Switch>
        <Route path="/" component={HomeIndex} />
        <Route path="/login" component={Login} />
      </Switch>
    );
  }
}

export default RootRouter;
