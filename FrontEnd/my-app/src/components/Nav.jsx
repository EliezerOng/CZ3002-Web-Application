import React from "react";
import homelogo from "../images/house-solid.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav(props) {
  return (
    <div className="main-container">
      <div className="container-1">
        <img src={props.displayPictureUrl} className="userDisplayPicture"></img>
        <div className="user-info-container">
          <h1 className="username">{props.userName}</h1>
          <h2 className="email">{props.email}</h2>
        </div>
      </div>

      <ul className="side-bar">
        <ul className="side-bar-list">
          <li className="row"></li>
        </ul>
      </ul>

      {
        <div className="external-container">
          <div className="container-2">
            <div className="home-container">
              <img src={homelogo} alt="home logo" className="home-logo" />
              <h1>Home</h1>
            </div>
          </div>

          <div className="container-3">
            <div className="counsellor-container">
              <img
                src={homelogo}
                alt="counsellor logo"
                className="counsellor-logo"
              />
              <h1>Counsellor</h1>
            </div>
          </div>

          <div className="container-4">
            <div className="appointment-container">
              <img
                src={homelogo}
                alt="appointment logo"
                className="appointment-logo"
              />
              <h1>Appointment</h1>
            </div>
          </div>

          <div className="container-5">
            <div className="logout-container">
              <img src={homelogo} alt="logout logo" className="logout-logo" />
              <h1>Logout</h1>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
