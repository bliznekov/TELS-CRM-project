import React, { useEffect, useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useSelector } from "../hooks/useSelector";
import { useActions } from "../hooks/useActions";
import Truck from "./truck/Truck";
import TrucksFilter from "./TrucksFilter";
import c from "./Trucks.module.scss";

enum Mode {
    ALL,
    MARKED,
}

type PropsType = {};

const Truks: React.FC<PropsType> = () => {
    const [mode, setMode] = useState(Mode.ALL);

    const { fetchTrucks, setPage } = useActions();

    const data = useSelector((state) => state.trucks.data);
    const loading = useSelector((state) => state.trucks.loading);
    const error = useSelector((state) => state.trucks.error);
    const marks = useSelector((state) => state.trucks.marks);
    const page = useSelector((state) => state.trucks.page);
    const limit = useSelector((state) => state.trucks.limit);
    const truck = useSelector((state) => state.trucks.truck);

    const filterdData = data
        .filter((item, index) => data.indexOf(item) === index)
        .filter((item) => {
            if (mode === Mode.ALL) {
                return item;
            } else if (mode === Mode.MARKED) {
                return marks.includes(item.object_id);
            }
            return false;
        });
    const paginationData = filterdData.slice(limit * (page - 1), limit * page);

    useEffect(() => {
        fetchTrucks(truck);
    }, [truck]);

    const handleToggleMode = (
        _: React.MouseEvent<HTMLElement>,
        newMode: Mode
    ) => {
        setMode(newMode);
        setPage(1);
    };

    return (
        <div className={c.trucksContainer}>
            <TrucksFilter count={filterdData.length} />
            <ToggleButtonGroup
                value={mode}
                exclusive
                onChange={handleToggleMode}
            >
                <ToggleButton value={Mode.ALL}>All</ToggleButton>
                <ToggleButton value={Mode.MARKED}>Marked</ToggleButton>
            </ToggleButtonGroup>

            <h2>Автомобили</h2>
            <table>
                <tr>
                    <th></th>
                    <th>Id</th>
                    <th>Truck number</th>
                    <th>Phone number</th>
                    <th>Speed</th>
                </tr>
                {paginationData.map((item) => (
                    <Truck key={item.object_id} data={item} />
                ))}
            </table>
            {loading && "Loading..."}
            {error}
        </div>
    );
};

export default Truks;
