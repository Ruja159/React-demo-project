import React, { createContext,Dispatch,SetStateAction,useState } from "react";
import CustomCalendar from "../../components/custom-calendar/CustomCalendar";
import { Predmeti } from "../../components/custom-dropdown/CustomDropdown";
import TeacherForm from "../../components/teacher-form/TeacherForm";
import TeacherSubjects from "../../components/teacher-subjects/TeacherSubjects";

interface TeacherContextInterface {
  ime: string,
  setIme: Dispatch<SetStateAction<string>>,
  prezime: string,
  setPrezime: Dispatch<SetStateAction<string>>
  srednjeIme: string,
  setSrednjeIme: Dispatch<SetStateAction<string>>
  skracenica: string,
  setSkracenica: Dispatch<SetStateAction<string>>
  boja: string,
  setBoja: Dispatch<SetStateAction<string>>
  predmeti: Predmeti[],
  setPredmeti: Dispatch<SetStateAction<Predmeti[]>>
}

export const Context = createContext< TeacherContextInterface>({} as TeacherContextInterface);

const TeacherDetail: React.FC = () => {

  const [ime, setIme] = useState('')
  const [prezime, setPrezime] = useState('')
  const [srednjeIme, setSrednjeIme] = useState('')
  const [skracenica, setSkracenica] = useState('')
  const [boja, setBoja] = useState('#d272ff')
  const [predmeti, setPredmeti] = useState<Predmeti[]>([]);

  return (
    <Context.Provider value={{ime, setIme,prezime, setPrezime, srednjeIme, setSrednjeIme, skracenica, setSkracenica, boja, setBoja,predmeti, setPredmeti}}>
      <div className="teacher-detail-container">
        <TeacherForm />
        <TeacherSubjects />
        {/* <CustomCalendar />  */}
      </div>
    </Context.Provider>
  );
};

export default TeacherDetail;
