import { trucksActions } from "./trucks/trucksSlice";
import { truckActions } from "./truck/truckSlice";
import { authActions } from "./auth/authSlice";

const actions = {
    ...trucksActions,
    ...truckActions,
    ...authActions,
};

export default actions;
