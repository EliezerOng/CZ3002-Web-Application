import React from "react";
import homelogo from "../images/house-solid.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PostCard.css";
import viewCountIcon from "../images/view-icon.png";
import commentCounter from "../images/comment-icon.png";

export default function PostCard(props) {
  return (
    <div className="main-container">
      <div className="container-1">
        <div className="box-1">
          <h1 className="post-title"> {props.title}</h1>
          <h2 className="post-time">{props.time}</h2>
        </div>
        <div className="box-2">
          <img src={props.displayPictureUrl} className="user-dp"></img>
        </div>
      </div>
      <div className="container-2">
        <h1 className="post-description">{props.description}</h1>
      </div>
      <div className="container-3">
        <div className="box-1">
          <img
            src={viewCountIcon}
            alt="view-count-icon"
            className="view-count-icon"
          />
          <h1 className="view-count-h1">{props.viewCount}</h1>
          <img
            src={commentCounter}
            alt="comment-counter"
            className="comment-counter"
          />
          <h1 className="comment-counter-h1">{props.commentCount}</h1>
        </div>
      </div>
    </div>
  );
}
