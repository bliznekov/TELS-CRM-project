import { LinearProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useSelector";
import useTranslate from "../hooks/useTranslate";
import Map from "./map/Map";
import TruckInfo from "./truckInfo/TruckInfo";

import c from "./TruckCard.module.scss";

const TruckCard: React.FC = () => {
    const { id } = useParams();

    const { t } = useTranslate();

    const data = useSelector(state => state.truck.data);
    const loading = useSelector(state => state.truck.loading);
    const error = useSelector(state => state.truck.error);
    const token = useSelector(state => state.auth.token);

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
                <TruckInfo data={data[0]} />
                <Map latitude={data[0].latitude} longitude={data[0].longitude} number={data[0].auto_number} />
            </div>
        </div>
    );
};

export default TruckCard;
