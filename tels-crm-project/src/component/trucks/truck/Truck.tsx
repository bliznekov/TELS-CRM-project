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

    const marks = useSelector((state) => state.trucks.marks);
    const isMarked = marks.includes(data.object_id);

    const handleClick = () => {
        navigate(`/trucks/${data.object_id}`);
    };

    const handleClickMark = () => markTruck(data.object_id);

    return (
        <>
            {data.auto_number && (
                <div className={c.truckContainer}>
                    <div className="svg" onClick={handleClick}>
                        {!(data.speed_can === 0) ? (
                            <TruckIconMove />
                        ) : (
                            <TruckIcon />
                        )}
                    </div>
                    <div className="number">{data.auto_number}</div>
                    <div className="phone">+{data.phone_number}</div>
                    <div className="speed">{data.speed_can}</div>
                    <div className="date">{data.datetime}</div>
                    <div className="date">{data.latitude}</div>
                    <div className="date">{data.longitude}</div>
                    <div className="svg" onClick={handleClickMark}>
                        {!isMarked ? <Plus /> : <Check />}
                    </div>
                </div>
            )}
        </>
    );
};

export default Truck;
