import React from 'react'

const CustomInput = ({name}:any) =>{
    return (
        <div className='custom-input-container'>
            <label>{name}</label>
            <input type="text" />
        </div>
    )
}

export default CustomInput