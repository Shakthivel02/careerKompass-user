export interface SelectedAnswers {
  questionId: string;
  ans: string;
}

export interface TestPayload {
  testID: string;
  userID?: string;
  answer: Array<SelectedAnswers>;
}

export interface InitialState {
  isLoading: boolean;
  TestPayload: TestPayload;
  AnswerList: Array<SelectedAnswers>;
}
