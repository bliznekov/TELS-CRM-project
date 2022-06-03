import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import TrukType from "../../types/truckType";

const URL = "/info/integration.php?type=CURRENT_POSITION&token=";

type FetchTrucksType = {
    data: TrukType[];
};

type TrucksFilterType = {
    truck?: string;
    token?: string;
};

export const fetchTrucks = createAsyncThunk<
    FetchTrucksType,
    TrucksFilterType,
    { rejectValue: string }
>("trucks/fetchTrucks", async ({ truck, token }, thunkApi) => {
    let url = `${URL}${token}&string="json"`;

    if (truck) {
        url = `${URL}${token}&string="json"&name_filter=${truck}`;
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
