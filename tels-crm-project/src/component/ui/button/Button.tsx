import React from "react";

import c from "./Button.module.scss";

type PropsType = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    pulse?: boolean;
};

const Button: React.FC<PropsType> = ({ onClick, children, pulse }) => {
    return (
        <button className={`${c.buttonContainer} ${pulse && c.pulse}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
