import { Button, Checkbox } from "@mui/material";
import React, { useState, useEffect, useRef, useContext } from "react";
import { getPredmeti } from "../../services/subject-service/SubjectService";
import CustomInput from "../custom-input/CustomInput";

import { BiSave } from "react-icons/bi";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { Context } from "../../pages/teacher-detail/TeacherDetails";

export interface Predmeti {
  id: number;
  predmet: string;
  skracenica: string;
  isChecked: boolean;
}

function CustomDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { predmeti, setPredmeti } = useContext(Context);
  let [allChecked, setAllChecked] = useState(false);
  const [listaPredmeta, setListaPredmeta] = useState<Predmeti[]>(predmeti);

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
    if (predmeti.length == 0) {
      getPredmeti().then((result: Predmeti[]) => {
        result.forEach((i) => {
          i.isChecked = false;
        });
        setListaPredmeta(result);
      });
    } else {
      allChecked = predmeti.some((predmet) => {
        return predmet.isChecked == false;
      });
      allChecked ? setAllChecked(false) : setAllChecked(true);
      setListaPredmeta(predmeti);
    }
  }, [predmeti]);

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
      setAllChecked(!allChecked);
    } else {
      newList[index].isChecked = event.target.checked;
      setAllChecked(false);
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
              <Checkbox
                onChange={(e) => handleChange(-1, e)}
                name="all"
                checked={allChecked}
              />
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
