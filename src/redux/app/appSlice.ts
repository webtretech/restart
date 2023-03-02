import { toggleDarkTheme, setLanguage } from "@/redux/app/appReducer";
import { AppInitialState } from "@/redux/app/appState";
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: AppInitialState,
  reducers: { toggleDarkTheme, setLanguage },
});

export const appActions = appSlice.actions;
export default appSlice.reducer;
