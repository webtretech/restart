export interface AppState {
  darkTheme: boolean;
}

export const AppInitialState = (): AppState => {
  const theme = localStorage.getItem("theme");

  return {
    darkTheme: Boolean(theme && theme === "night"),
  };
};
