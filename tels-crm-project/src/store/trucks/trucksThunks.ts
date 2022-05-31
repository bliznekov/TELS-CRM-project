import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import TrukType from "../../types/truckType";

const URL =
    '?type=CURRENT_POSITION&token=c5da23c0-5569-4707-9e4a-d4d3777222a8&string="json"&get_en_address="true"';

type FetchTrucksType = {
    data: TrukType[];
};

export const fetchTrucks = createAsyncThunk<
    FetchTrucksType,
    string | undefined,
    { rejectValue: string }
>("trucks/fetchTrucks", async (truck: string | undefined, thunkApi) => {
    let url = `${URL}`;

    if (truck) {
        url = `${URL}&name_filter=${truck}`;
    }

    try {
        const response = await axios.get(url);
        return {
            data: response.data.root.result.items as TrukType[],
        };
    } catch {
        return thunkApi.rejectWithValue("Server error!");
    }
});
