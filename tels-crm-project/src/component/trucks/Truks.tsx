import React, { useEffect } from "react";
import { useSelector } from "../hooks/useSelector";
import { useActions } from "../hooks/useActions";
import Truck from "./truck/Truck";
import TrucksFilter, { Mode } from "./TrucksFilter";

import { ReactComponent as Mark } from "./../../assets/bookmarkHead.svg";
import { ReactComponent as TruckHead } from "./../../assets/truckHead.svg";
import c from "./Trucks.module.scss";
import { LinearProgress } from "@mui/material";
import useTranslate from "../hooks/useTranslate";

type PropsType = {};

const Truks: React.FC<PropsType> = () => {
    const { fetchTrucks } = useActions();

    const { t } = useTranslate();

    const data = useSelector((state) => state.trucks.data);
    const loading = useSelector((state) => state.trucks.loading);
    const error = useSelector((state) => state.trucks.error);
    const marks = useSelector((state) => state.trucks.marks);
    const page = useSelector((state) => state.trucks.page);
    const limit = useSelector((state) => state.trucks.limit);
    const truck = useSelector((state) => state.trucks.truck);
    const mode = useSelector((state) => state.trucks.mode);
    const token = useSelector((state) => state.auth.token);

    const filterdData = data
        .filter((item, index) => data.indexOf(item) === index)
        .filter((item) => {
            if (mode === Mode.ALL) {
                return item;
            } else if (mode === Mode.MARKED) {
                return marks.includes(item.object_id);
            }
            return false;
        });
    const paginationData = filterdData.slice(limit * (page - 1), limit * page);
    useEffect(() => {
        fetchTrucks({ truck, token });
    }, [truck, token]);

    return (
        <div className={c.trucksContainer}>
            <h2>{t("trucks.head")}</h2>
            <TrucksFilter count={filterdData.length} />

            <ul className={c.trucksHeader}>
                <li className={c.svg}>
                    <TruckHead />
                </li>
                <li className={c.number}>{t("trucks.number")}</li>
                <li className={c.phone}>{t("trucks.phone")}</li>
                <li className={c.speed}>{t("trucks.speed")}</li>
                <li className={c.date}>{t("trucks.date")}</li>
                <li className={c.cors}>{t("trucks.coor")}</li>
                <li className={c.svgMark}>
                    <Mark />
                </li>
            </ul>
            {paginationData.map((item) => (
                <Truck key={item.object_id} data={item} />
            ))}
            {loading && <LinearProgress color="warning" />}
            {error}
        </div>
    );
};

export default Truks;
