export interface AppState {
  language: string;
  theme: "auto" | "dark" | "light";
}

export const AppInitialState = (): AppState => {
  const theme = localStorage.getItem("theme");

  return {
    language: "en-US",
    theme: theme === "" ? "auto" : (theme as AppState["theme"]),
  };
};
