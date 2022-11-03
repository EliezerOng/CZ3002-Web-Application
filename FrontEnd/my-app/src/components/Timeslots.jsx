import React, { useState } from "react";
import "./BookAppt.css";
import slots from "../slots";

import styled from "styled-components";
export default function Timeslots(props) {
  const Button = styled.button`
    /* Same as above */
  `;
  const ButtonToggle = styled(Button)`
    opacity: 0.6;
    ${({ active }) =>
      active &&
      `
    opacity: 1;
  `}
  `;
  const ButtonGroup = styled.div`
    display: flex;
  `;
  const types = ["Cash", "Credit Card", "Bitcoin"];
  function ToggleGroup() {
    const [active, setActive] = useState([]);
    return (
      <ButtonGroup>
        {types.map((type) => (
          <ButtonToggle
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </ButtonToggle>
        ))}
      </ButtonGroup>
    );
  }
  const slotElements = slots.map(function (s) {
    if (s.counsellor === props.name && s.date === props.date) {
      let slotArray = s.slots;

      return slotArray.map((each) => (
        <button className={"eachslot"}>
          {each.split("M")[1] + " " + each.split("M")[0] + "M"}
        </button>
      ));
    }
  });

  return (
    <div className="slotbox">
      {slotElements}
      {/* <ToggleGroup /> */}
    </div>
  );
}
