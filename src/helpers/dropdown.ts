import { DropdownListProps } from "../components/EditableDropdown/typings";
import { Profile } from "../redux/Register/types";
import { GetLevel, GetTest, StreamList } from "../redux/streamMaster/types";

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
    name: profile?.profile
  }));
  return ProfileData;
};

export const getLevelsDropdown = (
  levels: Array<GetLevel>
): Array<DropdownListProps> => {
  const LevelsData = levels.map((levelsPros: GetLevel) => ({
    id: levelsPros?.id,
    name: levelsPros?.test_level
  }));
  return LevelsData;
};