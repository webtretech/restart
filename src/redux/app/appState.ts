export interface AppState {
  language: string;
  theme: string;
}

export const AppInitialState = (): AppState => {
  return {
    language: localStorage.getItem("i18nextLng") ?? "en-US",
    theme: localStorage.getItem("theme") ?? "",
  };
};
