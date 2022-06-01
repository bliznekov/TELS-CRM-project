import React from "react";

import c from "./FormCard.module.scss";

type PropsType = {
    header?: string;
    loading?: boolean;
    children: React.ReactNode;
};

const FormCard: React.FC<PropsType> = ({ header, children, loading }) => {
    return (
        <form className={c.formCardContainer}>
            {header && <div className={c.header}>{header}</div>}
            {children}
            {loading && <div className="loader">...</div>}
        </form>
    );
};

export default FormCard;
