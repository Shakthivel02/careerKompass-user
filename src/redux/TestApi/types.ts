export interface SelectedAnswers {
  id: string;
  answer: string;
}

export interface InitialState {
  isLoading: boolean;
  AnswerList: Array<SelectedAnswers>;
}
