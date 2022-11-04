import React from "react";
import "./css/IndivPost.css";
import { useState } from "react";
import PostDetail from "./PostDetail";
import CommentsCard from "./CommentsCard";
import tempDP from "../images/A.png";
import Axios from "axios";

const IndivPost = (props) => {
  const [comment, setComment] = useState(props.comments);
  const [commentString, setCommentString] = useState("");

  function handleGatherString(event) {
    const { value } = event.target;
    setCommentString(value);
  }

  function handleNewComment(event) {
    setComment((prevComment) => {
      let newArray = prevComment[event.target.name];
      newArray.push(commentString);
      return {
        ...prevComment,
        [event.target.name]: newArray,
      };
    });
    updateDatabase();
    setCommentString("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("form submitted ");
    console.log(comment["admin"]);
  }

  function updateDatabase() {
    const url = "http://127.0.0.1:8000/api/forum/posts/1/comments";
    const temp = commentString;
    const text = {
      content: temp,
    };
    const headers = {
      auth: {
        username: "admin",
        password: "admin123",
      },
    };

    Axios.post(url, text, headers)
      .then((res) => {
        console.log("done posting");
      })
      .catch((err) => console.log(err));
  }

  console.log("@@@@@@@@@@@@@@");
  console.log(comment);

  let kArr = Object.keys(comment);
  let vArr = Object.values(comment);
  let cArr = [];

  for (let i = 0; i < kArr.length; i++) {
    cArr.push(<CommentsCard key={i} name={kArr[i]} comments={vArr[i]} />);
  }

  return (
    <div>
      <PostDetail key={props.pid} id={props.pid} {...props} />
      <div>{cArr}</div>

      <form className="post-comment" onSubmit={handleSubmit}>
        <img src={tempDP} alt="tempDP" className="profile-pic image" />
        <input
          id="comment-input"
          onChange={handleGatherString}
          value={commentString}
        />
        <button
          className="send-comment"
          // NAME VALUE SHOULD BE = USER THAT IS CURRENTLY LOGGED IN
          // admin is used temporarily here first
          name="admin"
          onClick={handleNewComment}
        >
          comment
        </button>
      </form>
    </div>
  );
};

export default IndivPost;
