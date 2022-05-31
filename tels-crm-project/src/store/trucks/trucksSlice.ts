import { createSlice } from "@reduxjs/toolkit";
import TruckType from "../../types/truckType";
import { fetchTrucks } from "./trucksThunks";

type StoreType = {
    data: TruckType[];
    loading: boolean;
    error?: string;
};

const initialState: StoreType = {
    data: [],
    loading: false,
};

const trucksSlice = createSlice({
    name: "trucks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTrucks.pending, (state) => {
            state.loading = true;
            state.error = undefined;
            state.data = [];
        });

        builder.addCase(fetchTrucks.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });

        builder.addCase(fetchTrucks.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload.data;
        });
    },
});

export const trucksReducer = trucksSlice.reducer;
export const trucksActions = {
    ...trucksSlice.actions,
    fetchTrucks,
};
