import { streamSlice } from "./reducer";
import { handleStreamMaster, SelectedStream } from "./api";

const { updateHasError, updateSelectedStream, updateSelectedLevel } =
  streamSlice.actions;

export {
  updateHasError,
  handleStreamMaster,
  SelectedStream,
  updateSelectedStream,
  updateSelectedLevel,
};
