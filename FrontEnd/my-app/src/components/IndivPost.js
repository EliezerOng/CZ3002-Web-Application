import React from "react";
import mindfullLogo from "../images/mindfull-logo.png";
import viewCountIcon from "../images/view-icon.png";
import commentCounter from "../images/comment-icon.png";
import "./IndivPost.css";
import { useState } from "react";

const IndivPost = () => {
  const [comment, setComment] = useState("");

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

        {/* create another component?? how to map all comments? */}
        <div className="comment-section">
          <img
            src={mindfullLogo}
            alr="test-profile-pic"
            className="profile-pic"
          />
          <div className="comment-container">
            <div className="user-time-container">
              <div className="username">user1</div>
              <div className="timestamp">06:04am</div>
            </div>
            <div className="comment-content">
              dkfjherih8 ioffiu iuhfanoifj oaihoaihfwoinsiadn
            </div>
          </div>
        </div>

        <form className="post-comment">
          <img
            src={mindfullLogo}
            alr="test-profile-pic"
            className="profile-pic image"
          />
          <input
            id="comment-input"
            onChange={(e) => setComment(e.target.value)}
            //to clear input upon submission
            // value={comment}
            required
          />
          <button className="send-comment">Comment</button>
        </form>
      </div>
    </div>
  );
};

export default IndivPost;
