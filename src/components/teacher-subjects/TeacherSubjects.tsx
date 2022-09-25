import React, {useState} from "react";
import CustomButton from "../custom-button/CustomButton";
import TeacherSubjectDialog from "./teacher-subject-dialog/TeacherSubjectDialog";

function TeacherSubjects() {

    const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const handleOpenDialog = () => {

}


  return (
    <div>
      <h4>Predmeti</h4>
      <div>
        <div>Nastavniku nije dodijeljen nijedan predmet.</div>
        <div>
        <CustomButton  onClick={handleClickOpen}>
        Open simple dialog
      </CustomButton>
      <TeacherSubjectDialog 
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
        </div>
      </div>
    </div>
  );
}

export default TeacherSubjects;
