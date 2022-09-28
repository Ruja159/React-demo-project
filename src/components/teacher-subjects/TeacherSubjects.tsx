import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { Context } from "../../pages/teacher-detail/TeacherDetails";
import CustomDropdown, { Predmeti } from "../custom-dropdown/CustomDropdown";

function TeacherSubjects() {
  const { predmeti, setPredmeti } = useContext(Context);

  const handleDelete = (index: number) => {
    if (index === -1) {
      setPredmeti([]);
    } else {
      let arr = [...predmeti];
      arr.splice(index, 1);
      setPredmeti(arr.length ? arr : []);
    }
  };

  return (
    <div className="teacher-subject-container">
      <div style={{ padding: "8px 0" }}>
        <p>Predmeti</p>
      </div>
      <div className="teacher-subject-flex-items">
        <div className="subject-names">
          {predmeti.length ? (
            predmeti.map((predmet: Predmeti, index) => {
              return (
                predmet.isChecked && (
                  <div className="only-subject" key={index}>
                    <div>{predmet.predmet}</div>
                    <button
                      className="delete-button"
                      onClick={() => {
                        handleDelete(index);
                      }}
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                )
              );
            })
          ) : (
            <p className="subject-names-label">
              Nastavniku nije dodijeljen nijedan predmet.
            </p>
          )}
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <div>
            {predmeti.length ? (
              <button
                className="delete-all-button"
                onClick={() => {
                  handleDelete(-1);
                }}
              >
                {" "}
                <AiFillDelete />
              </button>
            ) : (
              ""
            )}
          </div>
          <CustomDropdown setPredmeti={setPredmeti} />
        </div>
      </div>
    </div>
  );
}

export default TeacherSubjects;
