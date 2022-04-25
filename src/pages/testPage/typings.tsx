import { Dispatch, SetStateAction } from "react";

export interface QuestionSectionProps {
  data: Array<any>;
  activeQuestions: number;
  quesId: Array<string>;
  onSetActiveQuestion: Dispatch<SetStateAction<number>>;
}
