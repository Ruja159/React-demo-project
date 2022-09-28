import React, { useContext } from "react";
import { Context } from "../../../pages/teacher-detail/TeacherDetails";
import { EventInterface } from "../../check-term/CheckTerm";

const Events = ({ weekend = false }) => {
  const width = `calc((100% - 50px)/${weekend ? 7 : 5})`;

  const { events } = useContext(Context);

  return (
    <>
      {events.map((event: EventInterface, i) => {
        const timeStartNumeric =
          parseInt(event.startTime.slice(0, 2)) +
          parseFloat(event.startTime.slice(3, 5)) / 60 -
          7;

        const timeEndNumeric =
          parseInt(event.endTime.slice(0, 2)) +
          parseFloat(event.endTime.slice(3, 5)) / 60 -
          7;

        return (
          <div
            style={{
              position: "absolute",
              top: `calc(16px + ${50 * timeStartNumeric}px)`,
              left: `calc(calc(((100% - 50px) / ${weekend ? 7 : 5}) * ${
                event.startDay
              }) + 50px)`,
              // left: `calc(((100% + 50px) /5) * ${event.startDay})`,
              backgroundColor: "red",
              width,
              height: `${(timeEndNumeric - timeStartNumeric) * 50}px`,
            }}
            key={i}
          >
            Events
          </div>
        );
      })}
    </>
  );
};

export default Events;
