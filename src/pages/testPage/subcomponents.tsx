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
  .span {
    &:hover {
      background-color: #3335cf;
      color: #ffffff;
    }
  }
  .options {
    &:hover {
      background-color: #c5c5ff;
    }
  }
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
            <Logo src={log} /> Aeronautical - Product Head
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
            <Span className="span">A</Span>
            <OptoinList
              onClick={() => {
                onSetActiveQuestion(activeQuestions + 1);
              }}
              className="options"
            >
              {" "}
              True{" "}
            </OptoinList>
          </Optoins>
          <Optoins>
            <Span className="span">B</Span>
            <OptoinList
              onClick={() => {
                onSetActiveQuestion(activeQuestions + 1);
              }}
              className="options"
            >
              False
            </OptoinList>
          </Optoins>
        </TestWrapper>
        <FlexWrapper justifyContent="center" noPadding>
          <SubmitButton
            onClick={() => {
              history.push(ROUTES.RESULT);
            }}
          >
            Submit
          </SubmitButton>
        </FlexWrapper>
      </QuestionContainer>
    </PageWrapper>
  );
};
