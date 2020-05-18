import React from "react";
import { Marker } from "react-map-gl";
import circle from "./images/circle.svg";

const Pin = ({ markets }) => {
  console.log(markets.features);

  return (
    <>
      {markets.map(e => {
        let coordinates = e.geometry.coordinates;
        console.log(coordinates[0]);
        console.log(coordinates[1]);
        return (
          <Marker key={e} latitude={coordinates[0]} longitude={coordinates[1]}>
            <img
              //onClick={() => handleClick(sensor)}
              className="circle"
              src={circle}
              alt="location"
            />
          </Marker>
        );
      })}
    </>
  );
};

export default Pin;
