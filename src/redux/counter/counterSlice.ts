import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Counter {
  counter: number;
}

const initialState: Counter = {
  counter: 0,
};

const appSlice = createSlice({
  initialState,
  name: "counter",
  reducers: {
    setCounter: (state, action: PayloadAction<Counter["counter"]>) => {
      state.counter = action.payload;
    },
  },
});

export const counterActions = appSlice.actions;

export default appSlice.reducer;
