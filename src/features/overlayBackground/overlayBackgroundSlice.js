import { createSlice } from "@reduxjs/toolkit";

const backgroundOverlaySlice = createSlice({
  name: "backgroundOverlay",
  initialState: { isVisible: false },
  reducers: {
    backgroundOverlayReducer: (state, action) => {
      state.isVisible = action.payload;
    },
  },
});

export const { backgroundOverlayReducer } = backgroundOverlaySlice.actions;
export const overlayState = (state) => state.backgroundOverlay.isVisible;
export default backgroundOverlaySlice.reducer;
