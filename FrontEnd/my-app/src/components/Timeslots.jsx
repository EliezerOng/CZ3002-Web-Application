import React, { useState } from "react";
import "./BookAppt.css";
import slots from "../slots";

export default function Timeslots(props) {
  const slotElements = slots.map(function (s) {
    if (s.counsellor === props.name && s.date === props.date) {
      let slotArray = s.slots;
      return slotArray.map((each) => (
        <div className="eachslot">
          {each.split("M")[1] + " " + each.split("M")[0] + "M"}
        </div>
      ));
    }
  });
  return <div className="slotbox">{slotElements}</div>;
}
