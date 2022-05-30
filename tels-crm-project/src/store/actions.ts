import { trucksActions } from "./trucks/trucksSlice";
import { truckActions } from "./truck/truckSlice";

const actions = {
    ...trucksActions,
    ...truckActions,
};

export default actions;
