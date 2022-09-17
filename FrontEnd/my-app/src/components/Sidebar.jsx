import { SidebarData } from "./SidebarData";
import homelogo from "../images/house-solid.png";

export default function Sidebar() {
  return (
    <div className="side-bar">
      <ul className="side-bar-list">
        <li className="row">
          <div>{homelogo}</div>
        </li>
      </ul>
    </div>
  );
}
