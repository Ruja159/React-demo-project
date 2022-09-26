import { Button, Checkbox } from "@mui/material";
import React, { useState, useEffect } from "react";
import { getPredmeti } from "../../services/subject-service/SubjectService";
import CustomInput from "../custom-input/CustomInput";

export interface Predmeti {
  id: number;
  predmet: string;
  skracenica: string;
  isChecked: boolean;
}

function CustomDropdown({setPredmeti}: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [listaPredmeta, setListaPredmeta] = useState<Predmeti[]>([]);

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
    console.log(event, "EVEN");
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
      <button
        onClick={() => {
          handleClick();
        }}
      >
        JEBO TE KRU
      </button>
      <div className="subject-container" style={{ display: !isOpen ? "none" : "" }}>
        <div>
          <div className="subject-container-search">
            <CustomInput placeholder="Search" />
            <div className="checkbox-subject">
              <Checkbox onChange={(e) => handleChange(-1, e)} name="all" />
              <span>SVI PREDMETI</span>
            </div>
          </div>
          <div>
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
        <div>
            <button onClick={()=>{setIsOpen(false)}}>ODUSTANI</button>
            <button onClick={()=> {setPredmeti(listaPredmeta)}}>SACUVAJ</button>
          </div>
      </div>
    </div>
  );
}

export default CustomDropdown;
