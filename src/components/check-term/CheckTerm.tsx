import { Button, MenuItem, Select } from "@mui/material";
import { useState, useContext, useEffect, useRef } from "react";
import { BiSave } from "react-icons/bi";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { Context } from "../../pages/teacher-detail/TeacherDetails";

export interface EventInterface {
  startDay: number;
  endDay: number;
  startTime: string;
  endTime: string;
  text: string;
  unavailable: boolean;
}

function CheckTerm({ termName, unavailable }: any) {
  const daniUSedmici = [
    "Ponedeljak",
    "Utorak",
    "Srijeda",
    "Cetvrtak",
    "Petak",
    "Subota",
    "Nedelja",
  ];

  const menuRef = useRef<any>();

  useEffect(() => {
    const handler = (event: any) => {
      if (!menuRef?.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const { events, setEvents } = useContext(Context);

  const [isOpen, setIsOpen] = useState(false);

  const [startDay, setStartDay] = useState("Ponedeljak");
  const [endDay, setEndDay] = useState("Ponedeljak");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [text, setText] = useState("");

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (value: string, danOpcija: number) => {
    danOpcija ? setEndDay(value) : setStartDay(value);
  };

  const handleInput = (value: string, danOpcija: number) => {
    danOpcija ? setEndTime(value) : setStartTime(value);
  };

  const handleValidate = (value: string, option: number) => {
    if (!/^([01]\d):?([0-5]\d)$/.test(value)) {
      option ? setEndTime("19:00") : setStartTime("07:00");
    }
  };

  const createEventHandler = () => {
    const arr = [...events];
    const currentEvent: EventInterface = {
      startDay: daniUSedmici.indexOf(startDay),
      endDay: daniUSedmici.indexOf(endDay),
      startTime,
      endTime,
      text,
      unavailable,
    };

    arr.push(currentEvent);

    setEvents(arr);
  };

  return (
    <div style={{ position: "relative" }}>
      <Button
        variant="outlined"
        size="small"
        onClick={() => {
          handleOpen();
        }}
        startIcon={<AiOutlinePlus />}
        className={unavailable ? "add-unavailable-term" : "add-valid-term"}
      >
        {termName}
      </Button>
      <div
        className="term-container"
        style={{ display: !isOpen ? "none" : "" }}
        ref={menuRef}
      >
        <div className="term-container-item">
          <label className="term-input-label">Od: </label>
          <div className="term-input-group">
            <Select
              value={startDay}
              onChange={(e) => {
                handleChange(e.target.value, 0);
              }}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              {daniUSedmici.map((dan) => {
                return (
                  <MenuItem key={dan} value={dan}>
                    {dan}
                  </MenuItem>
                );
              })}
            </Select>
            <input
              placeholder="hh:mm"
              className="term-input-time"
              value={startTime}
              onChange={(e) => {
                handleInput(e.target.value, 0);
              }}
              onBlur={(e) => {
                handleValidate(e.target.value, 0);
              }}
            />
          </div>
        </div>
        <div className="term-container-item">
          <label className="term-input-label">Do: </label>
          <div className="term-input-group">
            <Select
              value={endDay}
              onChange={(e) => {
                handleChange(e.target.value, 1);
              }}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              {daniUSedmici.map((dan) => {
                return (
                  <MenuItem key={dan} value={dan}>
                    {dan}
                  </MenuItem>
                );
              })}
            </Select>
            <input
              placeholder="hh:mm"
              className="term-input-time"
              value={endTime}
              onChange={(e) => {
                handleInput(e.target.value, 1);
              }}
              onBlur={(e) => {
                handleValidate(e.target.value, 1);
              }}
            />
          </div>
        </div>
        <div className="term-container-item">
          <label className="term-input-label">Napomena: </label>
          <textarea
            className="term-text-area"
            placeholder="Text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="term-button-group">
          <Button
            variant="outlined"
            startIcon={<AiOutlineClose />}
            size="small"
            className="exit-button"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Odustani
          </Button>
          <Button
            variant="outlined"
            startIcon={<BiSave />}
            size="small"
            className="save-button"
            onClick={(e) => {
              createEventHandler();
            }}
          >
            Sacuvaj
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CheckTerm;
