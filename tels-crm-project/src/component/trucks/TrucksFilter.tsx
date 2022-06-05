import React from "react";
import Pagination from "@mui/material/Pagination";
import { MenuItem, Paper } from "@mui/material";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import TextField from "../ui/textField/TextField";
import Select from "../ui/select/Select";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useSelector";

import c from "./TrucksFilter.module.scss";
import useTranslate from "../hooks/useTranslate";

type PropsType = {
    count: number;
};

export enum Mode {
    ALL,
    MARKED,
}

const TrucksFilter: React.FC<PropsType> = ({ count }) => {
    const { setPage, setLimit, setTruck, setMode } = useActions();

    const { t } = useTranslate();

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

    // let str = "";
    // let timer: NodeJS.Timeout;

    const updateTruck = (value: string) => {
        // str += value;
        // clearTimeout(timer);
        // timer = setTimeout(() => {
        setTruck(value);
        //     str = "";
        // }, 500);
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
            <div className={c.filterContainer}>
                <ul>
                    <li>
                        <TextField
                            label={t("trucks.filter.textfield")}
                            value={truck}
                            setValue={updateTruck}
                        />
                    </li>
                    <li>
                        <ToggleButtonGroup
                            value={mode}
                            exclusive
                            onChange={handleToggleMode}
                            size="small"
                            color="warning"
                        >
                            <ToggleButton value={Mode.ALL}>
                                {t("trucks.filter.toggle.all")}
                            </ToggleButton>
                            <ToggleButton value={Mode.MARKED}>
                                {t("trucks.filter.toggle.marked")}
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </li>
                </ul>
            </div>
            <div className={c.paginationContainer}>
                <ul>
                    <li>
                        <Pagination
                            className="pagination"
                            page={page}
                            onChange={handleChangePage}
                            count={Math.ceil(count / limit)}
                        />
                    </li>
                    <li>
                        <Select
                            label={t("trucks.filter.select")}
                            value={limit.toString()}
                            setValue={handleChangeLimit}
                        >
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                        </Select>
                    </li>
                </ul>
            </div>
        </Paper>
    );
};

export default TrucksFilter;
