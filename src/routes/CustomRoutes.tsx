import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import TeacherList from '../pages/teacher-list/TeacherList'
import TeacherDetail from '../pages/teacher-detail/TeacherDetails'
import { HOME_PATH, TEACHER_LIST_PATH, TEACHER_DETAILS_PATH } from './path-constants';


const CustomRoutes = () => {
    return (
        <Routes>
            <Route path= {TEACHER_LIST_PATH} element={<TeacherList/>}/>
            <Route path= {TEACHER_DETAILS_PATH} element={<TeacherDetail/>}/>
            <Route path= {HOME_PATH} element={<Navigate replace to={TEACHER_LIST_PATH} />} />
        </Routes>
    );
}

export default CustomRoutes