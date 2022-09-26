
import React, { useState,useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { Context } from "../../pages/teacher-detail/TeacherDetails";
import CustomButton from "../custom-button/CustomButton";
import CustomDropdown, { Predmeti } from "../custom-dropdown/CustomDropdown";

function TeacherSubjects() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const {predmeti,setPredmeti}= useContext(Context)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const handleOpenDialog = () => {};

  const handleDelete=(index:number)=>{
    if(index===-1){
      setPredmeti([])
    }else{
      let arr= [...predmeti];
      arr[index].isChecked=false;
      setPredmeti(arr)
    }
  }

  return (
    <div className="teacher-subject-container">
      <div>
        <label style={{ padding: "12px" }}>Predmeti</label>
      </div>
      <div className="teacher-subject-flex-items">
        <div className="subject-names">
          {predmeti.length ? (
            predmeti.map((predmet:Predmeti, index) => {
              return (
                predmet.isChecked && (
                  <div className="only-subject" key={index}>
                    <div>{predmet.predmet}</div>
                    <button className="delete-button" onClick={()=>{handleDelete(index)}}>
                      <AiFillDelete  />
                    </button>
                  </div>
                )
              );
            })
          ) : (
            <label className="subject-names-label">
              Nastavniku nije dodijeljen nijedan predmet.
            </label>
          )}
        </div>
        <div style={{display: 'flex', gap: '12px'}}>
          <div>
            {predmeti.length ? (
              <button className="delete-all-button" onClick={()=>{handleDelete(-1)}}>
                {" "}
                <AiFillDelete  />
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
