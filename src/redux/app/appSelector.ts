import { RootState } from "@/store";

export const getDarkTheme = (state: RootState): boolean => {
  return state.app.darkTheme;
};
