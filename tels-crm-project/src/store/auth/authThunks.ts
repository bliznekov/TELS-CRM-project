import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import FormValuesType from "./../../types/FormValuesType";

const URL = "/info/integration_get_token.php?type=GET_TOKEN";

type TokenType = {
    status: string;
    token: string;
};

export const createTokens = createAsyncThunk<TokenType, FormValuesType>("auth/createTokens", async data => {
    let url = `${URL}&login=t802_${data.login}&password=${data.password}`;
    const response = await axios.get(url);
    return response.data as TokenType;
});
