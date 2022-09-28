import { Button } from "@mui/material";
import { useState, useContext, useRef, useEffect } from "react";
import { Context } from "../../pages/teacher-detail/TeacherDetails";

import { BiSave } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const CustomPalette = () => {
  const boje = [
    "#d272ff",
    "#e3b4fa",
    "#ae72ff",
    "#6628ba",
    "#ff94e1",
    "#ff5fd2",
    "#b4248b",
    "#66124f",
    "#748de8",
    "#3360ff",
    "#3854b5",
    "#082486",
    "#a3edf2",
    "#30d5df",
    "#75bbc5",
    "#1f8f96",
    "#f5f6ae",
    "#eef078",
    "#ffd12d",
    "#ffa800",
    "#77e19b",
    "#21cf5c",
    "#1ca14a",
    "#007026",
    "#ffa183",
    "#ff5146",
    "#d4190d",
    "#d4190d",
    "#cbcbcb",
    "#989898",
    "#424242",
    "#000000",
  ];

  const [isOpen, setIsOpen] = useState(false);

  const { boja, setBoja } = useContext(Context);
  const [activeColor, setActiveColor] = useState(boja);

  const handleChange = (value: string) => {
    setActiveColor(value);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleExit = () => {
    setActiveColor(boja);
    setIsOpen(false);
  };

  const handleSave = (color: string) => {
    setBoja(color);
    setIsOpen(false);
  };

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

  return (
    <div className="custom-input-container" style={{ position: "relative" }}>
      <p style={{ paddingBottom: "4px" }}>Boja: </p>
      <div className="custom-palette-container">
        <div
          onClick={() => {
            handleClick();
          }}
          style={{ backgroundColor: activeColor }}
          className="color-button"
        ></div>
        <input
          style={{ width: "165px" }}
          value={activeColor}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
      </div>
      {isOpen && (
        <div className="color-palette-dropdown" ref={menuRef}>
          <div className="container-exit">
            <span onClick={() => handleExit()}>X</span>
          </div>
          <div className="grid-colors">
            {boje.map((boja, index) => {
              return (
                <div
                  key={index}
                  style={{ backgroundColor: boja }}
                  className="color-box"
                  onClick={(e) => {
                    setActiveColor(boja);
                  }}
                ></div>
              );
            })}
          </div>
          <div className="term-button-group">
            <Button
              variant="outlined"
              startIcon={<AiOutlineClose />}
              size="small"
              className="exit-button"
              onClick={() => {
                handleExit();
              }}
            >
              Odustani
            </Button>
            <Button
              variant="outlined"
              startIcon={<BiSave />}
              size="small"
              className="save-button"
              onClick={() => {
                handleSave(activeColor);
              }}
            >
              Sacuvaj
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomPalette;
