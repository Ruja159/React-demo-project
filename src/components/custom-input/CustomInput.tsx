

const CustomInput = ({name, placeholder, value, setValue}:any) =>{

   

    return (
        <div className='custom-input-container'>
            <label>{name}</label>
            <input
             type="text"
             placeholder = {placeholder}
             value = {value}
             onChange ={(e)=>{setValue(e.target.value)}}
              />
        </div>
    )
}

export default CustomInput