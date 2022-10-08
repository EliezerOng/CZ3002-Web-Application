import "./App.css";
import SideBar from "./components/SideBar";
import PostCard from "./components/PostCard";
import PostCardData from "./PostCardData";

export default function App() {
  const nData = {
    id: 1,
    userName: "AnimatedFred",
    displayPictureUrl: "https://i.imgflip.com/1g8my4.jpg",
    email: "animated@demo.com",
  };

  const cards = PostCardData.map((item) => {
    return <PostCard key={item.id} {...item} />;
  });

  return (
    // <div className="side-bar">
    //   <SideBar {...nData} />
    // </div>
    <div className="forum-section">{cards}</div>
  );
}
