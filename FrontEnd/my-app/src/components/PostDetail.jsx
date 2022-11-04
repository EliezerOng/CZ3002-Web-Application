import "./css/PostDetail.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import viewCountIcon from "../images/view-icon.png";
import likeCountIcon from "../images/like-icon.png";
import commentCounter from "../images/comment-icon.png";
import deleIcon from "../images/delete.png";
import Modal from "./Modal";

export default function PostDetail(props) {
  function delePost() {
    const url = "http://127.0.0.1:8000/api/forum/posts/19";
    Axios.delete(url)
      .then((res) => {
        console.log("done deleting");
      })
      .catch((err) => console.log(err));
    //window.location.reload();
  }

  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="post-detail">
      <div className="container-1">
        <div className="box-1">
          <h1 className="post-title"> {props.title}</h1>
          <h1 className="post-time">
            <span>{props.createdAt.split("T")[1].split(".")[0]}</span>
            <span>{props.createdAt.split("T")[0]}</span>
          </h1>
        </div>
        <img src={props.displayPictureUrl} className="user-dp"></img>
      </div>
      <div className="container-2">
        <h1 className="post-description">{props.content}</h1>
      </div>
      <div className="container-3">
        <div className="box-1">
          <img
            src={likeCountIcon}
            alt="like-count-icon"
            className="like-count-icon"
          />
          <h1 className="like-count-h1">{props.likes}</h1>
        </div>
        <div className="box-2">
          <img
            src={commentCounter}
            alt="comment-counter"
            className="comment-counter-icon"
          />
          <h1 className="comment-counter-h1">{props.commentCount}</h1>
        </div>
        <div className="box-3" onClick={openModal}>
          <img src={deleIcon} alt="deleteIcon" className="delete-icon" />
        </div>
      </div>

      {isOpen && <Modal delePost={delePost} openModal={openModal} />}
    </div>
  );
}
