export interface SelectedAnswers {
  UserId?: string;
  categoryID: string;
  TestID: string;
}

export interface InitialState {
  isLoading: boolean;
  AnswerList: SelectedAnswers;
}
