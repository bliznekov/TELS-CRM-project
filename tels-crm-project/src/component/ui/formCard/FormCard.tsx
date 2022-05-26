import React from "react";

import c from "./FormCard.module.scss";

type PropsType = {
    header?: string;
    children: React.ReactNode;
};

const FormCard: React.FC<PropsType> = ({ header, children }) => {
    return (
        <form className={c.formCardContainer}>
            {header && <div className={c.header}>{header}</div>}
            {children}
        </form>
    );
};

export default FormCard;
