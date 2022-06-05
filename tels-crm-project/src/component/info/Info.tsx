import React from "react";
import Button from "../ui/button/Button";
import CustomIcon from "../../assets/customs3.png";
import ADRIcon from "../../assets/alert.png";
import GPSIcon from "../../assets/gps.png";
import ChatIcon from "../../assets/chat.png";
import UmbrellaIcon from "../../assets/umbrella.png";

import c from "./Info.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "../hooks/useSelector";
import { useActions } from "../hooks/useActions";
import useTranslate from "../hooks/useTranslate";

const Info: React.FC = () => {
    const { logout } = useActions();

    const { t } = useTranslate();
    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        logout();
    };

    const logged = useSelector((state) => state.auth.logged);

    return (
        <div className={c.infoContainer}>
            <div className={c.centerContent}>
                <h1>{t("info.tittle")}</h1>
                <div className={c.content}>
                    <div className={c.contentLeft}>
                        <h3>{t("info.subtittle")}</h3>
                        <div>
                            {logged ? (
                                <>
                                    <Button onClick={handleSubmit}>
                                        {t("info.button.finish")}
                                    </Button>
                                </>
                            ) : (
                                <Link to="/login">
                                    <Button onClick={handleSubmit} pulse>
                                        {t("info.button.start")}
                                    </Button>
                                </Link>
                            )}
                            <Link to="/login"></Link>
                        </div>
                    </div>
                    <div className={c.contentRight}>
                        <h3>
                            <span>TELS CARGO</span>
                            {t("info.info.subtittle")}
                        </h3>
                        <ul>
                            <li>
                                <img src={CustomIcon} />
                                <div>
                                    <span>TELS CARGO</span>
                                    {t("info.info.custom")}
                                </div>
                            </li>
                            <li>
                                <img src={ADRIcon} />
                                <div>
                                    {t("info.info.ADR")}
                                    <span>{t("info.info.ADR.span")}</span>
                                </div>
                            </li>
                            <li>
                                <img src={GPSIcon} />
                                <div>
                                    <span>{t("info.info.GPS.span")}</span>
                                    {t("info.info.GPS")}
                                </div>
                            </li>
                            <li>
                                <img src={ChatIcon} />
                                <div>
                                    <span>{t("info.info.chat.span")}</span>
                                    {t("info.info.chat")}
                                </div>
                            </li>
                            <li>
                                <img src={UmbrellaIcon} />
                                <div>
                                    <span>
                                        {t("info.info.span.inshurance")}
                                    </span>
                                    {t("info.info.inshurance")}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
