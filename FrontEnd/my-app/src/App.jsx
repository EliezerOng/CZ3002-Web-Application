import "./App.css";
import SideBar from "./components/SideBar";
import PostCard from "./components/PostCard";
import PostCardData from "./PostCardData";
import SideBarData from "./SideBarData";
import Search from "./components/Search";

import logo from "./logo.svg";
import Login from "./Login";
import Register from "./Register";
// import { Routes, Route } from "react-router-dom";

export default function App() {
  const sideBarData = SideBarData.map((item) => {
    return <SideBar key={item.id} {...item} />;
  });

  const cards = PostCardData.map((item) => {
    return <PostCard key={item.id} {...item} />;
  });

  return (
    // <main className="App">
    //   <Register />
    // </main>

    <div className="main-app-container">
      {/* <Search /> */}
      <sidebar>{sideBarData}</sidebar>
      <section className="forum-section">{cards}</section>
    </div>
  );
}
