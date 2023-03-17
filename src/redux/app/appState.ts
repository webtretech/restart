export interface AppState {
  language: string;
  theme: "auto" | "dark" | "light"; // Change "night" and "light" to theme name from tailwind.config.js
}

export const AppInitialState = (): AppState => {
  const theme = localStorage.getItem("theme") ?? "auto";

  return {
    language: "en-US",
    theme: theme as AppState["theme"],
  };
};
