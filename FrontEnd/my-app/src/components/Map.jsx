import React from "react";
import { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
// import { Icon } from "@iconify/react";
// import locationIcon from "@iconify/icons-mdi/map-marker";

export default function Map({ location, zoomLevel }) {
  // const LocationPin = ({ text }) => (
  //   <div className="pin">
  //     <Icon icon={locationIcon} className="pin-icon" />
  //     <p className="pin-text">{text}</p>
  //   </div>
  // );

  return (
    <div className="map">
      <GoogleMapReact
        // API KEY !!! TO BE COMMENTED OUT
        bootstrapURLKeys={{ key: "AIzaSyAgUyxkZaBToNh8lpmhkrrxM-J3K5eNe-g" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
        options={{
          fullscreenControl: false,
          zoomControl: false,
        }}
      >
        {/* <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        /> */}
      </GoogleMapReact>
    </div>
  );
}
