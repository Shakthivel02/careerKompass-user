import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login/reducer";
import menuReducer from "./menu/reducer";
import streamReducer from "./streamMaster/reducer";
import TestReducer from "./TestApi/reducer";
import RegisterReducer from './Register/reducer'

const reducer = {
  login: loginReducer,
  menu: menuReducer,
  stream: streamReducer,
  Test: TestReducer,
  register: RegisterReducer
};

const initialState = {};

export const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: initialState,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
