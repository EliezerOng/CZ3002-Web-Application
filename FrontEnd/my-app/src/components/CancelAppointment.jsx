import React from "react";

const CancelAppointment = (props) => {
  return (
    <div className="cancel-appt-popup">
      <span className="cancellation-msg">
        Are you sure you want to cancel this appointment?
      </span>

      <button className="confirm-delete" onClick={props.handleDelete}>
        Confirm
      </button>
      <button className="dont-delete" onClick={props.handleClose}>
        Back
      </button>
    </div>
  );
};

export default CancelAppointment;
