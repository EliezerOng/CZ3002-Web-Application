import Nav from "./components/Nav";
import NavData from "./NavData";
import "./App.css";
import Sidebar from "./components/Sidebar";

export default function App() {
  const nData = {
    id: 1,
    userName: "AnimatedFred",
    displayPictureUrl: "https://i.imgflip.com/1g8my4.jpg",
    email: "animated@demo.com",
  };

  return (
    <div className="side-bar">
      <Nav {...nData} />
    </div>
  );
}
