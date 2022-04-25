import { DropdownListProps } from "../components/EditableDropdown/typings";
import { Countries, Profile, StatesResponse } from "../redux/Register/types";
import {
  GetLevel,
  GetTest,
  QuestionType,
  StreamList,
} from "../redux/streamMaster/types";

export const getStreamDropdown = (
  stream: Array<StreamList>
): Array<DropdownListProps> => {
  const streames = stream.map((streamProps: StreamList) => ({
    id: streamProps?.id,
    name: streamProps?.name,
  }));
  return streames;
};

export const getTestPayload = (Test: Array<GetTest>) => {
  const testData = Test.map((TestPayload: GetTest) => ({
    testID: TestPayload.test_ID,
    testName: TestPayload.test_name,
    level: TestPayload.test_level,
  }));
  return testData;
};

export const getProfileDropdown = (
  profile: Array<Profile>
): Array<DropdownListProps> => {
  const ProfileData = profile.map((profile: Profile) => ({
    id: profile?.id,
    name: profile?.profile,
  }));
  return ProfileData;
};

export const getLevelsDropdown = (
  levels: Array<GetTest>
): Array<DropdownListProps> => {
  const LevelsData = levels.map((levelsPros: GetTest) => ({
    id: levelsPros?.test_ID,
    name: levelsPros?.test_level,
  }));
  return LevelsData;
};

export const getCountryDropdown = (
  countrymap: Array<Countries>
): Array<DropdownListProps> => {
  const countries = countrymap.map((countryProps: Countries) => ({
    id: countryProps?.id,
    name: countryProps?.name,
  }));
  return countries;
};

export const getStateDropdown = (
  statemap: Array<StatesResponse>
): Array<DropdownListProps> => {
  const states = statemap.map((stateProps: StatesResponse) => ({
    id: stateProps?.id,
    name: stateProps?.state_name,
  }));
  return states;
};

export const getTestId = (
  TestId: Array<QuestionType>
): Array<DropdownListProps> => {
  const QuestionData = TestId.map((TestPros: QuestionType) => ({
    id: TestPros?.test_ID,
    name: TestPros?.stream_name,
  }));
  return QuestionData;
};