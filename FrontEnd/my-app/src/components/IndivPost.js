import React from "react";
import mindfullLogo from "../images/mindfull-logo.png";
import viewCountIcon from "../images/view-icon.png";
import commentCounter from "../images/comment-icon.png";
import "./IndivPost.css";

const IndivPost = () => {
  return (
    <div className="whole-page">
      <div className="post">
        <div className="whole-content">
          <img
            src={mindfullLogo}
            alr="test-profile-pic"
            className="profile-pic image"
          />
          <div className="post-content-wrap">
            <h1 className="post-title">
              If quantum tunneling is real, why i nv see it happen
            </h1>
            <div className="timestamp"> 05:02am</div>
            <div className="details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
              magna justo, volutpat, non amet massa viverra euismod id.
            </div>
          </div>
        </div>
        <div className="counters">
          <div className="likes">
            <img
              src={viewCountIcon}
              alt="like-count-icon"
              className="like-icon image"
            />
            <div className="like-count">5</div>
          </div>
          <div className="comments">
            <img
              src={commentCounter}
              alt="comment-icon"
              className="comment-icon image"
            />
            <div className="comment-count">3</div>
          </div>
        </div>
      </div>

      <div className="comment-section"></div>
    </div>
  );
};

export default IndivPost;
