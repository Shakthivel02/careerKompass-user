import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { postAnswer } from "./api";
import { InitialState } from "./types";

const initialState: InitialState = {
  isLoading: false,
  TestPayload: {
    testID: "",
    userID: "",
    answer: [],
  },
  AnswerList: [],
};
export const TestSlice = createSlice({
  name: "Test",
  initialState,
  reducers: {
    updateHasError: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
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
