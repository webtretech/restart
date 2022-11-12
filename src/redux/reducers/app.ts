import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  counter: number;
}

const initialState: AppState = {
  counter: 0,
};

// Create "app" reducer (a slice of the state)
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCounter: (state, action: PayloadAction<AppState["counter"]>) => {
      state.counter = action.payload;
    },
  },
});

export const { setCounter } = appSlice.actions;

export default appSlice.reducer;
