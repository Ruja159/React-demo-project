import React from "react";
import CustomCalendar from "../../components/custom-calendar/CustomCalendar";
import TeacherForm from "../../components/teacher-form/TeacherForm";
import TeacherSubjects from "../../components/teacher-subjects/TeacherSubjects";

const TeacherDetail: React.FC = () => {
  return (
    <div className="teacher-detail-container">
    <TeacherForm />
    <TeacherSubjects />
      {/* <CustomCalendar />  */}
    </div>
  );
};

export default TeacherDetail;
