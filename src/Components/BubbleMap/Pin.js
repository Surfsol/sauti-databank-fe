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
        let catNum = e.category;
        let category = Object.keys(catNum);
        console.log(coordinates[0]);
        console.log(coordinates[1]);
        return (
          <>
            <Marker
              key={e}
              latitude={coordinates[0]}
              longitude={coordinates[1]}
            >
              {/* <img
                onMouseOver={() => handleClick(e)}
                className="circle"
                src={circle}
                alt="location"
              /> */}

              <svg>
                <circle
                  onMouseOver={() => handleClick(e)}
                  style={{
                    height: "100",
                    width: "100",
                    cx: "4",
                    cy: "4",
                    r: "4",
                    fill: "red",
                    opacity: ".3"
                  }}
                />
              </svg>

              {/* bubble - make a circle, size should be expandable */}
              {/* <div style={{ height: "9rem", width: "9rem" }}> */}
              {/* <circle
                  onMouseOver={() => handleClick(e)}
                  style={{
                    height: "100%",
                    width: "100%",
                    opacity: ".4",
                    //r:100,
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderRadius: 50,
                    backgroundColor: "red",
                    alignItems: "start",
                    justifyContent: "start"
                  }}
                ></circle> */}
              {/* </div> */}
            </Marker>
            {popUpReturn()}
          </>
        );
      })}
    </>
  );
};

export default Pin;
