import { loginSlice } from "./reducer";
import { handleAuthenticate, handleLogout } from "./api";
const { updateHasError, updateIsLoggedIn, updatePassword, updateUserName } =
  loginSlice.actions;

export {
  updateHasError,
  updateIsLoggedIn,
  updatePassword,
  updateUserName,
  handleAuthenticate,
  handleLogout,
};
