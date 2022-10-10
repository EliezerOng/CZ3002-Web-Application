import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css";
import "./index.css";

import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
  <Router>
    <div className="ppp">
      <App />
      <Routes />
    </div>
  </Router>,
  document.getElementById("root")
);
