import React from "react";
import "./css/CounsellorPage.css";

export default function Counsellor(props) {
  return (
    <div
      className="ccard"
      onClick={() =>
        props.handleClick(
          props.name,
          props.address,
          props.languages,
          props.description,
          props.image,
          props.counsellorID
        )
      }
    >
      {/* <img src={props.image} alt="image" /> */}
      {/* <img src={`./images/${props.image}`} alt="image" /> */}

      <div className="ccard-info">
        <h2>{props.name}</h2>
        <p>{props.address}</p>
        <p>Languages: {props.languages}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
