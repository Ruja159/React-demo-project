import { Button } from "@mui/material";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import CustomCalendar from "../../components/custom-calendar/CustomCalendar";
import { Predmeti } from "../../components/custom-dropdown/CustomDropdown";
import TeacherForm from "../../components/teacher-form/TeacherForm";
import TeacherSubjects from "../../components/teacher-subjects/TeacherSubjects";

import { BiSave } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { EventInterface } from "../../components/check-term/CheckTerm";
import HttpClient from "../../services/common/BaseService";
import { addTeacher } from "../../services/teacher-service/TeacherService";
import { TEACHER_LIST_PATH } from "../../routes/path-constants";
import { useNavigate } from "react-router-dom";

interface TeacherContextInterface {
  ime: string;
  setIme: Dispatch<SetStateAction<string>>;
  prezime: string;
  setPrezime: Dispatch<SetStateAction<string>>;
  srednjeIme: string;
  setSrednjeIme: Dispatch<SetStateAction<string>>;
  skracenica: string;
  setSkracenica: Dispatch<SetStateAction<string>>;
  boja: string;
  setBoja: Dispatch<SetStateAction<string>>;
  predmeti: Predmeti[];
  setPredmeti: Dispatch<SetStateAction<Predmeti[]>>;
  events: any[];
  setEvents: Dispatch<SetStateAction<EventInterface[]>>;
}

export const Context = createContext<TeacherContextInterface>(
  {} as TeacherContextInterface
);

const module = "/nastavnici";

const TeacherDetail: React.FC = () => {
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [srednjeIme, setSrednjeIme] = useState("");
  const [skracenica, setSkracenica] = useState("");
  const [boja, setBoja] = useState("#d272ff");
  const [predmeti, setPredmeti] = useState<Predmeti[]>([]);
  const [events, setEvents] = useState<EventInterface[]>([]);

  const navigate = useNavigate();

  const handleSave = () => {
    const newTeacher = {
      ime,
      prezime,
      srednjeIme,
      skracenica,
      boja,
      predmeti,
      events,
    };
    addTeacher(newTeacher).then(() => {
      navigate(TEACHER_LIST_PATH);
    });
  };

  return (
    <Context.Provider
      value={{
        ime,
        setIme,
        prezime,
        setPrezime,
        srednjeIme,
        setSrednjeIme,
        skracenica,
        setSkracenica,
        boja,
        setBoja,
        predmeti,
        setPredmeti,
        events,
        setEvents,
      }}
    >
      <div className="teacher-detail-container">
        <TeacherForm />
        <TeacherSubjects />
        <CustomCalendar />
        <div className="term-button-group" style={{ justifyContent: "center" }}>
          <Button
            variant="outlined"
            startIcon={<AiOutlineClose />}
            size="small"
            className="exit-button"
          >
            Odustani
          </Button>
          <Button
            variant="outlined"
            startIcon={<BiSave />}
            size="small"
            className="save-button"
            onClick={(e) => {
              handleSave();
            }}
          >
            Sacuvaj
          </Button>
        </div>
      </div>
    </Context.Provider>
  );
};

export default TeacherDetail;
