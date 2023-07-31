import { createSlice } from "@reduxjs/toolkit";

const isLikedSlice = createSlice({
  name: "isLiked",
  initialState: {},
  reducers: {
    clickLikeReducer: (state, action) => {
      const id = action.payload;
      state[id] = !state[id];
    },
  },
});

export const { clickLikeReducer } = isLikedSlice.actions;
export const selectLikedState = (state) => state.isLiked;
export default isLikedSlice.reducer;
