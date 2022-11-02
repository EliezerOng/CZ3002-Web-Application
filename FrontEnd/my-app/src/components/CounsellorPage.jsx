import React from "react";
import { useState, useEffect } from "react";

import CounsellorList from "./CounsellorList";
import Maps from "./Map";
import "./css/CounsellorPage.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

function App() {
  // const navigate = useNavigate();

  const location = {
    address: "313@somerset",
    lat: 1.3010128,
    lng: 103.838539945158,
  };

  // const [searchLocation, setSearchLocation] = useState([]);
  const [searchLocation, setSearchLocation] = useState([]);

  useEffect(() => {
    setSearchLocation(location);
  }, []);

  // function geocode(addr) {
  //   axios
  //     .get("https://maps.googleapis.com/maps/api/geocode/json", {
  //       params: {
  //         address: addr,
  //         key: "AIzaSyC3uv7NhGvdRlcmbc-fGt9TLuZ1KnOWeMI",
  //       },
  //     })
  //     .then(function (response) {
  //       setSearchLocation({
  //         address: addr,
  //         lat: response.data.results[0].geometry.location.lat,
  //         lng: response.data.results[0].geometry.location.lng,
  //       });

  //       // console.log(response.data.results[0].geometry.location);
  //       // console.log(response.data.results[0].geometry.location.lat);
  //       // console.log(response.data.results[0].geometry.location.lng);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

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
    axios
      .get("https://maps.googleapis.com/maps/api/geocode/json", {
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

        // console.log(response.data.results[0].geometry.location);
        // console.log(response.data.results[0].geometry.location.lat);
        // console.log(response.data.results[0].geometry.location.lng);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function test() {
    console.log("in test");
    // axios
    //   .get("http://127.0.0.1:8000/api/forum/posts?format=json")
    axios({
      method: "GET",
      url: "http://127.0.0.1:8000/api/forum/posts?format=json",
    })
      .then(function (response) {
        console.log(response);

        // console.log(response.data.results[0].geometry.location);
        // console.log(response.data.results[0].geometry.location.lat);
        // console.log(response.data.results[0].geometry.location.lng);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("out test");
  }
  test();
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
          <CounsellorList />
          <Maps location={searchLocation} zoomLevel={14} />
        </div>
      </div>
    </div>
  );
}

export default App;
