import { RootState } from "@/store";
import { AppState } from "./appState";

export const getTheme = (state: RootState): AppState["theme"] => {
  return state.app.theme;
};

export const getLanguage = (state: RootState): AppState["language"] => {
  return state.app.language;
};
