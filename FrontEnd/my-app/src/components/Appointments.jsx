import React from "react";
import AppointmentCard from "./AppointmentCard";
import appointmentData from "./appointmentData";
import "./Appointment.css";

function ViewAppointments() {
  const cards = appointmentData.map((data) => {
    return <AppointmentCard key={data.id} {...data} />;
  });

  return (
    <div className="appointment-page">
      <div className="toggle-buttons">
        <button className="upcoming-button">Upcoming</button>
        <button className="completed-button">Completed</button>
      </div>

      <section className="appointment-card">{cards}</section>
    </div>
  );
}

export default ViewAppointments;
