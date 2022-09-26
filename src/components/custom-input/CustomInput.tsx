import React from 'react'

const CustomInput = ({name, placeholder}:any) =>{
    return (
        <div className='custom-input-container'>
            <label>{name}</label>
            <input
             type="text"
             placeholder = {placeholder}
              />
        </div>
    )
}

export default CustomInput