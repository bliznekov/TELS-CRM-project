import { LinearProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Flag from "react-world-flags";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useSelector";
import useTranslate from "../hooks/useTranslate";
import Map from "./map/Map";

import c from "./TruckCard.module.scss";

const TruckCard: React.FC = () => {
    const { id } = useParams();

    const { lang, t } = useTranslate();

    const data = useSelector((state) => state.truck.data);
    const loading = useSelector((state) => state.truck.loading);
    const error = useSelector((state) => state.truck.error);
    const token = useSelector((state) => state.auth.token);

    const { fetchTruck } = useActions();

    useEffect(() => {
        fetchTruck({ id, token });
    }, [id]);

    if (loading) {
        return (
            <div>
                <LinearProgress color="warning" />
            </div>
        );
    } else if (error) {
        return <div>Error...</div>;
    }

    if (!data) {
        return null;
    }

    return (
        <div className={c.container}>
            <h2>
                {t("truckCard.tittle")} {data[0].auto_number}
            </h2>
            <div className={c.truckInfo}>
                <ul>
                    <li className={c.number}>
                        <span>{t("trucks.number")}: </span>
                        {data[0].auto_number}
                    </li>
                    <li className={c.country}>
                        <span>{t("truckCard.country")}:</span>
                        <Flag code={data[0].country_shot} height="16" />
                    </li>
                    <li className={c.phone}>
                        <span>{t("trucks.phone")}: </span>+
                        {data[0].phone_number}
                    </li>
                    <li className={c.speed}>
                        <span>{t("trucks.speed")}: </span>
                        {data[0].speed_can}
                    </li>
                    <li className={c.date}>
                        <span>{t("trucks.date")}: </span>
                        {data[0].datetime}
                    </li>
                    <li>
                        <span>{t("truckCard.adress")}</span>
                        <div className={c.place}>
                            {lang === "ru" ? data[0].place : data[0].place_en}
                        </div>
                    </li>
                </ul>
                <Map />
            </div>
        </div>
    );
};

export default TruckCard;
