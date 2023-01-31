export interface AppState {
  darkTheme: boolean;
  counter: number;
}

export const AppInitialState = (): AppState => {
  const theme = localStorage.getItem("theme");

  return {
    darkTheme: Boolean(theme && theme === "night"),
    counter: 0,
  };
};
