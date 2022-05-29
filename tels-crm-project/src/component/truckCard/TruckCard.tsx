import React from "react";
import { useParams } from "react-router-dom";
import usePost from "../../apiHooks/useTruck";

const TruckCard: React.FC = () => {
    const { id } = useParams();

    const { mass, loading, error } = usePost(id);

    if (loading) {
        return <div>Loading...</div>;
    } else if (error) {
        return <div>Error...</div>;
    }

    if (!mass) {
        return null;
    }

    return (
        <>
            <tr className={""}>
                <th className="svg">
                    {/* {!(data.speed_can === 0) ? (
                        <TruckIconMove />
                    ) : (
                        <TruckIcon />
                    )} */}
                </th>
                {/* {!data.root.result.speed_can && <th className="number">NaN</th>} */}
                <th className="number">{mass[0].auto_number}</th>
                {/* <th className="phone">+{data.root.phone_number}</th>
                <th className="speed">{data.root.speed_can}</th>
                <th className="id">{data.root.object_id}</th> */}
            </tr>
        </>
    );
};

export default TruckCard;
