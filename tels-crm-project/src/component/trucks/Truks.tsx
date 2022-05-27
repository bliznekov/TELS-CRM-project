import React, { useEffect, useState } from "react";
import TruckType from "../../types/truckType";
import Truck from "./truck/Truck";

import c from "./Trucks.module.scss";

// const token = "c5da23c0-5569-4707-9e4a-d4d3777222a8";
// const login = "t802_bra";
// const pass = "onsta234";

type PropsType = {};

const URL =
    '?type=CURRENT_POSITION&token=c5da23c0-5569-4707-9e4a-d4d3777222a8&string="json"&get_en_address="true"';
// const URL =
//     '?type=CURRENT_POSITION&token=c5da23c0-5569-4707-9e4a-d4d3777222a8&imei=352093083165729|352093083172220&string="json"&';

const Truks: React.FC<PropsType> = () => {
    const [trucks, setTruks] = useState<TruckType[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        //так же не могу догнать почему вызывается 2 раза консоль и 2 раза запрос делается.
        fetchData();
        console.log(trucks);
    }, []);

    const fetchData = () => {
        setLoading(true);
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                const trucks = data.root.result.items as TruckType[];
                setTruks(trucks);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    };

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
                {trucks.map((item) => (
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
