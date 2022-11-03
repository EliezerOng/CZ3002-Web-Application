import "./css/CommentsCard.css";

import React from "react";
import "./css/PostCard.css";

import tempDP from "../images/A.png";

export default function CommentsCard(props) {
  // console.log("PROPS = ");
  // console.log(props);

  return (
    <div className="comment-card">
      <div className="container-1">
        <img src={tempDP} alt="Profile Logo" className="dp" />
        <h1 className="name">{props.name}</h1>
      </div>
      <div className="container-2">
        <h1 className="description">{props.comments}</h1>
      </div>
    </div>
  );
}
