import TrucksFilterType, {
    TrucksFilterActionTypes,
    TrucksFilterAction,
} from "./TrucksFilterTypes";

export const initialState: TrucksFilterType = {
    page: 1,
    limit: 10,
    truck: "",
};

export const TrucksFilterReducer = (
    state: TrucksFilterType,
    action: TrucksFilterAction
): TrucksFilterType => {
    switch (action.type) {
        case TrucksFilterActionTypes.SET_PAGE_TYPE:
            return {
                ...state,
                page: action.payload,
            };
        case TrucksFilterActionTypes.SET_LIMIT_TYPE:
            return {
                ...state,
                page: 1,
                limit: action.payload,
            };
        case TrucksFilterActionTypes.SET_TRUCK_TYPE: {
            let re = /^[A-Za-z0-9]{0,8}$/;
            const truck = action.payload;
            if (re.test(truck)) {
                return {
                    ...state,
                    truck,
                };
            } else {
                if (truck === "") {
                    return { ...state, truck: "" };
                } else {
                    return { ...state };
                }
            }
        }
        default:
            return state;
    }
};
