import React, { Fragment } from "react";
import Routes from "./routes";
import { Provider, ReactReduxContext } from "react-redux";
import ReduxToastr from "react-redux-toastr";

import store from "./store";

import GlobalStyle from "./styles/global";

const App = () => (
  <Provider store={store} context={ReactReduxContext}>
    <Fragment>
      <Routes />
      <ReduxToastr />
      <GlobalStyle />
    </Fragment>
  </Provider>
);

export default App;
