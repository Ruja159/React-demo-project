import { Button, Checkbox } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { getPredmeti } from "../../services/subject-service/SubjectService";
import CustomInput from "../custom-input/CustomInput";

import { BiSave } from "react-icons/bi";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

export interface Predmeti {
  id: number;
  predmet: string;
  skracenica: string;
  isChecked: boolean;
}

function CustomDropdown({ setPredmeti }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [listaPredmeta, setListaPredmeta] = useState<Predmeti[]>([]);

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

  useEffect(() => {
    getPredmeti().then((result: Predmeti[]) => {
      result.forEach((i) => {
        i.isChecked = false;
      });
      setListaPredmeta(result);
    });
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newList = [...listaPredmeta];

    if (index === -1) {
      newList.forEach((i) => {
        i.isChecked = event.target.checked;
      });
    } else {
      newList[index].isChecked = event.target.checked;
    }
    setListaPredmeta(newList);
  };

  return (
    <div style={{ position: "relative" }}>
      <Button
        variant="outlined"
        startIcon={<AiOutlinePlus />}
        size="small"
        className="button"
        onClick={() => {
          handleClick();
        }}
      >
        Dodijeli predmet
      </Button>
      <div
        className="subject-container"
        ref={menuRef}
        style={{ display: !isOpen ? "none" : "" }}
      >
        <div style={{ overflowY: "auto", height: "86%" }}>
          <div className="subject-container-search">
            <CustomInput placeholder="Search" />
            <div className="checkbox-subject">
              <Checkbox onChange={(e) => handleChange(-1, e)} name="all" />
              <span>SVI PREDMETI</span>
            </div>
          </div>
          <div className="checkbox-subject-group">
            {listaPredmeta.map((predmet, index) => {
              return (
                <div className="checkbox-subject" key={index}>
                  <Checkbox
                    onChange={(e) => handleChange(index, e)}
                    name={predmet.predmet}
                    checked={predmet.isChecked}
                  />
                  <span>{predmet.predmet}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="subject-button-group">
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
            onClick={() => {
              setPredmeti(listaPredmeta);
              setIsOpen(false);
            }}
          >
            Sacuvaj
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CustomDropdown;
