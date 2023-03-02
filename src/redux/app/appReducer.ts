import { AppState } from "@/redux/app/appState";
import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

export const toggleDarkTheme: CaseReducer<AppState> = (state) => {
  state.darkTheme = !state.darkTheme;
};

export const setLanguage: CaseReducer<
  AppState,
  PayloadAction<AppState["language"]>
> = (state, action) => {
  state.language = action.payload;
};
