import { createAsyncThunk } from "@reduxjs/toolkit";

import { ref, child, get } from "firebase/database";
import { database } from "../../firebase/config";

export const getTeachers = createAsyncThunk(
  "teachers/getTeachers",
  async (count, thunkAPI) => {
    const dbRef = ref(database);

    try {
      const snapshot = await get(child(dbRef, "/"));

      if (snapshot.exists()) {
        const data = snapshot.val();
        const allTeachers = Object.values(data);

        const loadedTeachers = allTeachers.slice(0, count);

        return loadedTeachers;
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error(error);
    }
  }
);
