import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiEndpoints from "../../const/apiEndpoints";
import api from "../../services";
import {
  GetLevel,
  GetTest,
  opt,
  QuestionType,
  SelectedStreamType,
  SelectedTest,
  StreamList,
} from "./types";

export const handleStreamMaster = createAsyncThunk(
  "streamMaster/getstreamMaster",
  async (): Promise<Array<StreamList>> => {
    const response = await api.get(apiEndpoints.getStream);
    return response.data.message;
  }
);

export const SelectedStream = createAsyncThunk(
  "test/GetTestByStream",
  async (requestPayload: SelectedStreamType): Promise<GetTest> => {
    const response = await api.post(
      `${apiEndpoints.GetTestByStream}`,
      requestPayload
    );

    return response.data.message;
  }
);

export const GetQuestionByTest = createAsyncThunk(
  "test/GetTestByTest",
  async (requestPayload: SelectedTest): Promise<QuestionType> => {
    const response = await api.post(
      apiEndpoints.GetQuestionByTest,
      requestPayload
    );
    return response.data.message;
  }
);

export const getLevel = createAsyncThunk(
  "level/GetLevel",
  async (): Promise<Array<GetLevel>> => {
    const response = await api.get(apiEndpoints.getLevel);
    return response.data.message;
  }
);

const link = axios.create({
  baseURL: 'https://http.myvfirst.com/'
});

export const getOTP = createAsyncThunk(
  'opt/g',
  async ({
    from,
    text,
    username,
    password,
    to,
    token,
    dlrmask,
  }: opt): Promise<any> => {
    const response = await link.post(`${apiEndpoints.otp}?username=${username}&password=${password}&to=${to}&from=${from}&text=${text}&token=${token}&dlr-mask=${dlrmask}&dlr-url`)
    return response?.data
  }
)