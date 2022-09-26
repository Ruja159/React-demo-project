import React, { useState } from "react";
import CustomButton from "../custom-button/CustomButton";
import CustomDropdown, { Predmeti } from "../custom-dropdown/CustomDropdown";

function TeacherSubjects() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const [predmeti, setPredmeti] = useState<Predmeti[]>([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const handleOpenDialog = () => {};

  return (
    <div className="teacher-subject-container">
      <div>
        <h4>Predmeti</h4>
      </div>
      <div className="teacher-subject-flex-items">
        {predmeti.length ? (
          predmeti.map((predmet) => {
            return (
              predmet.isChecked && <div>{predmet.predmet}</div>
            )
          })
        ) : (
          <div>Nastavniku nije dodijeljen nijedan predmet.</div>
        )}

        <CustomDropdown setPredmeti={setPredmeti} />
      </div>
    </div>
  );
}

export default TeacherSubjects;
