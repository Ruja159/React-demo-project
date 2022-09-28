import React, { useEffect, useState } from "react";
import BaseService from "../../services/common/BaseService";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { TEACHER_DETAILS_PATH } from "../../routes/path-constants";
import CustomPagination from "../../components/custom-pagination/CustomPagination";

export interface Teacher {
  id: number;
  ime: string;
  prezime: string;
  srednje_ime: string;
  skracenica: string;
  boja: string;
  nedostupan_termin: Date;
  dostupan_termin: Date;
}

const TeacherList: React.FC = () => {
  const baseService = new BaseService();
  const module = "/nastavnici";

  const navigate = useNavigate();

  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [filteredTeachers, setFilteredTeachers] = useState<Teacher[]>([]);

  const getAllTeachers = () => {
    baseService.get(module).then((result) => {
      setTeachers(result.data);
    });
  };

  const handleRedirect = () => {
    navigate(TEACHER_DETAILS_PATH);
  };

  useEffect(() => {
    getAllTeachers();
  }, []);

  useEffect(() => {
    let newTeachers: Teacher[] = [...teachers];

    if (ime) {
      newTeachers = newTeachers.filter((teacher) =>
        teacher.ime.toLowerCase().includes(ime.toLowerCase())
      );
    }

    if (prezime) {
      newTeachers = newTeachers.filter((teacher) =>
        teacher.prezime.toLowerCase().includes(prezime.toLowerCase())
      );
    }
    setFilteredTeachers(newTeachers);
  }, [ime, prezime, teachers]);

  return (
    <div className="container">
      <div className="header">
        <h4>NASTAVNICI</h4>
        <button className="new-teacher-button" onClick={handleRedirect}>
          <i className="new-teacher-icon">{<AiOutlinePlus />}</i>
          <span> Novi nastavnik</span>
        </button>
      </div>
      <div className="input-container">
        <div className="input-box">
          <label>Ime: </label>
          <input
            type="text"
            onChange={(e) => {
              setIme(e.target.value);
            }}
          />
        </div>
        <div className="input-box">
          <label>Prezime: </label>
          <input
            type="text"
            onChange={(e) => {
              setPrezime(e.target.value);
            }}
          />
        </div>
      </div>
      <div></div>
      {/* {teachers.map((teacher: any, index) => {
        return <CustomCard key={index} teacher={teacher} />;
      })} */}
      <CustomPagination
        list={filteredTeachers}
        fetchTeachers={() => {
          getAllTeachers();
        }}
      />
    </div>
  );
};

export default TeacherList;
