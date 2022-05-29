import React from "react";
import Pagination from "@mui/material/Pagination";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import TrucksFilterType from "../../types/TrucksFilterType";

type PropsType = {
    count: number;
    filter: TrucksFilterType;
    setFilter: (callback: (v: TrucksFilterType) => TrucksFilterType) => void;
};

const PostsFilter: React.FC<PropsType> = ({ count, filter, setFilter }) => {
    const handleChangeLimit = (event: SelectChangeEvent) => {
        setFilter((prevValue) => ({
            ...prevValue,
            page: 1,
            limit: +event.target.value,
        }));
    };

    const handleChangePage = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setFilter((prevValue) => ({
            ...prevValue,
            page: value,
        }));
    };

    return (
        <div className="posts-container">
            <Select
                label="Items per page"
                value={filter.limit.toString()}
                onChange={handleChangeLimit}
            >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
            </Select>

            <Pagination
                className="pagination"
                page={filter.page}
                onChange={handleChangePage}
                count={Math.ceil(count / filter.limit)}
            />
        </div>
    );
};

export default PostsFilter;
