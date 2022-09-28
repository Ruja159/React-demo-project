
const CustomInput = ({name, placeholder, value, setValue}:any) =>{

    return (
        <div className='custom-input-container'>
            <p style={{paddingBottom: '4px'}}>{name}</p>
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