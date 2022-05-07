import { ReactElement, useEffect, useState } from "react";
import {
  EditableDropdown,
  FlexWrapper,
  PageWrapper,
  UserHeader,
} from "../../components";
import {
  Body,
  ContainerWrapper,
  DropdownWrapper,
  Header1,
  Header2,
  LeftBack,
  LevelCard,
  Para,
  StreamWrapper,
  TestButton,
} from "./subcomponent";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getLevelsDropdown, getStreamDropdown } from "../../helpers/dropdown";
import { RootState } from "../../redux/store";
import {
  GetQuestionByTest,
  handleStreamMaster,
  SelectedStream,
} from "../../redux/streamMaster/api";
import { useHistory } from "react-router-dom";
import ROUTES from "../../const/routes";
import { DropdownListProps } from "../../components/Dropdown/typings";
import { updateSelectedLevel } from "../../redux/streamMaster/action";

const StreamSelection = (): ReactElement => {
  const { streamList, levelData, SelectStream, TestId } = useSelector(
    (state: RootState) => ({
      streamList: state.stream.streamMaster,
      levelData: state.stream.getTest,
      SelectStream: state.stream.selectStream,
      TestId: state.stream.testID,
    }),
    shallowEqual
  );
  const StreamDropdown = streamList ? getStreamDropdown(streamList) : [];
  const LevelDropdown = levelData ? getLevelsDropdown(levelData) : [];

  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(handleStreamMaster());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [stream, setStream] = useState(SelectStream);
  const [TestID, setTestID] = useState(TestId);

  useEffect(() => {
    dispatch(SelectedStream(stream));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stream]);

  const [show, setShow] = useState(false);
  const canSave = stream?.streamID;

  return (
    <ContainerWrapper>
      <LeftBack></LeftBack>
      <UserHeader />
      <Body>
        <Header1>Are you all set?</Header1>
        <FlexWrapper justifyContent="center">
          <Para>
            Unlock new quests and know more about your uniqueness by answering
            Careerkompass’s alternative-response questions. This quick
            assessment measures your traits, interests, and skills in key areas.
            Follow your heart and choose the answers, your choices pave the way
            towards your ideal career based on your job role with our
            personalized guide.
          </Para>
        </FlexWrapper>
        <Header2>Select your desired Stream and choose level</Header2>
        <StreamWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={StreamDropdown}
              placeholder={"Select Stream"}
              handleSelect={(value: DropdownListProps) => {
                setStream({ streamID: value?.id });
                setShow(true);
              }}
            />
          </DropdownWrapper>
        </StreamWrapper>
        {show ? (
          <PageWrapper>
            <FlexWrapper justifyContent="center">
              <Header2 fontSize="14px">
                Select The Career Roadmap According To Your Level Of Experience
              </Header2>
            </FlexWrapper>
            <FlexWrapper justifyContent="center" noPadding>
              {LevelDropdown.map((x) => {
                if (x.name === "expert") {
                  return (
                    <LevelCard
                      onClick={() => {
                        setTestID({ testID: x.id });
                        dispatch(updateSelectedLevel({ test_level: x.name }));
                      }}
                    >
                      {x.name}
                      <br />
                      <span style={{ fontSize: "12px" }}>
                        (1-3 year experience)
                      </span>
                    </LevelCard>
                  );
                } else {
                  return (
                    <LevelCard
                      onClick={() => {
                        setTestID({ testID: x.id });
                      }}
                    >
                      {x.name}
                      <br />
                      <span style={{ fontSize: "12px" }}>
                        (3+ year experience)
                      </span>
                    </LevelCard>
                  );
                }
              })}
            </FlexWrapper>
          </PageWrapper>
        ) : null}
      </Body>
      <FlexWrapper justifyContent="center" height={80}>
        <TestButton
        variant='secondary'
          disabled={!canSave}
          onClick={() => {
            dispatch(GetQuestionByTest({ testID: TestID.testID }));
            history.push(ROUTES.TEST);
          }}
        >
          Take Assement
        </TestButton>
      </FlexWrapper>
    </ContainerWrapper>
  );
};

export default StreamSelection;
