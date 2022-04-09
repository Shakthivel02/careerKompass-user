import { createAsyncThunk } from "@reduxjs/toolkit";
import apiEndpoints from "../../const/apiEndpoints";
import api from "../../services";
import {
  GetLevel,
  GetTest,
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
