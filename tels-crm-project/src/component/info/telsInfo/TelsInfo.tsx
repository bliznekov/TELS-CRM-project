import React from "react";
import useTranslate from "./../../hooks/useTranslate";

import CustomIcon from "./../../../assets/customs3.png";
import ADRIcon from "./../../../assets/alert.png";
import GPSIcon from "./../../../assets/gps.png";
import ChatIcon from "./../../../assets/chat.png";
import UmbrellaIcon from "./../../../assets/umbrella.png";

import c from "./../Info.module.scss";

const TelsInfo: React.FC = () => {
    const { t } = useTranslate();

    return (
        <div className={c.contentRight}>
            <h3>
                <span>TELS CARGO</span>
                {t("info.info.subtittle")}
            </h3>
            <ul>
                <li>
                    <img src={CustomIcon} alt="Custom" />
                    <div>
                        <span>TELS CARGO</span>
                        {t("info.info.custom")}
                    </div>
                </li>
                <li>
                    <img src={ADRIcon} alt="ADR" />
                    <div>
                        {t("info.info.ADR")}
                        <span>{t("info.info.ADR.span")}</span>
                    </div>
                </li>
                <li>
                    <img src={GPSIcon} alt="GPS" />
                    <div>
                        <span>{t("info.info.GPS.span")}</span>
                        {t("info.info.GPS")}
                    </div>
                </li>
                <li>
                    <img src={ChatIcon} alt="Chat" />
                    <div>
                        <span>{t("info.info.chat.span")}</span>
                        {t("info.info.chat")}
                    </div>
                </li>
                <li>
                    <img src={UmbrellaIcon} alt="Umbrella" />
                    <div>
                        <span>{t("info.info.span.inshurance")}</span>
                        {t("info.info.inshurance")}
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default TelsInfo;
