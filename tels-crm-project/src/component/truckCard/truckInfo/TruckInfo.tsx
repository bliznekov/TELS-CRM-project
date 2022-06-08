import React from "react";
import Flag from "react-world-flags";
import TruckType from "../../../types/truckType";
import useTranslate from "../../hooks/useTranslate";

import c from "./../TruckCard.module.scss";

type PropsType = {
    data: TruckType;
};

const TruckInfo: React.FC<PropsType> = ({ data }) => {
    const { lang, t } = useTranslate();

    return (
        <ul>
            <li className={c.number}>
                <span>{t("trucks.number")}: </span>
                {data.auto_number}
            </li>
            <li className={c.country}>
                <span>{t("truckCard.country")}:</span>
                <Flag code={data.country_shot} height="16" />
            </li>
            <li className={c.phone}>
                <span>{t("trucks.phone")}: </span>+{data.phone_number}
            </li>
            <li className={c.speed}>
                <span>{t("trucks.speed")}: </span>
                {data.speed_can}
            </li>
            <li className={c.date}>
                <span>{t("trucks.date")}: </span>
                {data.datetime}
            </li>
            <li>
                <span>{t("truckCard.adress")}</span>
                <div className={c.place}>{lang === "ru" ? data.place : data.place_en}</div>
            </li>
        </ul>
    );
};

export default TruckInfo;
