import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Counter {
  counter: number;
}

const initialState: Counter = {
  counter: 0,
};

const appSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCounter: (state, action: PayloadAction<Counter["counter"]>) => {
      state.counter = action.payload;
    },
  },
});

export const counterActions = appSlice.actions;

export default appSlice.reducer;
