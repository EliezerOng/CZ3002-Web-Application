import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ForumHeader.css";
import NewPost from "./NewPost";

// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";

export default function ForumHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="forumheader">
      <input
        type="text"
        placeholder="search post..."
        className="search-input"
      ></input>
      <button className="newpostbtn" onClick={togglePopup}>
        new post
      </button>
      {isOpen && <NewPost className="createPost" handleClose={togglePopup} />}
    </div>
  );
}
