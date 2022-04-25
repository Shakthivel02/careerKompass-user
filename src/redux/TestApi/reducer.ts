import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { postAnswer } from "./api";
import { InitialState, SelectedAnswers } from "./types";

const initialState: InitialState = {
  isLoading: false,
  AnswerList: {
    UserId: "",
    categoryID: "",
    TestID: "",
  },
};
export const TestSlice = createSlice({
  name: "Test",
  initialState,
  reducers: {
    updateHasError: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    updateAnswer: (state, action: PayloadAction<SelectedAnswers>) => {
      state.AnswerList = action.payload;
    },
  },
  extraReducers: {
    [postAnswer.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [postAnswer.fulfilled.toString()]: (state) => {
      state.isLoading = false;
    },
    [postAnswer.rejected.toString()]: (state) => {
      state.isLoading = false;
    },
  },
});

export default TestSlice.reducer;
