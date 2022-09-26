import React from "react";
import { HiPencilAlt } from "react-icons/hi";
import { HiTrash } from "react-icons/hi";
import { deleteTeacher } from "../../services/card-service/CardService";

const CustomCard = ({ teacher, index }: any) => {
  const handleDeleteTeacher = (id: number) => {
    deleteTeacher(id).then((result) => {
      console.log(result, "OBRISANI REKORD");
    });
  };

  const handleEditTeacher = (id: number) => {
    console.log(id, "RADI");
  };
  console.log(teacher.predmeti, "UCIELJ");
  return (
    <div className="custom-card-container">
      <div className="custom-card-numbers">{index}.</div>
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
          <h5 style={{ textTransform: "uppercase" }}>
            {teacher.skracenica ? teacher.skracenica : "-"}
          </h5>
        </div>
      </div>
      <div className="custom-card-subjects">
        <div className="custom-card-subjects-container">
          <label>Predmeti: </label>
          <div className="number-of-subjects">
            {teacher.predmeti ? teacher.predmeti.length : "0"}
          </div>
        </div>
        <div className="subject-names-container-baseline">
              {teacher.predmeti ? teacher.predmeti.map((i: any, index: number) => {
                   if(index < 4){
                    return (
                      <h5 className="subject-names">{`${i.ime},`}</h5>
                    )
                   }
                   if(index == 4){
                    return (<h5 className="subject-names">{i.ime}</h5>)
                   }
                   if(index > 4 ){
                    return <span className="subject-span">+{teacher.predmeti.length - 5}</span>
                   }
                
              })  : <h5>-</h5>}
        </div>
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
        <button
          className="edit-button"
          onClick={() => {
            handleEditTeacher(teacher.id);
          }}
        >
          <i>{<HiPencilAlt />}</i>
        </button>
      </div>
      <div className="custom-card-delete">
        <button
          className="delete-button"
          onClick={() => handleDeleteTeacher(teacher.id)}
        >
          <i>{<HiTrash />}</i>
        </button>
      </div>
    </div>
  );
};

export default CustomCard;
