export interface AuthenticatePayload {
  loginDevice: "mobile" | "website";
}

export interface UserInfo {
  role: string;
  email: string;
  userDetailId: string;
  userId: string;
}

interface UserState {
  isLoggedIn: boolean;
  isLoading: boolean;
  email: string;
  password: string;
  hasError: boolean;
  userInfo: UserInfo | null;
}

export const initialState: UserState = {
  isLoggedIn: false,
  isLoading: false,
  email: "",
  password: "",
  hasError: false,
  userInfo: null,
};
