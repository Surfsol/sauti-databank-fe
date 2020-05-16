import React, { useState, useEffect } from "react";
//import { CLEAR_SELECTED } from 'actions/selectedSensorsActions'
import ReactMapGl, { Popup } from "react-map-gl";
import { NavigationControl } from "react-map-gl";
import "./BubbleStyle.scss";
// import PopupInfo from '../PopupInfo/PopupInfo.component'
// import Pin from '../Pin/Pin.component'

export default function Bubble(props) {
  const [viewport, setViewport] = useState({
    latitude: 13.004758,
    longitude: 105.784788,
    width: "100%",
    height: "100vh",
    zoom: 2
  });
  //select market
  // const currentlySelected = useSelector(state => state.selectedSensors.currentlySelected)
  setViewport({
    latitude: 13.5651,
    longitude: 104.7538,
    width: "100%",
    height: "100vh",
    zoom: 8,
    scrollZoom: false,
    boxZoom: false,
    doubleClickZoom: false
  });
  console.log(`viewport`, viewport);
  // useEffect(() => {
  //   const listener = e => {
  //     if (e.key === 'Escape') {
  //     //  dispatch({type: CLEAR_SELECTED})
  //     }
  //   }
  //   window.addEventListener('keydown', listener)

  //   return () => {
  //     window.removeEventListener('keydown', listener)
  //   }
  // }, [props])

  return (
    <>
      <p> Bubble Map</p>
      <div className="mapsContainer">
        {/* mapbox://styles/mapbox/streets-v11 */}
        <ReactMapGl
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={viewport => {
            setViewport(viewport);
          }}
          {...viewport}
        >
          {/* for each sensor create a pin to display on map */}
          {/* <Pin
            currentlySelected={Object.keys(currentlySelected).length}
            sensors={props.sensors}
            funcToggle={props.funcToggle}
            nonFuncToggle={props.nonFuncToggle}
            unknownToggle={props.unknownToggle}
          /> */}

          {/* {Object.keys(currentlySelected).length > 0 ? (
            <Popup
              className='popupCard'
              latitude={currentlySelected.latitude}
              longitude={currentlySelected.longitude}
              onClose={() => {
                dispatch({type: CLEAR_SELECTED})
              }}
              closeOnClick={false}
            >
              <PopupInfo
                sensors={props.sensors}
                selectedPump={currentlySelected}
                history={props.history}
              />
            </Popup>
          ) : null} */}

          <div className="navStyle">
            <NavigationControl />
          </div>
        </ReactMapGl>
      </div>
      <p>Bubble Bottom</p>
    </>
  );
}
