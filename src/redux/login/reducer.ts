import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { handleAuthenticate, handleLogout } from "./api";
import { initialState } from "./types";

export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    updateHasError: (state, action: PayloadAction<boolean>) => {
      state.hasError = action.payload;
    },
    updateUserName: (state, action: PayloadAction<string>) => {
      state.email = action.payload; 
    },
    updatePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    }, 
  },
  extraReducers: {
    [handleAuthenticate.pending.toString()]: (state) => {
      state.hasError = false;
      state.isLoading = true;
    },
    [handleAuthenticate.fulfilled.toString()]: (state, action) => {
      state.isLoading = false;
      state.hasError = !action.payload;
      state.isLoggedIn = true;
      state.userInfo = action.payload;
    },
    [handleAuthenticate.rejected.toString()]: (state) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.hasError = true;
    },
    [handleLogout.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [handleLogout.fulfilled.toString()]: (state) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.userInfo = null;
    },
    [handleLogout.rejected.toString()]: (state) => {
      state.isLoading = false;
    },
  },
});

export default loginSlice.reducer;
