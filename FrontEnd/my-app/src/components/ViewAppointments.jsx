import React from "react";
import AppointmentCard from "./AppointmentCard";
import appointmentData from "./appointmentData";

function ViewAppointments() {
  const cards = appointmentData.map((data) => {
    return <AppointmentCard key={data.id} {...data} />;
  });

  return (
    <div>
      <section className="card">{cards}</section>
    </div>
  );
}

export default ViewAppointments;
