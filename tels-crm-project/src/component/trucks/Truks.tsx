import React, { useEffect, useState } from "react";
import useTrucks from "../../apiHooks/useTruck";
import TruckType from "../../types/truckType";
import Truck from "./truck/Truck";

import c from "./Trucks.module.scss";

type PropsType = {};

const Truks: React.FC<PropsType> = () => {
    const { mass, loading, error } = useTrucks("");

    if (loading) {
        return <div>Loading...</div>;
    } else if (error) {
        return <div>Error...</div>;
    }

    if (!mass) {
        return null;
    }

    return (
        <div className={c.trucksContainer}>
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
            {loading && "Loading..."}
            {error && "Error..."}
        </div>
    );
};

export default Truks;
