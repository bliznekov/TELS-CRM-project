import TrucksFilterType, {
    TrucksFilterActionTypes,
    TrucksFilterAction,
} from "./TrucksFilterTypes";

export const initialState: TrucksFilterType = {
    page: 1,
    limit: 10,
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
            const numValue = +action.payload;
            if (isNaN(numValue)) {
                return state;
            }

            const truck = numValue > 0 ? numValue : undefined;
            return {
                ...state,
                //truck,
            };
        }
        default:
            return state;
    }
};
