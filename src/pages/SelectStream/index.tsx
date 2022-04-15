import { ReactElement, useEffect, useState } from "react";
import { LevelWrapper, Title } from "./subcomponents";
import {
  PageWrapper,
  FlexWrapper,
  SectionTitle,
  ActionButton,
  Dropdown,
  DropdownWrapper,
} from "../../components";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getLevelsDropdown, getTestPayload } from "../../helpers/dropdown";
import {
  getLevel,
  GetQuestionByTest,
  SelectedStream,
} from "../../redux/streamMaster/api";
import { SelectedStreamType } from "../../redux/streamMaster/types";
import { useHistory } from "react-router-dom";
import ROUTES from "../../const/routes";
import { DropdownListProps } from "./typings";

const SelectStreamLevel = (): ReactElement => {
  const { selectedStream, test, levelData, uselectedStream } = useSelector(
    (state: RootState) => ({
      selectedStream: state.stream.selectStream as SelectedStreamType,
      test: state.stream.getTest,
      levelData: state.stream.levelsData,
      uselectedStream: state.stream.uselectedStream
    }),
    shallowEqual
  );
  const history = useHistory();
  const [values, setValues] = useState(selectedStream);

  const dispatch = useDispatch();
  const [selectedTest] = test ? getTestPayload(test) : [];

  const LevelDrop = levelData ? getLevelsDropdown(levelData) : []

  useEffect(() => {
    dispatch(getLevel());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTakeTest = () => {
    dispatch(GetQuestionByTest(selectedTest));
    history.push(ROUTES.TEST);
  };
  return (
    <PageWrapper>
      <FlexWrapper hasBorder>
        <SectionTitle title={"Select Level"} />
      </FlexWrapper>
      <Title>What you beacome after <span style={{ color: 'red' }}>5 </span> Years</Title>
      <LevelWrapper>
        <DropdownWrapper>
          <Dropdown
            isRequired
            dropdownList={LevelDrop}
            singleSelect
            placeholder={"Select Level"}
            handleSelect={([stream]: Array<DropdownListProps>) => {
              setValues({ ...values, streamID: stream.id });
            }}
          />
        </DropdownWrapper>
        <div>
          <ActionButton onClick={handleTakeTest} marginTop="2">
            Take Test
          </ActionButton>
        </div>
      </LevelWrapper>
    </PageWrapper>
  );
};

export default SelectStreamLevel;
