import React from "react";
import AppointmentCard from "./AppointmentCard";
import appointmentData from "./appointmentData";
import "./css/Appointment.css";
import history from "../history";

function CompletedAppointments() {
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
