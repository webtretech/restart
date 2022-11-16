import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  darkTheme: boolean;
  counter: number;
}

const theme = localStorage.getItem("theme");
const initialState: AppState = {
  darkTheme: Boolean(theme && theme === "night"),
  counter: 0,
};

// Create "app" reducer (a slice of the state)
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleDarkTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
    setCounter: (state, action: PayloadAction<AppState["counter"]>) => {
      state.counter = action.payload;
    },
  },
});

export const { setCounter, toggleDarkTheme } = appSlice.actions;

export default appSlice.reducer;
