import React from "react";
import { useState, useEffect } from "react";

import CounsellorList from "./CounsellorList";
import Maps from "./Map";
import "./css/CounsellorPage.css";
import Axios from "axios";
// import { useNavigate } from "react-router-dom";

function App() {
  // const navigate = useNavigate();

  // const [searchLocation, setSearchLocation] = useState([]);
  const [searchLocation, setSearchLocation] = useState([]);
  const [locations, setLocations] = useState([]);

  // useEffect(() => {
  //   setSearchLocation(location);
  // }, []);

  // to update search location
  function handleLocation(event) {
    const { name, value } = event.target;
    // var coords = geocode(name);
    setSearchLocation((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  // to find coords & pass location into google maps
  function handleSearch(event) {
    // update coordinates
    geocode(searchLocation.address);
    // pass into google maps
  }
  console.log(searchLocation);

  function geocode(addr) {
    Axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
      params: {
        address: addr,
        // API KEY !!! TO BE COMMENTED OUT
        key: "AIzaSyAgUyxkZaBToNh8lpmhkrrxM-J3K5eNe-g",
      },
    })
      .then(function (response) {
        setSearchLocation({
          address: addr,
          lat: response.data.results[0].geometry.location.lat,
          lng: response.data.results[0].geometry.location.lng,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function returnList(locations) {
    console.log("here");
    setLocations(locations);
  }
  console.log(locations);
  return (
    <div className="cApp">
      <div className="right">
        <div className="header">
          <input
            type="text"
            placeholder="search location"
            className="searchbar"
            name="address"
            value={searchLocation.place}
            onChange={handleLocation}
          ></input>
          <button className="searchbtn" onClick={handleSearch}></button>
        </div>
        {/* <h1 className="cn-text">counsellors nearby</h1> */}
        <div className="display">
          <CounsellorList returnList={returnList} />
          <Maps location={locations} zoomLevel={11} />
        </div>
      </div>
    </div>
  );
}

export default App;
