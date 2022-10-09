import "./App.css";
import SideBar from "./components/SideBar";
import PostCard from "./components/PostCard";
import PostCardData from "./PostCardData";
import SideBarData from "./SideBarData";
import Search from "./components/Search";

import mindfullLogo from "./images/mindfull-logo.png";
import Login from "./components/Login";
import Register from "./components/Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";

export default function App() {
  const sideBarData = SideBarData.map((item) => {
    return <SideBar key={item.id} {...item} />;
  });

  // const cards = PostCardData.map((item) => {
  //   return <PostCard key={item.id} {...item} />;
  // });

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
    // <Router>
    //   <main className="App">
    //     <div className="left-image">
    //       <img src={mindfullLogo} className="mindfull-logo" />
    //     </div>
    //     <Routes>
    //       <Route path="/" element={<Login />}></Route>
    //       <Route path="/register" element={<Register />}></Route>
    //     </Routes>
    //   </main>
    // </Router>

    <div>
      {/* <Search /> */}
      <sidebar>{sideBarData}</sidebar>
      {/* <section className="forum-section">{cards}</section> */}
    </div>
  );
}
