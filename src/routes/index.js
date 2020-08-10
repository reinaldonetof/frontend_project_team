import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch } from "react-router-dom";
import { ReactReduxContext } from "react-redux";

import history from "./history";

import Private from "./private";
import Guest from "./guest";

import Main from "~/pages/Main";
import SignIn from "~/pages/Auth/SignIn";
import SignUp from "~/pages/Auth/SignUp";

const Routes = () => (
  <ConnectedRouter history={history} context={ReactReduxContext}>
    <Switch>
      <Guest path="/signin" component={SignIn} />
      <Guest path="/signup" component={SignUp} />
      <Private path="/" component={Main} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
