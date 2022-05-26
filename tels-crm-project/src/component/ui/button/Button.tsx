import React from "react";

import c from "./Button.module.scss";

type PropsType = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
};

const Button: React.FC<PropsType> = ({ onClick, children }) => {
    return (
        <button className={c.buttonContainer} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
