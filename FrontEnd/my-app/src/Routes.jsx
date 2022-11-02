import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Test from "./components/Test";
import Login from "./components/Login";
import Register from "./components/Register";
import Forum from "./components/Forum";
import CounsellorPage from "./components/CounsellorPage";
import App from "./App";
import history from "./history";
import Appointments from "./components/Appointments";
import AppointmentCard from "./components/AppointmentCard";
import PostCard from "./components/PostCard";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Forum} />
          <Route path="/CounsellorPage" component={CounsellorPage} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/Forum" component={Forum} />
          <Route path="/Appointments" component={Appointments} />
          <Route path="/AppointmentCard" component={AppointmentCard} />
          <Route path="/Test" component={Test} />
        </Switch>
      </Router>
    );
  }
}
