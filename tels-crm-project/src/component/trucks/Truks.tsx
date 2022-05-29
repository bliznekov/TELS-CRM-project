import React, { useReducer } from "react";
import useTrucks from "../../apiHooks/useTrucks";
import { initialState, TrucksFilterReducer } from "./TrucksFilterReduser";
import Truck from "./truck/Truck";
import trucks from "./../../jsonFiles/trucks/trucks.json";
import TrucksFilter from "./TrucksFilter";
import c from "./Trucks.module.scss";

type PropsType = {};

const Truks: React.FC<PropsType> = () => {
    const [state, dispatch] = useReducer(TrucksFilterReducer, initialState);

    const { mass, loading, error } = useTrucks(state);

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
