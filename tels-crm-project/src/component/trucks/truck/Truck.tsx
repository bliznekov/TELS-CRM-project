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

    const { markPost } = useActions();

    const marks = useSelector((state) => state.trucks.marks);
    const isMarked = marks.includes(data.object_id);

    const handleClick = () => {
        navigate(`/trucks/${data.object_id}`);
    };

    const handleClickMark = () => markPost(data.object_id);

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
                    <th className="svg" onClick={handleClickMark}>
                        {!isMarked ? <Plus /> : <Check />}
                    </th>
                </tr>
            )}
        </>
    );
};

export default Truck;
