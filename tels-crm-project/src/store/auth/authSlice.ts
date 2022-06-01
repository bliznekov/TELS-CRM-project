import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Storage from "../../helpers/Storage";
import { createTokens } from "./authThunks";

type StoreType = {
    token?: string;
    status?: string;
    loading: boolean;
    error: boolean;
    logged: boolean;
};

const initialState: StoreType = {
    loading: false,
    error: false,
    token: Storage.get("token", undefined),
    logged: Storage.get("token", false),
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthError: (state, { payload }: PayloadAction<boolean>) => {
            state.error = payload;
        },
        setAuthStatus: (state, { payload }: PayloadAction<string>) => {
            state.status = payload;
        },
        logout: (state) => {
            state.token = undefined;
            state.logged = false;

            Storage.remove("token");
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createTokens.pending, (state) => {
            state.loading = true;
            state.error = false;
        });

        builder.addCase(createTokens.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });

        builder.addCase(createTokens.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.token = payload.token;
            state.status = payload.status;
            state.logged = true;

            Storage.set("token", payload.token);
        });
    },
});

export const authReducer = authSlice.reducer;
export const authActions = {
    ...authSlice.actions,
    createTokens,
};
