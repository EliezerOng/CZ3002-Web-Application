import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Test from "./components/Test";
import Login from "./components/Login";
import Register from "./components/Register";
import Forum from "./components/Forum";
import CounsellorPage from "./components/CounsellorPage";
import App from "./App";
import history from "./history";
import UpcomingAppointments from "./components/UpcomingAppointments";
import AppointmentCard from "./components/AppointmentCard";
import PostCard from "./components/PostCard";
import CompletedAppointments from "./components/CompletedAppointments";
import IndivPost from "./components/IndivPost";

export default class Routes extends Component {
  render() {
    // const [singleData, setSingleData] = useState();

    // function addData(data) {
    //   setSingleData(data);
    // }

    return (
      <Router history={history}>
        <Switch>
          {/* <Route path="/" exact component={Forum} /> */}
          <Route path="/" exact component={Forum} />
          <Route path="/IndivPost" component={IndivPost} />
          <Route path="/CounsellorPage" component={CounsellorPage} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/Forum" component={Forum} />
          <Route
            path="/UpcomingAppointments"
            component={UpcomingAppointments}
          />
          <Route
            path="/CompletedAppointments"
            component={CompletedAppointments}
          />
          <Route path="/AppointmentCard" component={AppointmentCard} />
          <Route path="/Test" component={Test} />
        </Switch>
      </Router>
    );
  }
}
