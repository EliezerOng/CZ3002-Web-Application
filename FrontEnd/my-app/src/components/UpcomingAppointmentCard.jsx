import React, { useState } from "react";
import Axios from "axios";

import "./css/AppointmentCard.css";
import {
  faLocationDot,
  faCalendar,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CancelAppointment from "./CancelAppointment";

const UpcomingAppointmentCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setConfirmDelete(false);
  };

  function handleDelete(event) {
    setConfirmDelete(true);
    console.log("confirm delete: " + confirmDelete);

    Axios.delete(
      `http://127.0.0.1:8000/api/appointment/upcoming/${props.appointmentID}`,
      {
        auth: {
          username: "admin",
          password: "admin123",
        },
      }
    )
      .then((res) => {
        console.log("done deleting");
      })
      .catch((err) => console.log(err));
    // window.location.reload();
  }

  return (
    <div className="card-wrapper">
      <div className="counsellor">
        <img
          src={`./images/${props.image}`}
          className="counsellor-pic"
          alt="image"
        />
        <p className="counsellor-name">{props.counsellorName}</p>
      </div>
      <div className="counsellor-address">
        <FontAwesomeIcon icon={faLocationDot} />
        {props.address}
      </div>
      <div className="date-time">
        <div className="date">
          <FontAwesomeIcon icon={faCalendar} />
          <p>{props.date}</p>
        </div>
        <div className="time">
          <FontAwesomeIcon icon={faClock} />
          <p>{props.time}</p>
        </div>
      </div>
      <button className="cancel-button" onClick={togglePopup}>
        Cancel
      </button>

      {isOpen && (
        <CancelAppointment
          className="createPost"
          handleClose={togglePopup}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default UpcomingAppointmentCard;
