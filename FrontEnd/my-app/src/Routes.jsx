import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Test from "./components/Test";
import Forum from "./components/Forum";
import CounsellorPage from "./components/CounsellorPage";
import App from "./App";
import history from "./history";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Forum} />
          <Route path="/CounsellorPage" component={CounsellorPage} />
          <Route path="/Test" component={Test} />
        </Switch>
      </Router>
    );
  }
}
