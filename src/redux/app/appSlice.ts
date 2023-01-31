import { toggleDarkTheme } from "@/redux/app/appReducer";
import { AppInitialState } from "@/redux/app/appState";
import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: AppInitialState,
  reducers: { toggleDarkTheme },
});

export const appActions = appSlice.actions;
export default appSlice.reducer;
