import React from "react";
import "./AppointmentCard.css";
import {
  faLocationDot,
  faCalendar,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const AppointmentCard = (props) => {
//   return (
//     <div className="card-wrapper">
//       <div className="counsellor">
//         <img src={"../images/${props.image}"} alt="image" />
//         <h1>{props.name}</h1>
//       </div>
//       <div className="date-time">
//         {props.date} {props.time}
//       </div>
//       <button>Cancel</button>
//     </div>
//   );
// };

// export default AppointmentCard;

const AppointmentCard = (props) => {
  return (
    <div className="card-wrapper">
      <div className="counsellor">
        <img
          src={`./images/${props.image}`}
          className="counsellor-pic"
          alt="image"
        />
        <p className="counsellor-name">{props.name}</p>
      </div>
      <div className="counsellor-address">
        <FontAwesomeIcon icon={faLocationDot} />
        {props.address}
      </div>
      <div className="date-time">
        <div className="date">
          <FontAwesomeIcon icon={faCalendar} />
          <p>{props.date}</p>
        </div>
        <div className="time">
          <FontAwesomeIcon icon={faClock} />
          <p>{props.time}</p>
        </div>
      </div>
      <button className="cancel-button">Cancel</button>
    </div>
  );
};

export default AppointmentCard;
