import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddUserApi, getCountries, getProfile, getStates } from "./api";
import {
    Countries,
    InitialState, Profile, Register, StatesResponse,
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
    profileData: [],
    countryData: [],
    stateData: []
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
        [getCountries.pending.toString()]: (state) => {
            state.isLoading = true;
        },
        [getCountries.fulfilled.toString()]: (
            state,
            action: PayloadAction<Array<Countries>>
        ) => {
            state.isLoading = false;
            state.countryData = action?.payload;
        },
        [getCountries.rejected.toString()]: (state) => {
            state.isLoading = false;
        },
        [getStates.pending.toString()]: (state) => {
            state.isLoading = true;
        },
        [getStates.fulfilled.toString()]: (
            state,
            action: PayloadAction<Array<StatesResponse>>
        ) => {
            state.isLoading = false;
            state.stateData = action?.payload;
        },
        [getStates.rejected.toString()]: (state) => {
            state.isLoading = false;
        },
    },
});

export default RegisterSlice.reducer;
