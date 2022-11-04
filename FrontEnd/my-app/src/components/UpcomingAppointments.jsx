import React from "react";
import UpcomingAppointmentCard from "./UpcomingAppointmentCard";
import "./css/Appointment.css";
import history from "../history";
import Axios from "axios";
import { useEffect, useState } from "react";

function UpcomingAppointments() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/appointment/upcoming", {
      auth: {
        username: "admin",
        password: "admin123",
      },
    })
      .then((res) => {
        console.log("Getting from ::::", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err.res.data));
  }, []);

  const cards = data.map((data) => {
    return <UpcomingAppointmentCard key={data.appointmentID} {...data} />;
  });

  function redirectToCompleted() {
    history.push("/CompletedAppointments");
  }
  function redirectToUpcoming() {
    history.push("/UpcomingAppointments");
  }

  return (
    <div className="upcoming appointment-page">
      <div className="toggle-buttons">
        <button className="upcoming-button" onClick={redirectToUpcoming}>
          Upcoming
        </button>
        <button className="completed-button" onClick={redirectToCompleted}>
          Completed
        </button>
      </div>

      <section className="appointment-card">{cards}</section>
    </div>
  );
}

export default UpcomingAppointments;
