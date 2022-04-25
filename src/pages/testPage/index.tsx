import { ReactElement, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { QuestionSection } from "./subcomponents";



const TestPage = (): ReactElement => {
  const { questionList } = useSelector(
    (state: RootState) => ({
      questionList: state.stream.questions,
    }),
    shallowEqual
  );
  const [activeQuestions, setActiveQuestion] = useState(0);
  const questionData = questionList.map((question) => question.question);
  const questionNo = questionList.map((question) => question.question_ID);

  return (
    <QuestionSection
      data={questionData}
      quesId={questionNo}
      activeQuestions={activeQuestions}
      onSetActiveQuestion={setActiveQuestion}
    />
  );
};

export default TestPage;
