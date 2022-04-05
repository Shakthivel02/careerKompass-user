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
