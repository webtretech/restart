export interface AppState {
  language: string;
  theme: "auto" | "dark" | "light";
}

export const AppInitialState = (): AppState => {
  const theme = localStorage.getItem("theme") ?? "auto";

  return {
    language: "en-US",
    theme: theme as AppState["theme"],
  };
};
