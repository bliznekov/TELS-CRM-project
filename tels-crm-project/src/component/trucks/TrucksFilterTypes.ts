export enum TrucksFilterActionTypes {
    SET_PAGE_TYPE = "SET_PAGE_TYPE",
    SET_LIMIT_TYPE = "SET_LIMIT_TYPE",
    SET_TRUCK_TYPE = "SET_TRUCK_TYPE",
}

type SetPageAction = {
    type: TrucksFilterActionTypes.SET_PAGE_TYPE;
    payload: number;
};

type SetLimitAction = {
    type: TrucksFilterActionTypes.SET_LIMIT_TYPE;
    payload: number;
};

type SetTruckAction = {
    type: TrucksFilterActionTypes.SET_TRUCK_TYPE;
    payload: string;
};

export type TrucksFilterAction =
    | SetPageAction
    | SetLimitAction
    | SetTruckAction;

type TrucksFilterType = {
    limit: number;
    page: number;
    truck?: string;
};

export default TrucksFilterType;
