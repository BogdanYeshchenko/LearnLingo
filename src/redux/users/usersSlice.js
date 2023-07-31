import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./usersOperations";

const initialState = {
  users: [],
  isLoading: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default usersSlice.reducer;
