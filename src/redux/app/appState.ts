export interface AppState {
  theme: string;
  language: string;
}

export const AppInitialState = (): AppState => {
  return {
    language: "en-US",
    theme: localStorage.getItem("theme") ?? "",
  };
};
