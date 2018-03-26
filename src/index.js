import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import RootReducer from "./reducers";
import RootRouter from "./routes";

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(RootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider>
        <RootRouter />
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
