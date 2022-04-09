import { createAsyncThunk } from "@reduxjs/toolkit"
import apiEndpoints from "../../const/apiEndpoints"
import api from "../../services"
import { Profile, Register } from "./types"

export const AddUserApi = createAsyncThunk(
    'user/addUser',
    async (requestData: Register): Promise<Register> => {
        const response = await api.post(apiEndpoints.addUser,requestData)
        return response?.data
    }
)

export const getProfile = createAsyncThunk(
    "profile/getProfile",
    async (): Promise<Array<Profile>> => {
      const response = await api.get(apiEndpoints.getProfile);
      return response.data.message;
    }
  );