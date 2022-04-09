import { ReactElement, SyntheticEvent, useEffect, useState } from "react";
import { UserFilterSection } from "./subcomponents";
import {
  PageWrapper,
  FlexWrapper,
  SectionTitle, 
  ActionButton,
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

  const [show, setShow] = useState(false);

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
      <UserFilterSection
        Stream={LevelDrop}
        handleStreamSelect={([stream]: Array<DropdownListProps>) => {
          setValues({ ...values, streamID: stream.id });
        }}
        handleSearch={(e: SyntheticEvent) => {
          e.preventDefault();
          dispatch(SelectedStream({ ...values, ...uselectedStream }));
          setShow(true);
        }}
      />
      {show ? (
        <FlexWrapper justifyContent="space-around">
          {test.map((data, id) => (
            <div key={id}> 
               <ActionButton onClick={handleTakeTest}>Take Test</ActionButton>
            </div>
          ))}
        </FlexWrapper>
      ) : null}
    </PageWrapper>
  );
};

export default SelectStreamLevel;
