import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import TrukType from "../../types/truckType";

const URL = "/info/integration.php?type=CURRENT_POSITION&token=";
type FetchTruckType = {
    data: TrukType[];
};

type TruckFilterType = {
    id?: string;
    token?: string;
};

export const fetchTruck = createAsyncThunk<
    FetchTruckType,
    TruckFilterType,
    { rejectValue: string }
>("truck/fetchTruck", async ({ id, token }, thunkApi) => {
    let url = `${URL}${token}&string="json"&object_id=${id}&get_en_address=true&get_address=true`;
    try {
        const response = await axios.get(url);
        return {
            data: response.data.root.result.items as TrukType[],
        };
    } catch {
        return thunkApi.rejectWithValue("Server error!");
    }
});
