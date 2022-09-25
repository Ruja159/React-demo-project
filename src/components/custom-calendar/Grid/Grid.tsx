import React from "react";

const Grid = ({ start_time, end_time, weekend = true }: any) => {
  let rows = [];

  let days = weekend
    ? [
        "Ponedeljak",
        "Utorak",
        "Srijeda",
        "Cetvrtak",
        "Petak",
        "Subota",
        "Nedelja",
      ]
    : ["Ponedeljak", "Utorak", "Srijeda", "Cetvrtak", "Petak"];

  for (let i = start_time; i <= end_time; i++) {
    rows.push(i);
  }

  return (
    <div className="grid-container">
      <div>
        {rows.map((item) => {
          return <div className="grid-first-row">{item}:00</div>;
        })}
      </div>
      <div style={{ width: "100%" }}>
        {rows.map((row) => {
          return (
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "50px",
               
              }}
            >
              {days.map((day) => {
                return <div style={{width: '20%', border: '1px solid black'}}></div>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
