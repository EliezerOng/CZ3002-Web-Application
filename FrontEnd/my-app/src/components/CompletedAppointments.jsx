import React from "react";
import CompletedAppointmentCard from "./CompletedAppointmentCard";
import appointmentData from "./appointmentData";
import "./css/Appointment.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CompletedAppointments() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/appointment/completed?format=api", {
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
    return <CompletedAppointmentCard key={data.appointmentID} {...data} />;
  });

  // const cards = appointmentData.map((data) => {
  //   return <AppointmentCard key={data.id} {...data} />;
  // });

  return (
    <div className="completed appointment-page">
      <div className="toggle-buttons">
        <Link to="/UpcomingAppointments" className="upcoming-button">
          Upcoming
        </Link>
        {/* <button className="upcoming-button" onClick={redirectToUpcoming}>
         Upcoming
       </button> */}
        <Link to="/CompletedAppointments" className="completed-button">
          Completed
        </Link>
        {/* <button className="completed-button" onClick={redirectToCompleted}>
          Completed
        </button> */}
      </div>

      <section className="appointment-card">{cards}</section>
    </div>
  );
}

export default CompletedAppointments;
