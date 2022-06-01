import React from "react";
import Pagination from "@mui/material/Pagination";
import { MenuItem, Paper } from "@mui/material";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import TextField from "../ui/textField/TextField";
import Select from "../ui/select/Select";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useSelector";

import c from "./TrucksFilter.module.scss";

type PropsType = {
    count: number;
};

export enum Mode {
    ALL,
    MARKED,
}

const TrucksFilter: React.FC<PropsType> = ({ count }) => {
    // const [mode, setMode] = useState(Mode.ALL);

    const { setPage, setLimit, setTruck, setMode } = useActions();

    const page = useSelector((state) => state.trucks.page);
    const limit = useSelector((state) => state.trucks.limit);
    const truck = useSelector((state) => state.trucks.truck);
    const mode = useSelector((state) => state.trucks.mode);

    const handleChangeLimit = (value: string) => {
        setLimit(+value);
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

    const handleToggleMode = (
        _: React.MouseEvent<HTMLElement>,
        newMode: Mode
    ) => {
        setMode(newMode);
        setPage(1);
    };

    return (
        <Paper elevation={3} className={c.postsFilterContainer}>
            <TextField label="Truck" value={truck} setValue={updateTruck} />
            <Select
                label="Items per page"
                value={limit.toString()}
                setValue={handleChangeLimit}
            >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
            </Select>
            <ToggleButtonGroup
                value={mode}
                exclusive
                onChange={handleToggleMode}
            >
                <ToggleButton value={Mode.ALL}>All</ToggleButton>
                <ToggleButton value={Mode.MARKED}>Marked</ToggleButton>
            </ToggleButtonGroup>

            <Pagination
                className="pagination"
                page={page}
                onChange={handleChangePage}
                count={Math.ceil(count / limit)}
            />
        </Paper>
    );
};

export default TrucksFilter;
