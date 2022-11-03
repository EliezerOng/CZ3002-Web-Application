import React from "react";
import AppointmentCard from "./AppointmentCard";
import appointmentData from "./appointmentData";
import "./css/Appointment.css";
import history from "../history";
import Axios from "axios";
import { useEffect, useState } from "react";

function CompletedAppointments() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/appointment/completed")
      .then((res) => {
        console.log("Getting from ::::", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err.res.data));
  }, []);

  // const cards = data.map((data) => {
  //   return <AppointmentCard key={data.appointmentID} {...data} />;
  // });

  const cards = appointmentData.map((data) => {
    return <AppointmentCard key={data.id} {...data} />;
  });

  function redirectToCompleted() {
    history.push("/CompletedAppointments");
  }
  function redirectToUpcoming() {
    history.push("/UpcomingAppointments");
  }

  return (
    <div className="completed appointment-page">
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

export default CompletedAppointments;
