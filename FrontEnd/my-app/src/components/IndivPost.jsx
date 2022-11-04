import React from "react";
import "./css/IndivPost.css";
import { useEffect, useState } from "react";
import PostDetail from "./PostDetail";
import CommentsCard from "./CommentsCard";
import tempDP from "../images/A.png";
import Axios from "axios";

const IndivPost = (props) => {
  const [comment, setComment] = useState(props.comments);
  const [commentString, setCommentString] = useState("");
  const [data, setData] = useState([]);
  const url = `http://127.0.0.1:8000/api/forum/posts/${props.pid}/comments`;

  useEffect(() => {
    Axios.get(url)
      .then((res) => {
        console.log("Getting from ::::", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
  }

  function updateDatabase() {
    const postUrl = "http://127.0.0.1:8000/api/forum/posts/1/comments";
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

    Axios.post(postUrl, text, headers)
      .then((res) => {
        console.log("done posting");
        Axios.get(url)
          .then((res) => {
            console.log("Getting from ::::", res.data);
            setData(res.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  console.log("@@@@@@@@@@@@@@");
  console.log(comment);

  // let kArr = Object.keys(comment);
  // let vArr = Object.values(comment);
  // let commentsCardArr = [];

  // for (let i = 0; i < kArr.length; i++) {
  //   commentsCardArr.push(
  //     <CommentsCard
  //       key={props.pid}
  //       pid={props.pid}
  //       name={kArr[i]}
  //       comments={vArr[i]}
  //     />
  //   );
  // }

  const cCards = data.map((data) => {
    return <CommentsCard key={data.cid} {...data} />;
  });

  return (
    <div>
      <PostDetail key={props.pid} id={props.pid} {...props} />

      <div>{cCards}</div>

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
