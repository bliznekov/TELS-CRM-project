import React from "react";
import Button from "../ui/button/Button";

import c from "./Info.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "../hooks/useSelector";
import useTranslate from "../hooks/useTranslate";
import TelsInfo from "./telsInfo/TelsInfo";

const Info: React.FC = () => {
    const { t } = useTranslate();

    const logged = useSelector(state => state.auth.logged);

    return (
        <div className={c.infoContainer}>
            <div className={c.centerContent}>
                <h1>{t("info.tittle")}</h1>
                <div className={c.content}>
                    <div className={c.contentLeft}>
                        <h3>{t("info.subtittle")}</h3>
                        <div>
                            {logged ? (
                                <Link to="/trucks">
                                    <Button pulse>{t("info.button.trucks")}</Button>
                                </Link>
                            ) : (
                                <Link to="/login">
                                    <Button pulse>{t("info.button.start")}</Button>
                                </Link>
                            )}
                            <Link to="/login"></Link>
                        </div>
                    </div>
                    <TelsInfo />
                </div>
            </div>
        </div>
    );
};

export default Info;
