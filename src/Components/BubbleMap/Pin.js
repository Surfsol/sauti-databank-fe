import React, { useState } from "react";
import { Marker, Popup } from "react-map-gl";
import circle from "./images/circle.svg";
import PopupInfo from "./PopupInfo";

const Pin = ({ markets }) => {
  console.log(markets.features);
  const [selectedMkt, setSelectedMkt] = useState({});
  console.log(selectedMkt);
  console.log(Object.keys(selectedMkt));

  const handleClick = e => {
    setSelectedMkt(e);
  };

  function popUpReturn() {
    if (Object.keys(selectedMkt).length > 0) {
      console.log("running popUpReturn");
      return (
        <Popup
          latitude={selectedMkt.geometry.coordinates[0]}
          longitude={selectedMkt.geometry.coordinates[1]}
          onClose={() => {
            handleClick({});
          }}
          //closeOnClick={false}
        >
          <PopupInfo description={selectedMkt.properties.description} />
        </Popup>
      );
    } else {
      console.log("market not selected");
    }
  }

  return (
    <>
      {markets.map(e => {
        let coordinates = e.geometry.coordinates;
        console.log(coordinates[0]);
        console.log(coordinates[1]);
        return (
          <>
            <Marker
              key={e}
              latitude={coordinates[0]}
              longitude={coordinates[1]}
            >
              <img
                onClick={() => handleClick(e)}
                className="circle"
                src={circle}
                alt="location"
              />
              {/* {selectedMkt !== {} ? (
                console.log(`selectedMkt`, e)
              <Popup
                className="popupCard"
                latitude={e.geometry.coordinates[0]}
                longitude={e.geometry.coordinates[1]}
                onClose={() => {
                  handleClick({});
                }}
                //closeOnClick={false}
              >
                
                <PopupInfo
               description={e.properties.description}
              />
              </Popup>
            ) : null} */}
            </Marker>
            {popUpReturn()}
          </>
        );
      })}
    </>
  );
};

export default Pin;
