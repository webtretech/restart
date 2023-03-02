import { RootState } from "@/store";

export const getDarkTheme = (state: RootState): boolean => {
  return state.app.darkTheme;
};

export const getLanguage = (state: RootState): string => {
  return state.app.language;
};
