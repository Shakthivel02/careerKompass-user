import { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { QuestionSectionProps } from "./typings";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { useHistory } from "react-router-dom";
import { ActionButton, FlexWrapper, UserHeader } from "../../components";
import { Button, Col, Row } from "react-bootstrap";
import ROUTES from "../../const/routes";
import { postAnswer } from "../../redux/TestApi/api";
import { getTestId } from "../../helpers/dropdown";
import { SelectedAnswers } from "../../redux/TestApi/types";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Background from "../../assests/testHeader.svg";
import { alphabet } from "./const";

export const FlexWrap = styled.div`
  display: flex;
  background: url(${Background});
  background-position: center;
  background-size: 1000px;
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
  padding?: boolean;
  color?: string;
  paddingRight?: boolean;
}
const Bold = styled.p<bold>`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "700")};
  color: #3335cf;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "21px")};
  color: ${({ color }) => (color ? `${color}` : "#000124")};
  font-family: "Montserrat", sans-serif;
  margin: auto 0;
  padding: ${({ padding }) => (padding ? "14px" : "0")};
  padding-right: ${({ paddingRight }) => (paddingRight ? "190px" : "0")};
  @media (max-width: 900px) {
    font-size: 14px;
    width: 100%;
    padding-left: 4%;
  }
`;
const QuestionContainer = styled.div`
  width: 70%;
  background-color: #fcfcff;
  padding-left: 7%;
`;
const QuestionNo = styled.span`
  font-weight: 700;
  color: #0f1043;
  font-size: 16px;
  margin-left: 8px;
  font-family: "Montserrat", sans-serif;
  opacity: 0.6;
`;

const TestWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  padding-left: 8%;
  font-family: "Montserrat", sans-serif;
`;

const Optoins = styled.div`
  display: flex;
  width: 70%;
  align-items: center;
  @media (max-width: 900px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 30px;
  }
`;

const OptionButton = styled(Button)`
  background: linear-gradient(90deg, #0000001a 20%, #fcfcff 20%);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: none;
  color: #000124;
  width: 80%;
  font-size: 12px;
  font-weight: 400;
  padding: 10px;
  box-shadow: 0px 1px 4px lightgray;
  opacity: 1;
  cursor: pointer;
  &:hover,
  &:active,
  &:focus {
    color: black;
    background: linear-gradient(90deg, #3335cf 20%, #c5c5ff 20%);
  }
  @media (max-width: 900px) {
    background: linear-gradient(90deg, #0000001a 20%, #fcfcff 20%);
    padding: 6px;
    width: 80%;
  }
`;

const SubmitButton = styled(Button)`
  height: 35px;
  width: 18%;
  background: #ff7b00;
  border: none;
  float: right;
  font-size: 14px;
  color: #ffffff;
  opacity: 1;
  font-family: "Montserrat", sans-serif;
  margin-top: 7%;
  margin-right: 20%;
  &:hover,
  &:active,
  &:focus {
    background: #ff7b00 0% 0% no-repeat padding-box;
  }
  @media (max-width: 900px) {
    font-size: 12px;
    margin-right: 16%;
  }
`;

export const Logo = styled.img`
  width: 12%;
  float: left;
  @media (max-width: 600px) {
    width: 10%;
  }
`;

export const OptionText = styled.span`
  align-self: center;
  @media (max-width: 900px) {
    font-size: 10px;
  }
`;

export const Option = styled.span`
  float: left;
  display: flex;
  justify-content: center;
  width: 10%;
  ${OptionButton}:hover & {
    color: white;
  }
  ${OptionButton}:focus & {
    color: white;
  }
  @media (max-width: 800px) {
    font-size: 10px;
  }
`;

/*-----------------Circular bar----------------- */

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 74%;
`;

export const PageDivideWrapper = styled.div`
  width: 70%;
`;
export const ProgressDivider = styled.div`
  width: 30%;
  background-color: #f6f6fe;
`;

export const ProgessWrapper = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 30% auto;
  @media (min-width: 749px) {
    width: 53%;
  }
`;

export const Progess = styled(CircularProgressbar)`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
`;

export const QuestionSection = ({
  data,
  activeQuestions,
  quesId,
  isMultiOption,
  options,
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
      } else {
        dispatch(postAnswer(FinalPayload));
        history.push(ROUTES.RESULTCOPY);
      }
    }
  };

  useEffect(() => {
    setFinalPayload({ testID: Testid, userID: userId, answer: selectedAnswer });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAnswer]);

  return (
    <PageWrapper>
      <UserHeader />
      <FlexWrap>
        <Bold paddingRight>
          Your brightest path is out there. Get started!!
        </Bold>
        <div id="logoWrapper">
          <ActionButton
            id="logoWrapper"
            marginTop="32"
            backgroundColor="#3335CF"
          >
            {TestName} - {level}
          </ActionButton>
        </div>
      </FlexWrap>
      <ContentWrapper>
        <QuestionContainer>
          <Bold fontSize="16" padding>
            Question <QuestionNo>{`${activeQuestions + 1} of 16`}</QuestionNo>
          </Bold>
          <FlexWrapper>
            <Bold fontWeight="500" fontSize="15" padding>
              {activeQuestions + 1}. {data[activeQuestions]}
            </Bold>
          </FlexWrapper>
          {(isMultiOption[activeQuestions] == false && (
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
          )) || (
            <Row xs={2} md={2}>
              {options?.map((opt, i) => (
                <Col style={{ padding: "2%" }}>
                  <Optoins
                    onClick={(e) => {
                      changeHandler(e);
                    }}
                  >
                    <OptionButton value={opt.option}>
                      <Option>{alphabet[i]}</Option>
                      <OptionText>{opt.option}</OptionText>
                    </OptionButton>
                  </Optoins>
                </Col>
              ))}
            </Row>
          )}

          <SubmitButton onClick={nextClickHandle}>{buttonValue}</SubmitButton>
        </QuestionContainer>
        <ProgressDivider>
          <ProgessWrapper>
            <Progess
              value={data.length * activeQuestions + 1}
              text={`${data.length * activeQuestions + 1}% completed`}
              strokeWidth={6}
              styles={buildStyles({
                textColor: "#003B0A",
                textSize: "6px",
                pathColor: "green",
                trailColor: "lightgreen",
                strokeLinecap: "butt",
              })}
            />
          </ProgessWrapper>
        </ProgressDivider>
      </ContentWrapper>
    </PageWrapper>
  );
};
