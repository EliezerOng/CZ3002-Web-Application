import "./css/Forum.css";
import PostCard from "./PostCard";
import ForumHeader from "./ForumHeader";
import { useEffect, useState } from "react";
import Axios from "axios";
import IndivPost from "./IndivPost";
import { Link } from "react-router-dom";

export default function Forum() {
  const [data, setData] = useState([]);
  const [isSingle, setIsSingle] = useState(false);
  const [singleData, setSingleData] = useState([]);

  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/forum/posts")
      .then((res) => {
        console.log("Getting from ::::", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function select(id) {
    setData((prevData) => {
      const newData = [];
      for (let i = 0; i < prevData.length; i++) {
        const card = prevData[i];
        if (card.pid == id) {
          newData.push(card);
          setSingleData(newData);
          setIsSingle(true);
        }
      }
      return prevData;
    });
  }

  const oneD = singleData.map((singleData) => {
    return { ...singleData };
  });

  const cards = data.map((data) => {
    return <PostCard key={data.pid} id={data.pid} {...data} select={select} />;
  });

  if (isSingle) {
    return (
      <div className="forum-section">
        <ForumHeader />
        <IndivPost id="5" />
      </div>
    );
  } else {
    return (
      <div className="forum-section">
        <ForumHeader />
        <section className="card">{cards}</section>
      </div>
    );
  }
}

// return (
//   <div className="forum-section">
//     <ForumHeader />
//     {<section className="card">{cards}</section>}
//     {/* {isSingle && <Link to="/IndivPost" />} */}

//     {/* {isSingle && history.push(`/IndivPost/:postID/ ${currentCard.pid}`)} */}
//     {isSingle && history.push({ pathname: "/IndivPost/5", state: { pid: 5 } })}
//   </div>
// );
