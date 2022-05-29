import React from "react";
import Pagination from "@mui/material/Pagination";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import TextField from "../ui/textField/TextField";
import TrucksFilterType from "./TrucksFilterTypes";
import { setLimit, setPage, setTruck } from "./TrucksActionCreators";

type PropsType = {
    count: number;
    state: TrucksFilterType;
    dispatch: any;
};

const TrucksFilter: React.FC<PropsType> = ({ count, state, dispatch }) => {
    const handleChangeLimit = (event: SelectChangeEvent) => {
        dispatch(setLimit(+event.target.value));
    };

    const handleChangePage = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        dispatch(setPage(value));
    };

    return (
        <div className="posts-container">
            <Select
                label="Items per page"
                value={state.limit.toString()}
                onChange={handleChangeLimit}
            >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
            </Select>

            <Pagination
                className="pagination"
                page={state.page}
                onChange={handleChangePage}
                count={Math.ceil(count / state.limit)}
            />
        </div>
    );
};

export default TrucksFilter;
