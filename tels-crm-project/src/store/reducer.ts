import { authReducer } from "./auth/authSlice";
import { truckReducer } from "./truck/truckSlice";
import { trucksReducer } from "./trucks/trucksSlice";

const reducer = {
    truck: truckReducer,
    trucks: trucksReducer,
    auth: authReducer,
};

export default reducer;
