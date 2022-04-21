import { ReactElement, useEffect, useState } from "react";
import { EditableDropdown, FlexWrapper, UserHeader } from "../../components";
import {
  Body,
  ContainerWrapper,
  DropdownWrapper,
  Header1,
  Header2,
  LeftBack,
  StreamHeader,
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
import { validateUsername } from "../../helpers/formValidation";

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
  }, [stream]);

  return (
    <ContainerWrapper>
      <LeftBack></LeftBack>
      <UserHeader />
      <Body>
        <Header1>What do you aspire</Header1>
        <Header2>to become in next five years?</Header2>
        <StreamWrapper>
          <StreamHeader>
            Select Stream &<br></br> Level to Take test
          </StreamHeader>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={StreamDropdown}
              placeholder={"Select Stream"}
              handleSelect={(value: DropdownListProps) => {
                setStream({ streamID: value?.id });
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={LevelDropdown}
              placeholder={"Select Level"}
              handleSelect={(value: DropdownListProps) => {
                setTestID({ testID: value?.id });
              }}
            />
          </DropdownWrapper>
        </StreamWrapper>
      </Body>
      <FlexWrapper justifyContent="center" noPadding>
        <TestButton
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
