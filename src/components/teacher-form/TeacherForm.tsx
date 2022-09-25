import React from 'react'
import CustomInput from '../custom-input/CustomInput'

function TeacherForm() {
  return (
    <div className='teacher-form-container'>
        <CustomInput name="Ime: " />
        <CustomInput name="Prezime: " />
        <CustomInput name="Srednje ime: " />
        <CustomInput name="Skracenica: " />
        <CustomInput name="Boja: " />
    </div>
  )
}

export default TeacherForm