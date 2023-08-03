import { createSlice } from "@reduxjs/toolkit";
import { logUpThunk, logInThunk, logOutThunk } from "./authOperations";

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  isAuthLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getCurrentUser: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      login: payload.login,
      email: payload.email,
      avatar: payload.avatar,
      isAuth: true,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(logUpThunk.pending, (state, { payload }) => {
        state.isAuthLoading = true;
      })
      .addCase(logUpThunk.fulfilled, (state, { payload }) => {
        state.userId = payload.uid;
        state.login = payload.displayName;
        state.email = payload.email;
        state.isAuth = true;
        state.isAuthLoading = false;
      })
      .addCase(logUpThunk.rejected, (state, { payload }) => {
        console.log({
          message: "error",
          description: `${payload}`,
          type: "error",
          duration: 5000,
          backgroundColor: "red",
          color: "white",
          autoHide: true,
        });
        state.isAuthLoading = false;
      })
      .addCase(logInThunk.pending, (state, { payload }) => {
        state.isAuthLoading = true;
      })
      .addCase(logInThunk.fulfilled, (state, { payload }) => {
        state.userId = payload.uid;
        state.login = payload.displayName;
        state.email = payload.email;
        state.isAuth = true;
        state.isAuthLoading = false;
      })
      .addCase(logInThunk.rejected, (state, { payload }) => {
        console.log({
          message: "error",
          description: `${payload}`,
          type: "error",
          duration: 5000,
          backgroundColor: "red",
          color: "white",
          autoHide: true,
        });
        state.isAuthLoading = false;
      })
      .addCase(logOutThunk.pending, (state, { payload }) => {
        state.isAuthLoading = true;
      })
      .addCase(logOutThunk.fulfilled, (state, { payload }) => {
        state.userId = null;
        state.login = null;
        state.email = null;
        state.isAuth = false;
        state.isAuthLoading = false;
      })
      .addCase(logOutThunk.rejected, (state, { payload }) => {
        console.log({
          message: "error",
          description: `${payload}`,
          type: "error",
          duration: 5000,
          backgroundColor: "red",
          color: "white",
          autoHide: true,
        });
        state.isAuthLoading = false;
      });
  },
});

export const { getCurrentUser } = authSlice.actions;

export default authSlice.reducer;
