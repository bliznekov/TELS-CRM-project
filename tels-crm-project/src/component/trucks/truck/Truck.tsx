import React from "react";
import TruckType from "../../../types/truckType";

import c from "./Truck.module.scss";
import { ReactComponent as TruckIcon } from "./../../../assets/truckStop.svg";
import { ReactComponent as TruckIconMove } from "./../../../assets/truckArrow.svg";
import { ReactComponent as Plus } from "./../../../assets/plus.svg";
import { ReactComponent as Check } from "./../../../assets/check.svg";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "../../hooks/useSelector";

type PropsType = {
    data: TruckType;
};

const Truck: React.FC<PropsType> = ({ data }) => {
    const navigate = useNavigate();

    const { markTruck } = useActions();

    const marks = useSelector(state => state.trucks.marks);
    const isMarked = marks.includes(data.object_id);

    const handleClick = () => {
        navigate(`/trucks/${data.object_id}`);
    };

    const handleClickMark = () => markTruck(data.object_id);

    return (
        <>
            {data.auto_number && (
                <div className={c.truckContainer}>
                    <ul>
                        <li className={c.svg} onClick={handleClick}>
                            {data.speed_can === 0 ? (
                                <TruckIcon />
                            ) : data.speed_can === undefined ? (
                                <TruckIcon />
                            ) : (
                                <TruckIconMove />
                            )}
                        </li>
                        <li className={c.number}>{data.auto_number}</li>
                        <li className={c.phone}>+{data.phone_number}</li>
                        <li className={c.speed}>{data.speed_can === undefined ? 0 : data.speed_can}</li>
                        <li className={c.date}>{data.datetime}</li>
                        <li className={c.cors}>
                            {data.latitude}, {data.longitude}
                        </li>
                        <li className={c.svg} onClick={handleClickMark}>
                            {!isMarked ? <Plus /> : <Check />}
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Truck;
