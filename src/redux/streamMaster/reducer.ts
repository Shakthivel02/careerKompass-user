import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLevel, GetQuestionByTest, handleStreamMaster, SelectedStream } from "./api";
import {
  CreatetestByStream,
  GetLevel,
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
  levelsData: [],
  uselectedStream: {
    streamID: "",
  },
  testID: {
    testID: "",
  },
};
export const streamSlice = createSlice({
  name: "streamMaster",
  initialState,
  reducers: {
    updateSelectedStream: (state, action: PayloadAction<CreatetestByStream>) => {
      state.uselectedStream = action?.payload
    },
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
    [getLevel.pending.toString()]: (state) => {
      state.isLoading = true;
  },
  [getLevel.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<GetLevel>>
  ) => {
      state.isLoading = false;
      state.levelsData = action?.payload;
  },
  [getLevel.rejected.toString()]: (state) => {
      state.isLoading = false;
  },
  },
});

export default streamSlice.reducer;
