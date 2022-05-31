import React from "react";
import Pagination from "@mui/material/Pagination";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import TextField from "../ui/textField/TextField";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useSelector";

type PropsType = {
    count: number;
};

const TrucksFilter: React.FC<PropsType> = ({ count }) => {
    const { setPage, setLimit, setTruck } = useActions();

    const page = useSelector((state) => state.trucks.page);
    const limit = useSelector((state) => state.trucks.limit);
    const truck = useSelector((state) => state.trucks.truck);

    const handleChangeLimit = (event: SelectChangeEvent) => {
        setLimit(+event.target.value);
    };

    const handleChangePage = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setPage(value);
    };

    const updateTruck = (value: string) => {
        setTruck(value);
    };

    return (
        <div className="posts-container">
            <TextField label="Truck" value={truck} setValue={updateTruck} />
            <Select
                label="Items per page"
                value={limit.toString()}
                onChange={handleChangeLimit}
            >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
            </Select>

            <Pagination
                className="pagination"
                page={page}
                onChange={handleChangePage}
                count={Math.ceil(count / limit)}
            />
        </div>
    );
};

export default TrucksFilter;
