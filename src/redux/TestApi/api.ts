import { createAsyncThunk } from "@reduxjs/toolkit";
import apiEndpoints from "../../const/apiEndpoints";
import api from "../../services";
import { SelectedAnswers } from "./types";

export const postAnswer = createAsyncThunk(
  "question/PostAnswers",
  async (requestPayload: Array<SelectedAnswers>): Promise<SelectedAnswers> => {
    const response = await api.post(apiEndpoints.PostAnswers, requestPayload);
    return response.data;
  }
);
