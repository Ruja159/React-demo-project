import React, { useEffect, useState } from "react";
import CustomCard from "../../components/custom-card/CustomCard";
import BaseService from "../../services/common/BaseService";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {TEACHER_DETAILS_PATH} from '../../routes/path-constants'
import { Pagination } from '@mui/material';

const TeacherList: React.FC = () => {
  const baseService = new BaseService();
  const module = "/nastavnici";

  const navigate = useNavigate();

  const [teachers, setTeachers] = useState([]);

  const getAllTeachers = () => {
    baseService.get(module).then((result) => {
      console.log(result, "REZULTAT");
      setTeachers(result.data);
    });
  };

  const handleRedirect = () => { 
   navigate(TEACHER_DETAILS_PATH)
  }

  useEffect(() => {
    getAllTeachers();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h5>NASTAVNICI</h5>
        <button className="new-teacher-button" onClick={handleRedirect}>
          <i className="new-teacher-icon">{<AiOutlinePlus/>}</i>
          <span> Novi nastavnik</span>
        </button>
      </div>
      <div className="input-container">
        <div className="input-box">
          <label>Ime: </label>
          <input type="text" />
        </div>
        <div className="input-box">
          <label>Prezime: </label>
          <input type="text" />
        </div>
      </div>
      <div></div>
      {teachers.map((teacher: any) => {
        return <CustomCard key={teacher.id} teacher={teacher} />;
      })}
      <Pagination />
    </div>
  );
};

export default TeacherList;
