import {
    TrucksFilterAction,
    TrucksFilterActionTypes,
} from "./TrucksFilterTypes";

export const setPage = (value: number): TrucksFilterAction => ({
    type: TrucksFilterActionTypes.SET_PAGE_TYPE,
    payload: value,
});

export const setLimit = (value: number): TrucksFilterAction => ({
    type: TrucksFilterActionTypes.SET_LIMIT_TYPE,
    payload: value,
});

export const setTruck = (value: string): TrucksFilterAction => ({
    type: TrucksFilterActionTypes.SET_TRUCK_TYPE,
    payload: value,
});
