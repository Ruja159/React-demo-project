import { Button } from "@mui/material";
import React, {useState, useContext} from "react";
import SendIcon from '@mui/icons-material/Send';
import { Context } from "../../pages/teacher-detail/TeacherDetails";

const CustomPalette = () => {
  const boje = [
    "#d272ff",
    "#e3b4fa",
    "#ae72ff",
    "#6628ba",
    "#ff94e1",
    "#ff5fd2",
    "#b4248b",
    "#66124f",
    "#748de8",
    "#3360ff",
    "#3854b5",
    "#082486",
    "#a3edf2",
    "#30d5df",
    "#75bbc5",
    "#1f8f96",
    "#f5f6ae",
    "#eef078",
    "#ffd12d",
    "#ffa800",
    "#77e19b",
    "#21cf5c",
    "#1ca14a",
    "#007026",
    "#ffa183",
    "#ff5146",
    "#d4190d",
    "#d4190d",
    "#cbcbcb",
    "#989898",
    "#424242",
    "#000000",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeColor, setActiveColor] = useState(boje[0])

  const {setBoja} = useContext(Context)

  const handleChange = (value: string) => {
    setActiveColor(value)
  }

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleExit = () => {
setIsOpen(false)
  }

  const handleSave = (color:string) =>{
    setBoja(color)
setIsOpen(false)

  }



  return (
<div className="custom-input-container" style={{ position:'relative'}}>
      <label>Boja: </label>
      <div className="custom-palette-container">
        <div onClick={()=>{handleClick()}} style={{backgroundColor: activeColor}} className="color-button">
        </div>
        <input style={{ width: '165px'}} value={activeColor} onChange={(e) => {handleChange(e.target.value)}}/>
      </div>
        {isOpen && <div className="color-palette-dropdown">
                <div className="container-exit">
                    <span onClick={()=> handleExit()}>X</span>
                </div>
                <div className = "grid-colors">
                    {boje.map((boja, index) => {
                        return (
                            <div key={index} style={{backgroundColor: boja}} className='color-box' onClick={(e)=>{
                                setActiveColor(boja)
                            }}></div>
                        )
                    })}
                </div>
                <div className="button-group">
                    <Button variant="outlined" size="small" onClick={()=>{handleExit()}}>Odustani</Button>
                    <Button variant="contained" size="small" endIcon={<SendIcon />} onClick={()=>{handleSave(activeColor)}}>Sacuvaj</Button>
                </div>
            </div>}
    </div>
  );
};

export default CustomPalette;
