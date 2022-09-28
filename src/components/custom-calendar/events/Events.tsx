import React, { useContext } from "react";
import { Context } from "../../../pages/teacher-detail/TeacherDetails";
import { EventInterface } from "../../check-term/CheckTerm";
import { AiFillMinusCircle } from "react-icons/ai";

const Events = ({ weekend = false }) => {
  const width = `calc((100% - 50px)/${weekend ? 7 : 5})`;

  const { events } = useContext(Context);

  return (
    <>
      {events.map((event: EventInterface, i) => {
        let startTime = event.startTime;
        let endTime = event.endTime;
        let text = event.text;
        let backgroundColor = !event.unavailable
          ? "rgb(238,242,255,0.5)"
          : "rgb(251, 233, 240, 0.5)";

        let leftBorderColor = !event.unavailable ? "#80abff" : "#fe8395";

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
              backgroundColor: backgroundColor,
              borderLeft: `4px solid ${leftBorderColor}`,
              width,
              height: `${(timeEndNumeric - timeStartNumeric) * 50}px`,
            }}
            key={i}
          >
            <div className="container-all">
              <div
                className="event-container"
                style={{ color: leftBorderColor }}
              >
                <AiFillMinusCircle />
                <div>
                  {startTime}h - {endTime}h
                </div>
              </div>
              <div style={{ fontSize: "12px" }}>{text}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Events;
