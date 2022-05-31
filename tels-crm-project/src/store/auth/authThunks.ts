import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import FormValuesType from "./../../types/FormValuesType";

const URL = "/info/integration_get_token.php?type=GET_TOKEN";
// "proxy": "https://api.nav.by/info/integration.php",

type FetchTrucksType = {
    status: string;
    token: string;
};

export const createTokens = createAsyncThunk<FetchTrucksType, FormValuesType>(
    "auth/createTokens",
    async (data) => {
        let url = `${URL}&login=t802_${data.login}&password=${data.password}`;
        debugger;
        const response = await axios.get(url);
        return response.data as FetchTrucksType;
    }
);
