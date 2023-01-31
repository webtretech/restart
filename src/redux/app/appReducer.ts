import { AppState } from "@/redux/app/appState";
import { CaseReducer } from "@reduxjs/toolkit";

export const toggleDarkTheme: CaseReducer<AppState> = (state) => {
  state.darkTheme = !state.darkTheme;
};
