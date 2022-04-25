export interface StreamList {
  id: string;
  division_id: string;
  name: string;
  icon: string;
  created_at: string;
  updated_at: string;
  status: string;
}

export interface SelectedStreamType {
  streamID: string;
}

export interface GetTest {
  test_ID: string;
  test_name: string;
  stream_id?: string;
  stream_name?: string;
  test_level: string;
  test_level_id: string;
}

export interface SelectedTest {
  testID: string;
}

export interface GetLevel {
  id: string;
  test_level: string;
  flag: string;
  created_at: string;
  modified_at: string;
}

export interface SelectedLevel {
  test_level: string;
}

export interface QuestionType {
  question_ID: string;
  question: string;
  question_no: string;
  answer: string;
  test_ID: string;
  test_name: string;
  cat_id: string;
  cat_name: string;
  stream_id: string;
  stream_name: string;
}
export interface CreatetestByStream {
  streamID: string;
}

export interface InitialState {
  isLoading: boolean;
  streamMaster: Array<StreamList>;
  selectStream: SelectedStreamType;
  getTest: Array<GetTest>;
  questions: Array<QuestionType>;
  levelsData: Array<GetLevel>;
  uselectedStream: CreatetestByStream;
  testID: SelectedTest;
  level: SelectedLevel;
}
