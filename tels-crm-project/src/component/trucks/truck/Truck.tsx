import React from "react";
import TruckType from "../../../types/truckType";

import c from "./Truck.module.scss";
import { ReactComponent as TruckIcon } from "./../../../assets/truckStop.svg";
import { ReactComponent as TruckIconMove } from "./../../../assets/truckArrow.svg";

type PropsType = {
    data: TruckType;
};

const Truck: React.FC<PropsType> = ({ data }) => {
    return (
        <>
            <tr className={c.truckContainer}>
                <th className="svg">
                    {!(data.speed_can === 0) ? (
                        <TruckIconMove />
                    ) : (
                        <TruckIcon />
                    )}
                </th>
                <th className="id">{data.object_id}</th>
                {!data.auto_number ? (
                    <th className="number">NaN</th>
                ) : (
                    <th className="number">{data.auto_number}</th>
                )}

                <th className="phone">+{data.phone_number}</th>
                <th className="speed">{data.speed_can}</th>
            </tr>
        </>
    );
};

export default Truck;
