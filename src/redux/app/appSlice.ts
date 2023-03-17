import { setTheme, setLanguage } from "@/redux/app/appReducer";
import { AppInitialState } from "@/redux/app/appState";
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: AppInitialState,
  reducers: { setTheme, setLanguage },
});

export const appActions = appSlice.actions;
export default appSlice.reducer;
