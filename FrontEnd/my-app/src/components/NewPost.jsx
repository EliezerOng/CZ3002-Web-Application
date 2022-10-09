import React from "react";
import "./NewPost.css";

const NewPost = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <div className="info">
          <p className="input Title">
            title:
            <input type="text" name="title" id="title" />
          </p>
          <p className="input Content">
            content:
            <input type="text" name="content" id="content" />
          </p>
        </div>
        <button className="submitbtn">submit</button>
      </div>
    </div>
  );
};

export default NewPost;
