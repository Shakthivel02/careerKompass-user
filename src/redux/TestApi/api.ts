import { createAsyncThunk } from "@reduxjs/toolkit";
import apiEndpoints from "../../const/apiEndpoints";
import api from "../../services";
import { TestPayload } from "./types";

export const postAnswer = createAsyncThunk(
  "question/PostAnswers",
  async (requestPayload: TestPayload): Promise<TestPayload> => {
    const response = await api.post(apiEndpoints.PostAnswers, requestPayload);
    return response.data;
  }
);
