import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetQuestionByTest, handleStreamMaster, SelectedStream } from "./api";
import {
  GetTest,
  InitialState,
  QuestionType,
  StreamList,
} from "./types";

const initialState: InitialState = {
  isLoading: false,
  streamMaster: [],
  selectStream: {
    streamID: "",
  },
  questions: [],
  getTest: [],
};
export const streamSlice = createSlice({
  name: "streamMaster",
  initialState,
  reducers: {
    updateHasError: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: {
    [handleStreamMaster.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [handleStreamMaster.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<StreamList>>
    ) => {
      state.isLoading = false;
      state.streamMaster = action?.payload;
    },
    [handleStreamMaster.rejected.toString()]: (state) => {
      state.isLoading = false;
    },
    [SelectedStream.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [SelectedStream.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<GetTest>>
    ) => {
      state.isLoading = false;
      state.getTest = action?.payload;
    },
    [SelectedStream.rejected.toString()]: (state) => {
      state.isLoading = false;
    },
    [GetQuestionByTest.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [GetQuestionByTest.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<QuestionType>>
    ) => {
      state.isLoading = false;
      state.questions = action?.payload;
    },
    [GetQuestionByTest.rejected.toString()]: (state) => {
      state.isLoading = false;
    },
  },
});

export default streamSlice.reducer;
