import { ReactElement, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { QuestionSection } from "./subcomponents";
import { data } from "./const";


const TestPage = (): ReactElement => {
  const { questionList } = useSelector(
    (state: RootState) => ({
      questionList: state.stream.questions,
    }),
    shallowEqual
  );
  const [activeQuestions, setActiveQuestion] = useState(0);
  const quesNo = data.map((quesId) => quesId.id);
  const question = data.map((ques) => ques.question);

  const questionData = questionList.map((question) => question.question);

  return (
    <QuestionSection
      data={questionData}
      quesId={quesNo}
      activeQuestions={activeQuestions}
      onSetActiveQuestion={setActiveQuestion}
    />
  );
};

export default TestPage;
