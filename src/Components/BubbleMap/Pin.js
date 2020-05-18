import React from "react";
import { Marker } from "react-map-gl";
import circle from "./images/circle.svg";

const Pin = ({ market }) => {
  return (
    <>
      <Marker key={1} latitude={0.469308} longitude={34.091532}>
        <img
          //onClick={() => handleClick(sensor)}
          className="circle"
          src={circle}
          alt="location"
        />
      </Marker>
    </>
  );
};
export default Pin;
