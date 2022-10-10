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
        bootstrapURLKeys={{ key: "AIzaSyC3uv7NhGvdRlcmbc-fGt9TLuZ1KnOWeMI" }}
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
