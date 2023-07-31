import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64aeb359c85640541d4d8f82.mockapi.io/api";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/users");

      return response.data;
    } catch (e) {
      console.error(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
