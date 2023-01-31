import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AppState {
  counter: number;
}

const initialState: AppState = {
  counter: 0,
};

export const appSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCounter: (state, action: PayloadAction<AppState["counter"]>) => {
      state.counter = action.payload;
    },
  },
});

export const counterActions = appSlice.actions;

export default appSlice.reducer;
