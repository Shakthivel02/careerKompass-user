import { createAsyncThunk } from "@reduxjs/toolkit";
import apiEndpoints from "../../const/apiEndpoints";
import api from "../../services";
import { RootState } from "../store";
import { UserInfo } from "./types";

export const handleAuthenticate = createAsyncThunk(
  "user/login",
  async (_undefined, { getState }): Promise<UserInfo> => {
    const {
      login: { email, password },
    } = getState() as RootState;

    const data = {
      email: email,
      password: password,
    };
    const response = await api.post(apiEndpoints.login, data);
    const userInfo = response.data;

    return userInfo;
  }
);

export const handleLogout = createAsyncThunk(
  "user/logout",
  async (_undefined, { getState }): Promise<string> => {
    const {
      login: { userInfo },
    } = getState() as RootState;

    const data = {
      id: userInfo?.userId,
    };
    const response = await api.post(apiEndpoints.logout, data.id);

    return response?.data;
  }
);
