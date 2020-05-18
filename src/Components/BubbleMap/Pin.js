import React, { useState } from "react";
import { Marker, Popup } from "react-map-gl";
import circle from "./images/circle.svg";

const Pin = ({ markets }) => {
  console.log(markets.features);
  const [selectedMkt, setSelectedMkt] = useState({});
  console.log(selectedMkt);

  const handleClick = e => {
    setSelectedMkt(e);
  };

  return (
    <>
      {markets.map(e => {
        let coordinates = e.geometry.coordinates;
        console.log(coordinates[0]);
        console.log(coordinates[1]);
        return (
          <Marker key={e} latitude={coordinates[0]} longitude={coordinates[1]}>
            <img
              onClick={() => handleClick(e)}
              className="circle"
              src={circle}
              alt="location"
            />
            {selectedMkt !== "" ? (
              <Popup
                className="popupCard"
                latitude={e.geometry.coordinates[0]}
                longitude={e.geometry.coordinates[1]}
                onClose={() => {
                  handleClick("");
                }}
                //closeOnClick={false}
              >
                <h1>{e.properties.description}</h1>
                {/* <PopupInfo
               description={e.properties.description}
              /> */}
              </Popup>
            ) : null}
          </Marker>
        );
      })}
    </>
  );
};

export default Pin;
