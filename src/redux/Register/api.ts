import { createAsyncThunk } from "@reduxjs/toolkit"
import apiEndpoints from "../../const/apiEndpoints"
import api from "../../services"
import {
  Countries,
  CountryId,
  CountryPin,
  Profile,
  Register,
  StatesPayload,
  StatesResponse,
} from "./types";

export const AddUserApi = createAsyncThunk(
  "user/addUser",
  async (requestData: Register): Promise<Register> => {
    const response = await api.post(apiEndpoints.addUser, requestData);
    return response?.data;
  }
);

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (): Promise<Array<Profile>> => {
    const response = await api.get(apiEndpoints.getProfile);
    return response.data.message;
  }
);

export const getCountries = createAsyncThunk(
  "country/getCountry",
  async (): Promise<Array<Countries>> => {
    const response = await api.get(apiEndpoints.getCountries);
    return response.data.message;
  }
);

export const getStates = createAsyncThunk(
  "state/getState",
  async (requestPayload: StatesPayload): Promise<StatesResponse> => {
    const response = await api.post(`${apiEndpoints.getState}`, requestPayload);

    return response.data.message;
  }
);

export const getCountryPin = createAsyncThunk(
  "country/getCountryPin",
  async (requestPayload: CountryId): Promise<Array<CountryPin>> => {
    const response = await api.post(
      `${apiEndpoints.getCountryPin}`,
      requestPayload
    );

    return response.data.message;
  }
);