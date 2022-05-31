import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Storage from "../../helpers/Storage";
import TruckType from "../../types/truckType";
import { fetchTrucks } from "./trucksThunks";

type StoreType = {
    data: TruckType[];
    loading: boolean;
    error?: string;
    page: number;
    limit: number;
    truck?: string;
    marks: number[];
};

const initialState: StoreType = {
    data: [],
    loading: false,
    page: 1,
    limit: 10,
    truck: "",
    marks: Storage.get("marks", []),
};

const trucksSlice = createSlice({
    name: "trucks",
    initialState,
    reducers: {
        markTruck: (state, { payload: truckId }: PayloadAction<number>) => {
            if (state.marks.includes(truckId)) {
                state.marks = state.marks.filter((id) => id !== truckId);
            } else {
                state.marks.push(truckId);
            }
            Storage.set("marks", state.marks);
        },
        setPage: (state, { payload: page }: PayloadAction<number>) => {
            state.page = page;
        },
        setLimit: (state, { payload: limit }: PayloadAction<number>) => {
            state.page = 1;
            state.limit = limit;
        },
        setTruck: (state, { payload: truck }: PayloadAction<string>) => {
            let re = /^[A-Za-z0-9]{0,8}$/;
            if (re.test(truck)) {
                state.truck = truck;
                state.page = 1;
            }
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
