import { streamSlice } from "./reducer";
import { handleStreamMaster, SelectedStream } from "./api";

const { updateHasError,updateSelectedStream } = streamSlice.actions;

export { updateHasError, handleStreamMaster, SelectedStream,updateSelectedStream };
