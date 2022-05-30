import React, { useEffect, useReducer } from "react";
import { useSelector } from "../hooks/useSelector";
import { useActions } from "../hooks/useActions";
import { initialState, TrucksFilterReducer } from "./TrucksFilterReduser";
import Truck from "./truck/Truck";
import trucks from "./../../jsonFiles/trucks/trucks.json";
import TrucksFilter from "./TrucksFilter";
import c from "./Trucks.module.scss";

type PropsType = {};

const Truks: React.FC<PropsType> = () => {
    const [state, dispatch] = useReducer(TrucksFilterReducer, initialState);
    const { fetchTrucks } = useActions();

    const data = useSelector((state) => state.posts.data);
    const loading = useSelector((state) => state.posts.loading);
    const error = useSelector((state) => state.posts.error);

    useEffect(() => {
        fetchTrucks(state);
    }, [state]);

    return (
        <div className={c.trucksContainer}>
            <TrucksFilter
                count={trucks.length}
                state={state}
                dispatch={dispatch}
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
                {data.map((item) => (
                    <Truck key={item.object_id} data={item} />
                ))}
            </table>
            {loading && "Loading..."}
            {error}
        </div>
    );
};

export default Truks;
