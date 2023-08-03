import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite(state, { payload }) {
      console.log("1");
      state.favorite.push(payload);
    },
    removeFavorite(state, { payload }) {
      console.log("2");
      state.favorite = state.favorite.filter((el) => el !== payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
