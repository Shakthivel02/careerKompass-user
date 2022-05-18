import { Dispatch, SetStateAction } from "react";
import { OptionProps } from "../../redux/streamMaster/types";

export interface QuestionSectionProps {
  data: Array<any>;
  activeQuestions: number;
  quesId: Array<string>;
  isMultiOption: Array<boolean>;
  options: Array<OptionProps>;
  onSetActiveQuestion: Dispatch<SetStateAction<number>>;
}
