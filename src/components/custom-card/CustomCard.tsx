import { HiPencilAlt } from "react-icons/hi";
import { HiTrash } from "react-icons/hi";
import { deleteTeacher } from "../../services/card-service/CardService";
import { useNavigate } from "react-router-dom";

const CustomCard = ({ teacher, index, fetchTeachers }: any) => {
  const handleDeleteTeacher = (id: number) => {
    deleteTeacher(id).then(() => {
      fetchTeachers();
    });
  };

  const navigate = useNavigate();

  const handleEditTeacher = (id: number) => {
    navigate("/teacher-detail", { state: { id: id } });
  };
  let brojNedostupnihTermina: number = 0;
  let brojDostupnihTermina: number = 0;

  if (teacher.events) {
    teacher.events.forEach((e: any) => {
      if (e.unavailable) {
        brojNedostupnihTermina += 1;
      } else {
        brojDostupnihTermina += 1;
      }
    });
  }

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
          {teacher.predmeti ? (
            teacher.predmeti.map((i: any, index: number) => {
              if (index < 4 && i.isChecked) {
                return (
                  <h5
                    className="subject-names"
                    key={index}
                  >{`${i.skracenica},`}</h5>
                );
              }
              if (index == 4 && i.isChecked) {
                return (
                  <h5 className="subject-names" key={index}>
                    {i.skracenica}
                  </h5>
                );
              }
              if (index == 5 && i.isChecked) {
                return (
                  <span className="subject-span">
                    +{teacher.predmeti.length - 5}
                  </span>
                );
              }
            })
          ) : (
            <h5>-</h5>
          )}
        </div>
      </div>
      <div className="custom-card-terms">
        <div className="custom-card-terms-container">
          <label>Nedostupnih termina: </label>
          <div className="custom-card-terms-negative-number">
            <div className="card-numbers">{brojNedostupnihTermina}</div>
          </div>
        </div>
        <div className="custom-card-terms-container">
          <label>Dostupnih termina: </label>
          <div className="custom-card-terms-positive-number">
            <div className="card-numbers">{brojDostupnihTermina}</div>
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
