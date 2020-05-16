import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { Component } from "react";
import MapGL from "react-map-gl";
// DeckGL marks area on map where we have searched
import DeckGL, { GeoJsonLayer } from "deck.gl";
//allows to gets someones location.  Maybe used to find market locations
import Geocoder from "react-map-gl-geocoder";

const token = process.env.REACT_APP_MAPBOX;

class SearchableMap extends Component {
  state = {
    viewport: {
      latitude: 0,
      longitude: 0,
      zoom: 1
    },
    searchResultLayer: null
  };

  mapRef = React.createRef();

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  };
  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 3000 };

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };

  handleOnResult = event => {
    this.setState({
      searchResultLayer: new GeoJsonLayer({
        id: "search-result",
        data: event.result.geometry,
        getFillColor: [255, 0, 0, 128],
        getRadius: 1000,
        pointRadiusMinPixels: 10,
        pointRadiusMaxPixels: 10
      })
    });
  };

  render() {
    const { viewport, searchResultLayer } = this.state;
    return (
      <div style={{ height: "100vh" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "25px",
            fontWeight: "bolder"
          }}
        >
          Sauti Markets{" "}
        </h1>
        <MapGL
          ref={this.mapRef}
          {...viewport}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          width="100%"
          height="90%"
          onViewportChange={this.handleViewportChange}
          mapboxApiAccessToken={token}
        >
          <Geocoder
            mapRef={this.mapRef}
            onResult={this.handleOnResult}
            onViewportChange={this.handleGeocoderViewportChange}
            mapboxApiAccessToken={token}
            position="top-center"
          />
        </MapGL>
        <DeckGL {...viewport} layers={[searchResultLayer]} />
      </div>
    );
  }
}

export default SearchableMap;
