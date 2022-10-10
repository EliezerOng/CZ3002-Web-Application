import "./Forum.css";
import PostCard from "./PostCard";
import ForumHeader from "./ForumHeader";
import { useEffect, useState } from "react";
import Axios from "axios";

export default function App() {
  const [data, setDate] = useState([]);

  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/forum/posts")
      .then((res) => {
        console.log("Getting from ::::", res.data);
        setDate(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const cards = data.map((data) => {
    return <PostCard key={data.pid} {...data} />;
  });

  return (
    <div className="forum-section">
      <ForumHeader />
      <section className="card">{cards}</section>
    </div>
  );
}
