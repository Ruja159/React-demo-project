import React from "react";

import { AiOutlinePlus } from "react-icons/ai";

interface Props {
    children?: React.ReactNode;
    height?: string;
    onClick?: () => void;
    radius?: string
    width?: string;
    rightLeftArrow?: boolean;
    padding?: string;
    margin?: string

}

const CustomButton: React.FC<Props> = ({
                                     children,
                                     height,
                                     onClick,
                                     radius,
                                     margin,
                                     width,
                                     padding ,
                                     rightLeftArrow
                                 }) => {
    return (
        <>
            <button
                className = "button"
                onClick={onClick}
                style={{
                    borderRadius: radius,
                    height,
                    width,
                    padding,
                    margin
                }}
            >
                {children}
                {rightLeftArrow ?   <AiOutlinePlus /> : "" }
            </button>

        </>

    );
}

export default CustomButton;