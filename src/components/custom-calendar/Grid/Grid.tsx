import React from "react";

const Grid = ({ start_time, end_time, weekend = false }: any) => {
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
      <div style={{display: 'flex'}}>
        <div>
          {rows.map((item, index) => {
            return (
              <div key={index} className="grid-first-row" style={{height:index===0?'fit-content':''}}>
                <label>{item}:00</label>
              </div>
            );
          })}
        </div>
        <div className="grid-second-container">
          {rows.map((row, index) => {
            return (
              <div className={index!==0?'grid-rows':'grid-rows grid-first-row'}>
                {days.map((day) => {
                    return <div className={index!==0?"grid-other-columns":"grid-other-columns grid-first-columns"}><p>{index===0 && day}</p></div>;
                })}
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Grid;
