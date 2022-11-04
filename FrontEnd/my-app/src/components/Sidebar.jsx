import React from "react";
import homelogo from "../images/house-solid.png";
import counsellor from "../images/counsellor.png";
import appointmentLogo from "../images/appointment-icon.png";
import logoutLogo from "../images/logout-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/SideBar.css";
import history from "../history";
import { Link } from "react-router-dom";

export default function SideBar(props) {
  function redirectCP() {
    history.push("/CounsellorPage");
  }
  function redirectFP() {
    history.push("/");
  }
  function redirectLP() {
    history.push("/Login");
  }
  function redirectAP() {
    history.push("/UpcomingAppointments");
  }
  return (
    <div className="side-bar">
      <div className="container-12">
        <div className="container-1">
          <img src={props.displayPictureUrl} className="userDP"></img>

          <div className="user-info-container">
            <h1 className="username">{props.userName}</h1>
            <h2 className="email">{props.email}</h2>
          </div>
        </div>
        <div className="container-2">
          <div className="home-box" onClick={redirectFP}>
            <img src={homelogo} alt="home logo" className="home-logo" />
            <h1>Home</h1>
          </div>

          <div className="counsellor-box" onClick={redirectCP}>
            <img
              src={counsellor}
              alt="counsellor logo"
              className="counsellor-logo"
            />
            <h1>Counsellor</h1>
          </div>

          <div className="appointment-box" onClick={redirectAP}>
            <img
              src={appointmentLogo}
              alt="appointment logo"
              className="appointment-logo"
            />
            <h1>Appointments</h1>
          </div>
        </div>
      </div>
      <div className="container-3">
        <div className="logout-box" onClick={redirectLP}>
          <img src={logoutLogo} alt="logout logo" className="logout-logo" />
          <h1>Logout</h1>
        </div>
      </div>
    </div>
  );
}
