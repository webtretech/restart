import { type RootState } from "@/store";
import { type AppState } from "@/redux/app/appState";

export const getTheme = (state: RootState): AppState["theme"] => {
  return state.app.theme;
};

export const getLanguage = (state: RootState): AppState["language"] => {
  return state.app.language;
};
