import React, { useState } from "react";
import MapGL, { GeolocateControl } from "react-map-gl";
//import config from '../config'
import "mapbox-gl/dist/mapbox-gl.css";

const TOKEN = process.env.REACT_APP_MAPBOX;

const geolocateStyle = {
  float: "left",
  margin: "50px",
  padding: "10px"
};

const Map = () => {
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: 900,
    latitude: -2.5164,
    longitude: 32.9175,
    zoom: 5
  });
  console.log(`viewport`, viewport);
  const _onViewportChange = viewport =>
    setViewPort({ ...viewport, transitionDuration: 3000 });

  return (
    <div style={{ margin: "0 auto" }}>
      <h1
        style={{ textAlign: "center", fontSize: "25px", fontWeight: "bolder" }}
      >
        Sauti Markets
      </h1>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={_onViewportChange}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </MapGL>
    </div>
  );
};

export default Map;
