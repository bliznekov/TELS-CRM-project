import React from "react";
import { CircularProgress } from "@mui/material";

import "./FormCard.scss";

type PropsType = {
    header?: string;
    loading?: boolean;
    children: React.ReactNode;
};

const FormCard: React.FC<PropsType> = ({ header, children, loading }) => {
    return (
        <form className="form-card-container">
            <div className={`form-content ${loading ? "_loading" : ""}`}>
                {header && <div className="header">{header}</div>}
                {children}
            </div>
            {loading && (
                <div className="loader">
                    <CircularProgress color="warning" />
                </div>
            )}
        </form>
    );
};

export default FormCard;
