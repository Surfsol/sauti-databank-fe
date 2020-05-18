import React, { useState } from "react";
import MapGL, { GeolocateControl } from "react-map-gl";
//import config from '../config'

import Pin from "./Pin";
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
    height: 700,
    latitude: -2.5164,
    longitude: 32.9175,
    zoom: 5
  });
  const resetZoom = { latitude: -2.5164, longitude: 32.9175 };
  const marketZoom = { width: "100%", height: 700, zoom: 14 };
  const BusiaUG = { latitude: 0.469308, longitude: 34.091532 };
  const BusiaKen = { latitude: 0.399068, longitude: 37.967861 };
  const Chimbiya = { latitude: -13.45987, longitude: 33.548662 };
  console.log(`viewport`, viewport);
  const _onViewportChange = viewport =>
    setViewPort({ ...viewport, transitionDuration: 500 });

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
        <Pin
        //currentlySelected={Object.keys(currentlySelected).length}
        //   markets={markets}
        />
      </MapGL>
      {/* <button onClick={()=>setViewPort({width: "100%",
    height: 700, latitude:0.469308, longitude:34.091532, zoom: 14})}>Busia, UGA</button> */}
      <button
        onClick={() =>
          setViewPort({
            width: "100%",
            height: 700,
            latitude: -2.5164,
            longitude: 32.9175,
            zoom: 5
          })
        }
      >
        Reset
      </button>
      <button onClick={() => setViewPort({ ...marketZoom, ...BusiaUG })}>
        Busia, UGA
      </button>
      <button onClick={() => setViewPort({ ...marketZoom, ...BusiaKen })}>
        Busia, Ken
      </button>
      <button onClick={() => setViewPort({ ...marketZoom, ...Chimbiya })}>
        Chimbiya, MWI
      </button>
      {/* 10,0.469308,34.091532,Busia,UGA
      11,0.399068,37.967861,Busia,KEN
12,-13.45987,33.548662,Chimbiya,MWI */}
    </div>
  );
};

export default Map;
