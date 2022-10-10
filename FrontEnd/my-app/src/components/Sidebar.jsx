import React from "react";
import homelogo from "../images/house-solid.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SideBar.css";
import history from "../history";

export default function SideBar(props) {
  function redirectCP() {
    history.push("/CounsellorPage");
  }
  function redirectFP() {
    history.push("/");
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
              src={homelogo}
              alt="counsellor logo"
              className="counsellor-logo"
            />
            <h1>Counsellor</h1>
          </div>

          <div className="appointment-box">
            <img
              src={homelogo}
              alt="appointment logo"
              className="appointment-logo"
            />
            <h1>Appointment</h1>
          </div>
        </div>
      </div>
      <div className="container-3">
        <div className="logout-box">
          <img src={homelogo} alt="logout logo" className="logout-logo" />
          <h1>Logout</h1>
        </div>
      </div>
    </div>
  );
}
