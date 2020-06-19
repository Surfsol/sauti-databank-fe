import React from "react";
import "./scss/graphButtons.scss";
import graphImage from "../assets/images/linegraph.png";
import mapImage from "../assets/images/map.png";
import barImage from "../assets/images/barchart.png";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const GraphButtons = ({ open, setOpen, filters, queryType }) => {
  const classes = useStyles();

  const lineButton = () => {
    if (open !== "line" && queryType === "sessionsData") {
      return (
        <button className="all-btn" onClick={() => setOpen("line")}>
          <Tooltip
            title="Line Graph"
            arrow
            classes={{ tooltip: classes.customWidth }}
          >
            <img src={graphImage} />
          </Tooltip>
        </button>
      );
    } else {
      return <></>;
    }
  };

  const barButton = () => {
    if (open !== "bar") {
      return (
        <button className="all-btn" onClick={() => setOpen("bar")}>
          <Tooltip
            title="Bar Chart"
            arrow
            classes={{ tooltip: classes.customWidth }}
          >
            <img src={barImage} />
          </Tooltip>
        </button>
      );
    } else {
      return <></>;
    }
  };

  const choroButton = () => {
    if (
      open !== "choropleth" &&
      filters[0]["selectedCategory"] === "Country of Residence"
    ) {
      return (
        <button className="all-btn" onClick={() => setOpen("choropleth")}>
          <Tooltip title="Map" arrow classes={{ tooltip: classes.customWidth }}>
            <img src={mapImage} />
          </Tooltip>
        </button>
      );
    } else if (
      open !== "choropleth" &&
      filters[0]["selectedCategory"] === "Final Destination Country"
    ) {
      return (
        <button className="all-btn" onClick={() => setOpen("choropleth")}>
          <Tooltip title="Map" arrow classes={{ tooltip: classes.customWidth }}>
            <img src={mapImage} />
          </Tooltip>
        </button>
      );
    } else if (
      open !== "choropleth" &&
      filters[0]["selectedCategory"] ===
        "Requested Procedures for Destination (Imports to:)"
    ) {
      return (
        <button className="all-btn" onClick={() => setOpen("choropleth")}>
          <Tooltip title="Map" arrow classes={{ tooltip: classes.customWidth }}>
            <img src={mapImage} />
          </Tooltip>
        </button>
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      <Grid item>{barButton()}</Grid>
      <Grid item>{lineButton()}</Grid>
      <Grid item>{choroButton()}</Grid>
    </>
  );
};
export default GraphButtons;
const useStyles = makeStyles(theme => ({
  customWidth: {
    fontSize: "12px"
  }
}));
