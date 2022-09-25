import React from "react";
import { HiPencilAlt } from "react-icons/hi";
import { HiTrash } from "react-icons/hi";


const CustomCard = ({ teacher }: any) => {

  const handleDeleteTeacher = (id: number) => {
    console.log(id, "EVENT")
  };

  const handleEditTeacher = (id: number) => {
    console.log(id, "RADI")
  }

  return (
    <div className="custom-card-container">
      <div className="custom-card-numbers">{teacher.id}.</div>
      <div
        className="custom-card-teacher-informations"
        style={{ borderColor: teacher.boja }}
      >
        <div className="teacher-info">
          <label>Ime:</label>
          <h5>{teacher.ime}</h5>
        </div>
        <div className="teacher-info">
          <label>Prezime:</label>
          <h5>{teacher.prezime}</h5>
        </div>
        <div className="teacher-info">
          <label>Srednje ime:</label>
          <h5>{teacher.srednje_ime ? teacher.srednje_ime : "-"}</h5>
        </div>
        <div className="teacher-info">
          <label>Skracenica:</label>
          <h5>{teacher.skracenica ? teacher.skracenica : "-"}</h5>
        </div>
      </div>
      <div className="custom-card-subjects">
        <div className="custom-card-subjects-container">
          <label>Predmeti: </label>
          <div className="number-of-subjects">
            {teacher.predmeti ? teacher.predmeti.length : "0"}
          </div>
        </div>
        <h5>{teacher.predmeti ? teacher.predmeti : "-"}</h5>
      </div>
      <div className="custom-card-terms">
        <div className="custom-card-terms-container">
          <label>Nedostupnih termina: </label>
          <div className="custom-card-terms-negative-number">
            {teacher.nedostupan_termin.length}
          </div>
        </div>
        <div className="custom-card-terms-container">
          <label>Dostupnih termina: </label>
          <div className="custom-card-terms-positive-number">
            {teacher.dostupan_termin.length}
          </div>
        </div>
      </div>
      <div className="custom-card-edit-teacher">
        <button className="edit-button" onClick={() => {handleEditTeacher(teacher.id)}}>
          <i>{<HiPencilAlt />}</i>
        </button>
      </div>
      <div className="custom-card-delete">
        <button className="delete-button" onClick={() => handleDeleteTeacher(teacher.id)}>
          <i>{<HiTrash />}</i>
        </button>
      </div>
    </div>
  );
};

export default CustomCard;
