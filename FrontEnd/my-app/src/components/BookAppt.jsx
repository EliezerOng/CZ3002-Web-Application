import React from "react";
import "./BookAppt.css";

const BookAppt = (props) => {
  return (
    <div className="background2">
      <div className="popup-whole">
        <div className="popup-left">
          <h1>name: {props.display.name}</h1>
          <h1>addr: {props.display.address}</h1>
        </div>
        <div className="popup-right">
          <span className="close-icon" onClick={props.handleClose}>
            x
          </span>
          <div className="info">
            <p className="input Title">
              title:
              <input
                type="text"
                id="title"
                name="title"
                value={props.info.title}
                onChange={props.handleChange}
              />
            </p>
            <p className="input Content">
              hey:
              <textarea
                id="content"
                name="content"
                value={props.info.content}
                onChange={props.handleChange}
              ></textarea>
            </p>
            <button className="submitbtn" onClick={props.handleUpdate}>
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppt;
