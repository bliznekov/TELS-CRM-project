import React from "react";
import { useParams } from "react-router-dom";
import usePost from "../../apiHooks/useTruck";

const TruckCard: React.FC = () => {
    const { id } = useParams();

    const { data, loading, error } = usePost(id);

    //вот здесь получается дичь немного, в result ничего не приходит, хотя когда делаешь запрос, то он обрабатывается.

    //const result = data.root.result.items[0].auto_number;
    if (loading) {
        return <div>Loading...</div>;
    } else if (error) {
        return <div>Error...</div>;
    }

    if (!data) {
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
                <th className="number">
                    {/* {data.root.result.items.auto_number} */}
                </th>
                {/* <th className="phone">+{data.root.phone_number}</th>
                <th className="speed">{data.root.speed_can}</th>
                <th className="id">{data.root.object_id}</th> */}
            </tr>
        </>
    );
};

export default TruckCard;
