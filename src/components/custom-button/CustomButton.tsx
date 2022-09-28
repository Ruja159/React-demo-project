import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { BiSave } from "react-icons/bi";

interface Props {
  children?: React.ReactNode;
  height?: string;
  onClick?: () => void;
  radius?: string;
  width?: string;
  rightLeftArrow?: boolean;
  padding?: string;
  margin?: string;
  exitIcon?: boolean;
  saveIcon?: boolean;
}

const CustomButton: React.FC<Props> = ({
  children,
  height,
  onClick,
  radius,
  margin,
  width,
  padding,
  rightLeftArrow,
  exitIcon,
  saveIcon,
}) => {
  return (
<div>
 {exitIcon ? <GrClose /> : ""}
        {saveIcon ? <BiSave /> : ""}
      <button
        className="button"
        onClick={onClick}
        style={{
          borderRadius: radius,
          height,
          width,
          padding,
          margin,
        }}
      >
        {children}
        {rightLeftArrow ? <AiOutlinePlus /> : ""}
      </button>
    </div>
  );
};

export default CustomButton;
