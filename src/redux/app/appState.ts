export interface AppState {
  theme: string;
  language: string;
}

export const AppInitialState = (): AppState => {
  return {
    language: localStorage.getItem("i18nextLng") ?? "en-US",
    theme: localStorage.getItem("theme") ?? "",
  };
};
