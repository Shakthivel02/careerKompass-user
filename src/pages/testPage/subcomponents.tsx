import { ReactElement, useState } from "react";
import styled from "styled-components";
import { QuestionSectionProps } from "./typings";
import { SelectedAnswers } from "../../redux/TestApi/types";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { useHistory } from "react-router-dom";
import { ActionButton, FlexWrapper, UserHeader } from "../../components";
import { Button } from "react-bootstrap";
import log from "../../assests/aero.png";
import ROUTES from "../../const/routes";
import { postAnswer } from "../../redux/TestApi/api";
import { getTestId } from "../../helpers/dropdown";

export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #fff2e1;
  height: 100px;
  #logoWrapper {
    dispaly: flex;
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
`;

const OptoinList = styled.div`
  background-color: #f7f3f3;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #000124;
  text-align: center;
  align-items: center;
  font-size: 12px;
  font-weight: 1000;
  padding: 0.6rem 7rem 0.6rem 1.2rem;
  text-transform: capitalize;
  box-shadow: 0px 1px 4px lightgray;
  opacity: 1;
  cursor: pointer;
  ${Optoins}:hover & {
    background: #c5c5ff;
  }
`;

const Span = styled.div`
  color: #000124;
  opacity: 1;
  font-weight: 700;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  font-size: 12px;
  background-color: #e6e3e3;
  text-align: center;
  box-shadow: 0px 1px 4px lightgray;
  padding: 0.6rem 0.9rem 0.6rem 0.9rem;
  ${Optoins}:hover & {
    background: #3335cf;
    color: white;
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
`;

export const QuestionSection = ({
  data,
  activeQuestions,
  quesId,
  onSetActiveQuestion,
}: QuestionSectionProps): ReactElement => {
  const history = useHistory();
  const { selectedAnswers, TestId, UserId, level } = useSelector(
    (state: RootState) => ({
      selectedAnswers: state.Test.AnswerList as SelectedAnswers,
      TestId: state.stream.questions,
      UserId: state.login.userInfo,
      level: state.stream.level.test_level,
    }),
    shallowEqual
  );
  const [selected, setSelected] = useState(selectedAnswers);
  console.log(selected);
  const dispatch = useDispatch();
  const TestID = TestId ? getTestId(TestId) : [];
  const [TESTID] = TestID.map((x) => {
    return x.id;
  });
  const [TestName] = TestID.map((x) => {
    return x.name;
  });

  const [buttonValue, SetbuttonValue] = useState("Next");
  const [color, setColor] = useState({
    option: "",
    span: { back: "", text: "" },
  });
  const [Acolor, setAColor] = useState({
    option: "",
    span: { back: "", text: "" },
  });
  const nextClickHandle = () => {
    setColor({ option: "", span: { back: "", text: "" } });
    setAColor({ option: "", span: { back: "", text: "" } });
    if (data.length > activeQuestions + 1) {
      onSetActiveQuestion(activeQuestions + 1);
    } else {
      onSetActiveQuestion(0);
    }
    if (quesId[activeQuestions] === quesId[data.length - 2]) {
      SetbuttonValue("Submit");
    }
    if (quesId[activeQuestions] === quesId[data.length - 1]) {
      dispatch(
        postAnswer({
          UserId: UserId?.userId,
          categoryID: "",
          TestID: TESTID,
        })
      );
      history.push(ROUTES.RESULTCOPY);
    }
  };
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
          <Optoins>
            <Span
              style={{
                backgroundColor: Acolor.span.back,
                color: Acolor.span.text,
              }}
            >
              A
            </Span>
            <OptoinList
              onClick={() => {
                setAColor({
                  option: "#c5c5ff",
                  span: { back: "#3335cf", text: "white" },
                });
              }}
              style={{ backgroundColor: Acolor.option }}
            >
              True
            </OptoinList>
          </Optoins>
          <Optoins>
            <Span
              style={{
                backgroundColor: color.span.back,
                color: color.span.text,
              }}
            >
              B
            </Span>
            <OptoinList
              onClick={() => {
                setColor({
                  option: "#c5c5ff",
                  span: { back: "#3335cf", text: "white" },
                });
              }}
              style={{ backgroundColor: color.option }}
            >
              False
            </OptoinList>
          </Optoins>
        </TestWrapper>
        <FlexWrapper justifyContent="center" noPadding>
          <SubmitButton onClick={nextClickHandle}>{buttonValue}</SubmitButton>
        </FlexWrapper>
      </QuestionContainer>
    </PageWrapper>
  );
};
