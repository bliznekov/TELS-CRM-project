import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Storage from "../../helpers/Storage";
import TruckType from "../../types/truckType";
import { fetchTrucks } from "./trucksThunks";

type StoreType = {
    data: TruckType[];
    loading: boolean;
    error?: string;
    marks: number[];
};

const initialState: StoreType = {
    data: [],
    loading: false,
    marks: Storage.get("marks", []),
};

const trucksSlice = createSlice({
    name: "trucks",
    initialState,
    reducers: {
        markPost: (state, { payload: truckId }: PayloadAction<number>) => {
            if (state.marks.includes(truckId)) {
                state.marks = state.marks.filter((id) => id !== truckId);
            } else {
                state.marks.push(truckId);
            }
            Storage.set("marks", state.marks);
        },
    },
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
