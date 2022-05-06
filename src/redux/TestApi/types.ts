export interface SelectedAnswers {
  questionId: string;
  ans: string;
}

export interface TestPayload {
  testID: string;
  userID?: string;
  answer: Array<SelectedAnswers>;
}

export interface UserResponce {
  id?: string;
  user_name?: string;
  last_name?: string;
  email?: string;
}
export interface CategoryResponce {
  id?: string;
  name?: string;
  course?: string;
}

export interface ToolsResponce {
  cat_tools_id?: string;
  cat_id?: string;
  tool?: string;
  tool_id?: string;
}

export interface TestResponce {
  user: Array<UserResponce>;
  cat: Array<CategoryResponce>;
  tools: Array<ToolsResponce>;
}

export interface InitialState {
  isLoading: boolean;
  TestPayload: TestPayload;
  AnswerList: Array<SelectedAnswers>;
  TestResponce: TestResponce;
}
