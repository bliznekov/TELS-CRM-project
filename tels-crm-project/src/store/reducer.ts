import { truckReducer } from "./truck/truckSlice";
import { trucksReducer } from "./trucks/trucksSlice";

const reducer = {
    truck: truckReducer,
    trucks: trucksReducer,
};

export default reducer;
