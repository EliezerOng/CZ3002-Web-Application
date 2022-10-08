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

export default function App() {
  const sideBarData = SideBarData.map((item) => {
    return <SideBar key={item.id} {...item} />;
  });

  const cards = PostCardData.map((item) => {
    return <PostCard key={item.id} {...item} />;
  });

  return (
    <Router>
      <main className="App">
        <div className="left-image">
          <img src={mindfullLogo} className="mindfull-logo" />
        </div>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </main>
    </Router>

    // <div className="main-app-container">
    //   {/* <Search /> */}
    //   <sidebar>{sideBarData}</sidebar>
    //   <section className="forum-section">{cards}</section>
    // </div>
  );
}
