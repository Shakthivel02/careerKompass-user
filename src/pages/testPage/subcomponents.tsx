import { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { QuestionSectionProps } from "./typings";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { useHistory } from "react-router-dom";
import { ActionButton, FlexWrapper, UserHeader } from "../../components";
import { Button } from "react-bootstrap";
import log from "../../assests/aero.png";
import ROUTES from "../../const/routes";
import { postAnswer } from "../../redux/TestApi/api";
import { getTestId } from "../../helpers/dropdown";
import { SelectedAnswers } from "../../redux/TestApi/types";

export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #fff2e1;
  height: 100px;
  #logoWrapper {
    display: flex;
  }
`;

export const PageWrapper = styled.div`
  width: 100%;
`;

interface bold {
  fontSize?: string;
  fontWeight?: string;
}
const Bold = styled.p<bold>`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "700")};
  color: #0f1043;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "20px")};
  font-family: Tahoma, Helvetica, sans-serif;
  padding-top: 3%;
  padding-right: 2%;
  @media (max-width: 600px) {
    font-size: 12px;
    width: 60%;
    margin-left:5%;
  }
`;
const QuestionContainer = styled.div`
  width: 70%;
  margin-left: 12%;
`;
const QuestionNo = styled.span`
  font-weight: 700;
  color: #0f1043;
  font-size: 16px;
  margin-left: 8px;
  font-family: Tahoma, Helvetica, sans-serif;
  opacity: 0.6;
`;

const TestWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 80%;
  height: 100px;
  font-family: "Montserrat", sans-serif;
`;

const Optoins = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const OptionButton = styled(Button)`
  background: linear-gradient(90deg, #0000001a 20%, #fcfcff 20%);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: none;
  color: #000124;
  width: 50%;
  font-size: 12px;
  font-weight: 1000;
  padding: 0.6rem 7rem 0.6rem 1.2rem;
  box-shadow: 0px 1px 4px lightgray;
  opacity: 1;
  cursor: pointer;
  &:hover,
  &:active,
  &:focus {
    color: black;
    background: linear-gradient(90deg, #3335cf 20%, #c5c5ff 20%);
  }
  @media (max-width: 600px) {
    margin:0 auto;
  }
`;

const SubmitButton = styled(Button)`
  height: 35px;
  width: 100px;
  background: #ff7b00 0% 0% no-repeat padding-box;
  border: none;
  font-size: 14px;
  color: #ffffff;
  opacity: 1;
  margin-left: 14%;
  margin-top: 4%;
  &:hover,
  &:active,
  &:focus {
    background: #ff7b00 0% 0% no-repeat padding-box;
  }
`;

export const Logo = styled.img`
  width: 12%;
  float: left;
  @media (max-width: 600px) {
    width:10%;
  }
`;

export const OptionText = styled.span`
  float: right;
  @media (max-width: 600px) {
    width: 100%;
   
  }
`;

export const Option = styled.span`
  float: left;
  ${OptionButton}:hover & {
    color: white;
  }
  ${OptionButton}:focus & {
    color: white;
  }
 
`;

export const QuestionSection = ({
  data,
  activeQuestions,
  quesId,
  catID,
  correctAns,
  onSetActiveQuestion,
}: QuestionSectionProps): ReactElement => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { TestId, level, SelectAnswer, TestPayload, userId } = useSelector(
    (state: RootState) => ({
      TestId: state.stream.questions,
      level: state.stream.level.test_level,
      SelectAnswer: state.Test.AnswerList as Array<SelectedAnswers>,
      TestPayload: state.Test.TestPayload,
      userId: state.login.userInfo?.userId,
    }),
    shallowEqual
  );

  //TestId AND TestName
  const TestID = TestId ? getTestId(TestId) : [];
  const [TestName] = TestID.map((x) => {
    return x.name;
  });
  const [Testid] = TestID.map((x) => {
    return x.id;
  });

  //changeEvent
  const [selectedAnswer, setSelectedAnswer] = useState(SelectAnswer);
  const [FinalPayload, setFinalPayload] = useState(TestPayload);

  const changeHandler = (e: any) => {
    const isQuesIncluded = selectedAnswer.some(
      (item) => item?.questionId === `${quesId[activeQuestions]}`
    );

    if (isQuesIncluded) {
      const updatedSelection = selectedAnswer.map((item) => {
        if (item?.questionId === `${quesId[activeQuestions]}`) {
          return {
            questionId: `${quesId[activeQuestions]}`,
            ans: e.target.value,
          };
        }
        return item;
      });
      setSelectedAnswer(updatedSelection);
    } else {
      setSelectedAnswer([
        ...selectedAnswer,
        {
          questionId: `${quesId[activeQuestions]}`,
          ans: e.target.value,
        },
      ]);
    }
  };

  //NextButton
  const [buttonValue, SetbuttonValue] = useState("Next");

  const nextClickHandle = () => {
    if (data.length > activeQuestions + 1) {
      console.log(selectedAnswer[activeQuestions]);

      if (
        selectedAnswer[activeQuestions].ans === undefined ||
        selectedAnswer[activeQuestions] === undefined
      ) {
        alert("please select something");
      } else {
        onSetActiveQuestion(activeQuestions + 1);
      }
    } else {
      onSetActiveQuestion(data.length - 1);
    }
    //Button Value
    if (quesId[activeQuestions] === quesId[data.length - 2]) {
      SetbuttonValue("Submit");
    }
    if (quesId[activeQuestions] === quesId[data.length - 1]) {
      if (
        selectedAnswer[activeQuestions].ans === undefined ||
        selectedAnswer[activeQuestions] === undefined
      ) {
        alert("please select something");
      } else {
        dispatch(postAnswer(FinalPayload));
        history.push(ROUTES.RESULTCOPY);
      }
    }
  };

  useEffect(() => {
    setFinalPayload({ testID: Testid, userID: userId, answer: selectedAnswer });
  }, [selectedAnswer]);
  return (
    <PageWrapper>
      <UserHeader />
      <FlexWrap>
        <Bold>Selected Stream & Level</Bold>
        <div id="logoWrapper">
          <ActionButton
            id="logoWrapper"
            marginTop="30"
            backgroundColor="#3335CF"
          >
            <Logo src={log} /> {TestName} - {level}
          </ActionButton>
        </div>
      </FlexWrap>
      <QuestionContainer>
        <Bold fontSize="16">
          Question <QuestionNo>{`${quesId[activeQuestions]} of 16`}</QuestionNo>
        </Bold>
        <FlexWrapper noPadding>
          <Bold fontWeight="600" fontSize="16">
            {quesId[activeQuestions]}
          </Bold>
          <Bold fontWeight="50" fontSize="16">
            {data[activeQuestions]}
          </Bold>
        </FlexWrapper>
        <TestWrapper>
          <Optoins
            onClick={(e) => {
              changeHandler(e);
            }}
          >
            <OptionButton value="True">
              <Option>A</Option>
              <OptionText>True</OptionText>
            </OptionButton>
          </Optoins>
          <Optoins
            onClick={(e) => {
              changeHandler(e);
            }}
          >
            <OptionButton value="False">
              <Option>B</Option>
              <OptionText>False</OptionText>
            </OptionButton>
          </Optoins>
        </TestWrapper>
        <FlexWrapper justifyContent="center" noPadding>
          <SubmitButton onClick={nextClickHandle}>{buttonValue}</SubmitButton>
        </FlexWrapper>
      </QuestionContainer>
    </PageWrapper>
  );
};
