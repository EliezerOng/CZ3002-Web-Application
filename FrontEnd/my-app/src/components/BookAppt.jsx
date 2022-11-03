import React, { useState } from "react";
import Calendar from "react-calendar";
import "./BookAppt.css";
import "./Calendar.css";
import Timeslots from "./Timeslots";

// import "react-calendar/dist/Calendar.css";

function BookAppt(props) {
  const [date, setDate] = useState(new Date());
  const [mydate, setMyDate] = useState(() => {
    let d = Date();
    let day = d.toString().split(" ")[2];
    let month = d.toString().split(" ")[1];
    let year = d.toString().split(" ")[3];
    return day + "-" + month + "-" + year;
  });

  function onChange(date) {
    setDate(date);
    let day = date.toString().split(" ")[2];
    let month = date.toString().split(" ")[1];
    let year = date.toString().split(" ")[3];
    let mydate = day + "-" + month + "-" + year;
    setMyDate(mydate);
  }
  return (
    <div className="background2">
      <div className="popup-whole">
        <span className="close-icon2" onClick={props.handleClose}>
          x
        </span>
        <div className="popup-left">
          <h1>counsellor details</h1>
          <img src={`./images/${props.display.image}`} alt="image" />
          <h2 className="popup-name">{props.display.name}</h2>
          <p>{props.display.address}</p>
          <p>Languages: {props.display.languages}</p>
          <p>{props.display.description}</p>
        </div>
        <div className="popup-right">
          <div className="calendar">
            <Calendar onChange={onChange} value={date} />
          </div>
          <div className="slots">
            <h1>available slots for {mydate}</h1>
            <Timeslots date={mydate} name={props.display.name} />
          </div>
          <button className="submitbtn2" onClick={props.handleUpdate}>
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookAppt;
