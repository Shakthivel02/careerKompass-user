export interface SelectedAnswers {
  questionId: string;
  answer: string;
}

export interface InitialState {
  isLoading: boolean;
  AnswerList: Array<SelectedAnswers>;
}
