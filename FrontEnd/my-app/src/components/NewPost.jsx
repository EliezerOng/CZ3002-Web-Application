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
            <input
              type="text"
              id="title"
              name="title"
              value={props.info.title}
              onChange={props.handleChange}
            />
          </p>
          <p className="input Content">
            content:
            <textarea
              id="content"
              name="content"
              value={props.info.content}
              onChange={props.handleChange}
            ></textarea>
          </p>
        </div>
        <button className="submitbtn" onClick={props.handleUpdate}>
          submit
        </button>
      </div>
    </div>
  );
};

export default NewPost;
