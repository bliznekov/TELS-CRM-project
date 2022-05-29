import React, { useState } from "react";
import useTrucks from "../../apiHooks/useTrucks";
import TrucksFilterType from "../../types/TrucksFilterType";
import Truck from "./truck/Truck";
import trucks from "./../../jsonFiles/trucks/trucks.json";

import c from "./Trucks.module.scss";
import PostsFilter from "./TrucksFilter";

type PropsType = {};

const Truks: React.FC<PropsType> = () => {
    const [filter, setFilter] = useState<TrucksFilterType>({
        page: 1,
        limit: 10,
    });

    const { mass, loading, error } = useTrucks(filter);

    return (
        <div className={c.trucksContainer}>
            <PostsFilter
                count={trucks.length}
                filter={filter}
                setFilter={setFilter}
            />
            <h2>Автомобили</h2>
            <table>
                <tr>
                    <th></th>
                    <th>Id</th>
                    <th>Truck number</th>
                    <th>Phone number</th>
                    <th>Speed</th>
                </tr>
                {mass.map((item) => (
                    <Truck key={item.object_id} data={item} />
                ))}
            </table>
            {loading && "Loading..."}
            {error && "Error ("}
        </div>
    );
};

export default Truks;
