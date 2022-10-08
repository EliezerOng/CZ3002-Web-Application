import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Search.css";

export default function Search() {
  return (
    <div className="search">
      <div className="main-container">
        <div className="container-1">
          <input type="text" placeholder="search post..."></input>
        </div>
      </div>
    </div>
  );
}
