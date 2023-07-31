import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incrementByOne: (state) => {
      state.value += 1;
    },
    decrementByOne: (state) => {
      state.value -= 1;
    },
    incrementByX: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incrementByOne, decrementByOne, incrementByX } =
  counterSlice.actions;
export default counterSlice.reducer;
export const selectCount = (state) => state.counter.value;
