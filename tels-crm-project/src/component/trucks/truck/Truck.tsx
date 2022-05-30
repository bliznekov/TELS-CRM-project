import React from "react";
import TruckType from "../../../types/truckType";

import c from "./Truck.module.scss";
import { ReactComponent as TruckIcon } from "./../../../assets/truckStop.svg";
import { ReactComponent as TruckIconMove } from "./../../../assets/truckArrow.svg";
import { useNavigate } from "react-router-dom";

type PropsType = {
    data: TruckType;
};

const Truck: React.FC<PropsType> = ({ data }) => {
    const navigate = useNavigate();

    if (data.object_id === null || undefined) {
        return null;
    }

    const handleClick = () => {
        navigate(`/trucks/${data.object_id}`, {
            state: { st: 12 },
        });
    };

    return (
        <>
            {data.auto_number && (
                <tr className={c.truckContainer}>
                    <th className="svg" onClick={handleClick}>
                        {!(data.speed_can === 0) ? (
                            <TruckIconMove />
                        ) : (
                            <TruckIcon />
                        )}
                    </th>
                    <th className="id">{data.object_id}</th>
                    <th className="number">{data.auto_number}</th>
                    <th className="phone">+{data.phone_number}</th>
                    <th className="speed">{data.speed_can}</th>
                    <th className="speed">{data.object_uid}</th>
                </tr>
            )}
        </>
    );
};

export default Truck;
