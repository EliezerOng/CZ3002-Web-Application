import React, { useState, useEffect } from "react";
import "./css/BookAppt.css";
// import slots from "../slots";
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
    height: 120px;
    display: grid;
    gap: 20px;
    grid-template-columns: auto auto auto auto auto;
  `;
  //   end styling segment

  const allslots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
  ];
  const [types, setTypes] = useState(allslots);

  // RETRIEVING SLOTS
  // on initial render
  const [slots, setSlots] = useState([]);
  useEffect(() => {
    console.log(props.id);
    const token = "22a1b17dec7ca0abc6f70cf47566f412a9ef4a10";
    Axios.get(
      `http://127.0.0.1:8000/api/appointment/counsellor/${props.id}/book`,
      {
        headers: { Authorization: `Token ${token}` },
      }
    )
      .then((res) => {
        console.log("Getting from ::", res.data);
        setSlots(res.data);
      })
      .catch((err) => console.log(err.res.data));

    console.log(slots);
    setTypes(allslots);
    if (slots.length > 0) {
      console.log("not empty");
      slots.map((s) => {
        if (s.date == props.date) {
          setTypes((current) => current.filter((slot) => slot !== s.time));
        }
      });
    }
  }, []);
  // on date change
  useEffect(() => {
    console.log(props.id);
    const token = "22a1b17dec7ca0abc6f70cf47566f412a9ef4a10";
    Axios.get(
      `http://127.0.0.1:8000/api/appointment/counsellor/${props.id}/book`,
      {
        headers: { Authorization: `Token ${token}` },
      }
    )
      .then((res) => {
        console.log("Getting from ::", res.data);
        setSlots(res.data);
      })
      .catch((err) => console.log(err.res.data));

    console.log(slots);
    setTypes(allslots);
    if (slots.length > 0) {
      console.log("not empty");
      slots.map((s) => {
        if (s.date == props.date) {
          setTypes((current) => current.filter((slot) => slot !== s.time));
        }
      });
    }
  }, [props]);

  // const slotElements = slots.map(function (s) {
  //   if (s.counsellorID === props.id && s.date === props.date) {
  //     let slotArray = s.slots;
  //     types = [];
  //     allslots.map(function (all) {
  //       if (!slotArray.includes(all)) {
  //         types.push(all);
  //       }
  //     });
  //   }
  // });

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

  // ADDING BOOKING
  function handleUpdate() {
    const token = "22a1b17dec7ca0abc6f70cf47566f412a9ef4a10";
    const article = {
      date: active2,
      time: active,
    };
    Axios.post(
      `http://127.0.0.1:8000/api/appointment/counsellor/${props.id}/book`,
      article,
      {
        headers: { Authorization: `Token ${token}` },
      }
    )
      .then((res) => {
        console.log("done posting");
      })
      .catch((err) => console.log(err));
    // window.location.reload();
  }

  return (
    <div>
      <ToggleGroup />
      <div className="booking">
        <h2 className="selectedslot">
          selected: <span className="selecteddate">{active2} </span>
          <span className="selectedtime"> {active}</span>
        </h2>
        <button className="submitbtn2" onClick={handleUpdate}>
          submit
        </button>
      </div>
    </div>
  );
}
