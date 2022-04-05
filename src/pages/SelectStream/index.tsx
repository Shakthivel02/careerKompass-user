import { ReactElement, SyntheticEvent, useEffect, useState } from "react";
import { UserFilterSection } from "./subcomponents";
import {
  PageWrapper,
  FlexWrapper,
  SectionTitle,
  CardWrapper,
  Column,
  ActionButton,
} from "../../components";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getStreamDropdown, getTestPayload } from "../../helpers/dropdown";
import {
  GetQuestionByTest,
  handleStreamMaster,
  SelectedStream,
} from "../../redux/streamMaster/api";
import { SelectedStreamType } from "../../redux/streamMaster/types";
import { useHistory } from "react-router-dom";
import ROUTES from "../../const/routes";
import { DropdownListProps } from "./typings";

const SelectStreamLevel = (): ReactElement => {
  const { selectedStream, stream, test } = useSelector(
    (state: RootState) => ({
      stream: state.stream.streamMaster,
      selectedStream: state.stream.selectStream as SelectedStreamType,
      test: state.stream.getTest,
    }),
    shallowEqual
  );
  const history = useHistory();
  const StreamDropdown = stream ? getStreamDropdown(stream) : [];
  const [values, setValues] = useState(selectedStream);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [selectedTest] = test ? getTestPayload(test) : [];

  useEffect(() => {
    dispatch(handleStreamMaster());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTakeTest = () => {
    dispatch(GetQuestionByTest(selectedTest));
    history.push(ROUTES.TEST);
  };
  return (
    <PageWrapper>
      <FlexWrapper hasBorder>
        <SectionTitle title={"Select Stream"} />
      </FlexWrapper>
      <UserFilterSection
        Stream={StreamDropdown}
        handleStreamSelect={([stream]: Array<DropdownListProps>) => {
          setValues({ ...values, streamID: stream.id });
        }}
        handleSearch={(e: SyntheticEvent) => {
          e.preventDefault();
          dispatch(SelectedStream(values));
          setShow(true);
        }}
      />
      {show ? (
        <FlexWrapper justifyContent="space-around">
          {test.map((data, id) => (
            <CardWrapper key={id}>
              <Column keyName="Test Name" value={data.test_name} />
              <Column keyName="Level" value={data.test_level} />
              <ActionButton onClick={handleTakeTest}>Take Test</ActionButton>
            </CardWrapper>
          ))}
        </FlexWrapper>
      ) : null}
    </PageWrapper>
  );
};

export default SelectStreamLevel;
