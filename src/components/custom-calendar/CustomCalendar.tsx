import React from "react";
import Events from "./events/Events";
import GridHeader from "./grid-header/GridHeader";
import Grid from "./Grid/Grid";

const CustomCalendar = () => {
  return (
    <div>
        <GridHeader />
      <div style={{ position: "relative", overflow: "auto" }}>
        <Grid start_time={7} end_time={19} />
        <Events />
      </div>
    </div>
  );
};

export default CustomCalendar;
