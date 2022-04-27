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
  const catID = questionList.map((question) => question.cat_id);
  const CrtAns = questionList.map((question) => question.answer);

  return (
    <QuestionSection
      data={questionData}
      quesId={questionNo}
      activeQuestions={activeQuestions}
      onSetActiveQuestion={setActiveQuestion}
      catID={catID}
      correctAns={CrtAns}
    />
  );
};

export default TestPage;
