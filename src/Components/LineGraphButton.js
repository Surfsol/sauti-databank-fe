import React from "react";
import LineGraph from "./LineGraph/LineGraph";
import GraphParse from "./GraphParse";
import ChoroplethParent from "../Components/ChoroplethMap/ChoroplethParent";
import Bubble from "../Components/BubbleMap/Bubble";
import Map from "../Components/BubbleMap/Map";
import Search from "../Components/BubbleMap/Search";
import "./scss/lineGraphButton.scss";

const LineGraphButton = props => {
  const {
    data,
    filters,
    open,
    setOpen,
    queryType,
    filterBoxStartDate,
    filterBoxEndDate,
    makeFilterList
  } = props;

  const renderLine = () => {
    if (open === "line") {
      return (
        <>
          <div className="graph-titles-container">
            <div className="graph-title-diplay">
              <h1 className="graph-title">Data Series</h1>
              <h2 className="graph-title-small">
                {filters[0].selectedCategory}
              </h2>
            </div>
            <div className="graph-title-diplay">
              <h1 className="graph-title">Subsample</h1>
              <h2 className="graph-title-small">
                {filters[1].selectedCategory}
              </h2>
            </div>
            {filters[2].selectedTableColumnName && (
              <div className="graph-title-diplay">
                <h3 className="graph-title">Additional Filter</h3>
                <h3 className="graph-title-small">{makeFilterList()}</h3>
              </div>
            )}
          </div>
          <LineGraph filter0={filters[0]} data={data} />
        </>
      );
    } else {
      return (
        <button className="line-btn" onClick={() => setOpen("line")}>
          Display Line Graph
        </button>
      );
    }
  };

  const renderChoroplethMap = () => {
    if (open === "choropleth") {
      return (
        <>
          <ChoroplethParent
            gqlData={data}
            filters={filters}
            width={900}
            height={500}
          />
        </>
      );
    } else {
      return (
        <button className="choro-map" onClick={() => setOpen("choropleth")}>
          Display ChoroplethMap
        </button>
      );
    }
  };

  const renderBubbleMap = () => {
    if (open === "bubble") {
      return (
        <>
          <Map />
        </>
      );
    } else {
      return (
        <button className="bubble-map" onClick={() => setOpen("bubble")}>
          Display Bubble map
        </button>
      );
    }
  };

  const renderBar = () => {
    if (open === "bar") {
      return (
        <GraphParse
          data={data}
          filters={filters}
          open={open}
          queryType={queryType}
          filterBoxStartDate={filterBoxStartDate}
          filterBoxEndDate={filterBoxEndDate}
        />
      );
    } else if (open !== "bar") {
      return (
        <button className="bar-btn" onClick={() => setOpen("bar")}>
          Display Bar Chart
        </button>
      );
    }
  };

  if (data && data.sessionsData) {
    return (
      <>
        {renderBar()}
        {renderLine()}
        {renderChoroplethMap()}
        {renderBubbleMap()}
      </>
    );
  } else {
    return (
      <>
        <p>Line Graph not Available with 'Key Demographics' Data Series</p>
        {renderBar()}
        {renderChoroplethMap()}
        {renderBubbleMap()}
      </>
    );
  }
};

export default LineGraphButton;
