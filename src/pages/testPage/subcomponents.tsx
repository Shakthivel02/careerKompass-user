import { ReactElement, useState, ChangeEvent } from "react";
import {
  PageWrapper,
  FlexWrapper,
  ActionButton,
  CardWrapper,
} from "../../components";
import styled from "styled-components";
import { QuestionSectionProps } from "./typings";
import fonts from "../../const/fonts";
import { H4 } from "../../typography";
import { SelectedAnswers } from "../../redux/TestApi/types";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { useHistory } from "react-router-dom";
import ROUTES from "../../const/routes";
import { postAnswer } from "../../redux/TestApi/api";

export const ChoiceWrapper = styled.span`
  font-size: ${fonts.xLarge};
  margin-left: 6px;
`;

export const RadioInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const H2 = styled.p`
  text-align: center;
  font-size: 20px;
`;

export const QuestionSection = ({
  data,
  activeQuestions,
  quesId,
  onSetActiveQuestion,
}: QuestionSectionProps): ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { selectedAnswers } = useSelector(
    (state: RootState) => ({
      selectedAnswers: state.Test.AnswerList as Array<SelectedAnswers>,
    }),
    shallowEqual
  );
  const [selected, setSelected] = useState(selectedAnswers);
  const [buttonValue, SetbuttonValue] = useState("Next");
  console.log();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const isQuesIncluded = selected.some(
      (item) => item?.id === `${quesId[activeQuestions]}`
    );

    if (isQuesIncluded) {
      const updatedSelection = selected.map((item) => {
        if (item?.id === `${quesId[activeQuestions]}`) {
          return {
            answer: e.target.value,
            id: `${quesId[activeQuestions]}`,
          };
        }
        return item;
      });
      setSelected(updatedSelection);
    } else {
      setSelected([
        ...selected,
        {
          answer: e.target.value,
          id: `${quesId[activeQuestions]}`,
        },
      ]);
    }
  };

  const selectedQuestion = selected.filter(
    (item) => item?.id === `${quesId[activeQuestions]}`
  );
  const answer = selectedQuestion.length > 0 ? selectedQuestion[0].answer : "";
  console.log(selected);

  const nextClickHandle = () => {
    if (data.length > activeQuestions + 1) {
      onSetActiveQuestion(activeQuestions + 1);
    } else {
      onSetActiveQuestion(0);
    }
    if (quesId[activeQuestions] === data.length - 1) {
      SetbuttonValue("Submit");
    }
    if (quesId[activeQuestions] === data.length) {
      dispatch(postAnswer(selected));
      history.push(ROUTES.RESULT);
    }
  };

  return (
    <PageWrapper>
      <FlexWrapper justifyContent="center">
        <CardWrapper  >
          <FlexWrapper justifyContent="center">
            <H4 color="rgb(36,46,111)">
              Question No. {quesId[activeQuestions]}
            </H4>
          </FlexWrapper>
          <FlexWrapper justifyContent="center" marginTop={-4}>
            <H2>{data[activeQuestions]}</H2>
          </FlexWrapper>
          {/* INPUT */}
          <RadioInputWrapper>
            <FlexWrapper justifyContent="center" marginTop={-4}>
              <label>
                <input
                  type="radio"
                  value={"True"}
                  name="answer"
                  checked={answer === "True"}
                  onChange={changeHandler}
                />
                <ChoiceWrapper>True</ChoiceWrapper>
              </label>
            </FlexWrapper>
            <FlexWrapper justifyContent="center" marginTop={-4}>
              <label>
                <input
                  type="radio"
                  value={"False"}
                  name="answer"
                  checked={answer === "False"}
                  onChange={changeHandler}
                />
                <ChoiceWrapper>False</ChoiceWrapper>
              </label>
            </FlexWrapper>
          </RadioInputWrapper>
          {/* INPUT  */}
          <FlexWrapper justifyContent="center">
            <ActionButton onClick={nextClickHandle}>{buttonValue}</ActionButton>
          </FlexWrapper>
        </CardWrapper>
      </FlexWrapper>
    </PageWrapper>
  );
};
