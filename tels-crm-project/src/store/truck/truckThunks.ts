import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import TrukType from "../../types/truckType";

const URL =
    '?type=CURRENT_POSITION&token=c5da23c0-5569-4707-9e4a-d4d3777222a8&string="json"&object_id=';

type FetchTruckType = {
    data: TrukType[];
};

export const fetchTruck = createAsyncThunk<
    FetchTruckType,
    string | undefined,
    { rejectValue: string }
>("truck/fetchTruck", async (id, thunkApi) => {
    let url = `${URL}${id}`;
    try {
        const response = await axios.get(url);
        return {
            data: response.data.root.result.items as TrukType[],
        };
    } catch {
        return thunkApi.rejectWithValue("Server error!");
    }
});
