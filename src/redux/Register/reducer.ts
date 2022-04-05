import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddUserApi, getProfile } from "./api";
import {
    InitialState, Profile, Register,
} from "./types";

const initialState: InitialState = {
    registerDetails: {
        name: '',
        lastName: '',
        email: '',
        mobile: '',
        password: '',
        country: '',
        state: '',
        city: '',
        profile: '',
        stream: '',
    },
    isLoading: false,
    profileData: []
};
export const RegisterSlice = createSlice({
    name: "Register",
    initialState,
    reducers: {

    },
    extraReducers: {
        [AddUserApi.pending.toString()]: (state) => {
            state.isLoading = true;
        },
        [AddUserApi.fulfilled.toString()]: (state, action: PayloadAction<Register>) => {
            state.isLoading = false
            state.registerDetails = action?.payload
        },
        [AddUserApi.rejected.toString()]: (state) => {
            state.isLoading = false;
        },
        [getProfile.pending.toString()]: (state) => {
            state.isLoading = true;
        },
        [getProfile.fulfilled.toString()]: (
            state,
            action: PayloadAction<Array<Profile>>
        ) => {
            state.isLoading = false;
            state.profileData = action?.payload;
        },
        [getProfile.rejected.toString()]: (state) => {
            state.isLoading = false;
        },
    },
});

export default RegisterSlice.reducer;
