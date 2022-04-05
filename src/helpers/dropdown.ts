import { DropdownListProps } from "../components/EditableDropdown/typings";
import { Profile } from "../redux/Register/types";
import { GetTest, StreamList } from "../redux/streamMaster/types";

export const getStreamDropdown = (streamdata: Array<StreamList>) => {
  const streams = streamdata.map((stream: StreamList) => ({
    id: stream?.id,
    name: stream?.name,
  }));
  return streams;
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
