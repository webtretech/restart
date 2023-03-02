export interface AppState {
  language: string;
  darkTheme: boolean;
}

export const AppInitialState = (): AppState => {
  const theme = localStorage.getItem("theme");

  return {
    language: "en-US",
    darkTheme: Boolean(theme && theme === "night"),
  };
};
