import { streamSlice } from "./reducer";
import { handleStreamMaster, SelectedStream } from "./api";

const { updateHasError } = streamSlice.actions;

export { updateHasError, handleStreamMaster, SelectedStream };
