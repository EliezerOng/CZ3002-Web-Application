import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import SideBar from "./components/SideBar";
import SideBarData from "./SideBarData";

import AllRoutes from "./AllRoutes";
import { BrowserRouter as Router } from "react-router-dom";

// ReactDOM.render(<App />, document.getElementById("root"));
const sideBarData = SideBarData.map((item) => {
  return <SideBar key={item.id} {...item} />;
});
ReactDOM.render(
  <Router>
    <div className="App">
      <sidebar className="sidebar">{sideBarData}</sidebar>
      <AllRoutes />
    </div>
  </Router>,
  document.getElementById("root")
);
