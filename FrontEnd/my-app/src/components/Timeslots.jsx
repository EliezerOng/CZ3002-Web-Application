import React, { useState } from "react";
import "./BookAppt.css";
import slots from "../slots";
import Axios from "axios";

import styled from "styled-components";
export default function Timeslots(props) {
  // styling
  const Button = styled.button`
    /* Same as above */
  `;
  const ButtonToggle = styled(Button)`
    ${({ active }) =>
      active &&
      `
    background: #006edc;
    color: white;
  `}
    :hover {
      background: #76baff;
      color: white;
    }
    :hover { ${({ active }) =>
      active &&
      `
    background: #006edc;
    color: white;
  `}
  `;
  const ButtonGroup = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: auto auto auto auto auto;
  `;
  //   end styling segment

  const types = [];
  const slotElements = slots.map(function (s) {
    if (s.counsellorID === props.id && s.date === props.date) {
      let slotArray = s.slots;
      slotArray.map((each) =>
        types.push(each.split("M")[1] + " " + each.split("M")[0] + "M")
      );
    }
  });
  const [active, setActive] = useState([]);
  const [active2, setActive2] = useState([]);
  function ToggleGroup() {
    return (
      <ButtonGroup>
        {types.map((type) => (
          <ButtonToggle
            key={type}
            active={active === type}
            onClick={() => {
              setActive(type);
              setActive2(props.date);
            }}
            className="eachslot"
          >
            {type}
          </ButtonToggle>
        ))}
      </ButtonGroup>
    );
  }
  //   const slotElements = slots.map(function (s) {
  //     if (s.counsellorID === props.id && s.date === props.date) {
  //       let slotArray = s.slots;

  //       return slotArray.map((each) => (
  //         <button className={"eachslot"}>
  //           {each.split("M")[1] + " " + each.split("M")[0] + "M"}
  //         </button>
  //       ));
  //     }
  //   })

  function handleUpdate() {
    const article = {
      date: active,
      time: active2,
    };
    Axios.post(
      `http://127.0.0.1:8000/api/appointment/counsellor/${props.id}/book`,
      article,
      {
        auth: {
          username: "admin",
          password: "admin123",
        },
      }
    )
      .then((res) => {
        console.log("done posting");
      })
      .catch((err) => console.log(err));
    window.location.reload();
  }

  return (
    <div className="displayslots">
      <ToggleGroup />
      <h1 className="selectedslot">
        selected: <span className="selecteddate">{active2} </span>
        <span className="selectedtime"> {active}</span>
      </h1>
      <button className="submitbtn2" onClick={handleUpdate}>
        submit
      </button>
    </div>
  );
}
