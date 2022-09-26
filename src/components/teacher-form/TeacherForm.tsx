import React, {useContext} from 'react'
import { Context } from '../../pages/teacher-detail/TeacherDetails'
import CustomInput from '../custom-input/CustomInput'
import CustomPalette from '../custom-palette/CustomPalette'

function TeacherForm() {

  const {ime,setIme} = useContext(Context)
  const {prezime,setPrezime} = useContext(Context)
  const {srednjeIme,setSrednjeIme} = useContext(Context)
  const {skracenica,setSkracenica} = useContext(Context)
 


  return (
    <div className='teacher-form-container'>
        <CustomInput name="Ime: " value={ime} setValue={setIme} />
        <CustomInput name="Prezime: " value={prezime} setValue={setPrezime} />
        <CustomInput name="Srednje ime: " value={srednjeIme} setValue={setSrednjeIme} />
        <CustomInput name="Skracenica: " value={skracenica} setValue={setSkracenica} />
        <CustomPalette />
    </div>
  )
}

export default TeacherForm