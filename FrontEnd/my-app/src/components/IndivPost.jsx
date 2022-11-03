import React from "react";
import "./css/IndivPost.css";
import { useState } from "react";
import PostDetail from "./PostDetail";
import CommentsCard from "./CommentsCard";
import tempDP from "../images/A.png";
import Axios from "axios";

const IndivPost = (props) => {
  const [comment, setComment] = useState(props.comments);

  const [newComment, setNewComment] = useState("");

  // function handleNewComment(event) {
  //   const { name, value } = event.target;
  //   comment[name].push(value);
  //   console.log(comment[name]);
  // }

  const [commentString, setCommentString] = useState("");

  function handleGatherString(event) {
    const { value } = event.target;
    setCommentString(value);
  }

  function handleNewComment(event) {
    const { name } = event.target;
    comment[name].push(commentString);
    setCommentString("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("form submitted ");
    console.log(comment["admin"]);
  }

  console.log("@@@@@@@@@@@@@@");
  console.log(comment["admin"]);

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

// return (
//   <div className="whole-page">
//     <h1>{props.id}</h1>
//     <div className="post">
//       <div className="whole-content">
//         <imgx
//           src={mindfullLogo}
//           alr="test-profile-pic"
//           className="profile-pic image"
//         />
//         <div className="post-content-wrap">
//           <h1 className="post-title">
//             If quantum tunneling is real, why i nv see it happen
//           </h1>
//           <div className="timestamp"> 05:02am</div>
//           <div className="details">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
//             magna justo, volutpat, non amet massa viverra euismod id.
//           </div>
//         </div>
//       </div>
//       <div className="counters">
//         <div className="likes">
//           <img
//             src={viewCountIcon}
//             alt="like-count-icon"
//             className="like-icon image"
//           />
//           <div className="like-count">5</div>
//         </div>
//         <div className="comments">
//           <img
//             src={commentCounter}
//             alt="comment-icon"
//             className="comment-icon image"
//           />
//           <div className="comment-count">3</div>
//         </div>
//       </div>

//       {/* create another component?? how to map all comments? */}
//       <div className="comment-section">
//         <img
//           src={mindfullLogo}
//           alr="test-profile-pic"
//           className="profile-pic"
//         />
//         <div className="comment-container">
//           <div className="user-time-container">
//             <div className="username">user1</div>
//             <div className="timestamp">06:04am</div>
//           </div>
//           <div className="comment-content">
//             dkfjherih8 ioffiu iuhfanoifj oaihoaihfwoinsiadn
//           </div>
//         </div>
//       </div>

//       <form className="post-comment">
//         <img
//           src={mindfullLogo}
//           alr="test-profile-pic"
//           className="profile-pic image"
//         />
//         <input
//           id="comment-input"
//           onChange={(e) => setComment(e.target.value)}
//           //to clear input upon submission
//           // value={comment}
//           required
//         />
//         <button className="send-comment">Comment</button>
//       </form>
//     </div>
//   </div>
// );
