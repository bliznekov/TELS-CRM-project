import { createSlice } from "@reduxjs/toolkit";
import TruckType from "../../types/truckType";
import { fetchTruck } from "./truckThunks";

type StoreType = {
    data: TruckType[];
    loading: boolean;
    error?: string;
};

const initialState: StoreType = {
    data: [{ object_id: 1 }],
    loading: false,
};

const truckSlice = createSlice({
    name: "truck",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchTruck.pending, state => {
            state.loading = true;
            state.error = undefined;
            state.data = [];
        });

        builder.addCase(fetchTruck.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });

        builder.addCase(fetchTruck.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload.data;
        });
    },
});

export const truckReducer = truckSlice.reducer;
export const truckActions = {
    ...truckSlice.actions,
    fetchTruck,
};
