import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  loaded: boolean;
}

const initialState: AppState = {
  loaded: false,
};

// Create "app" reducer (a slice of the state)
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoaded: (state, action: PayloadAction<AppState["loaded"]>) => {
      state.loaded = action.payload;
    },
  },
});

export const { setLoaded } = appSlice.actions;

export default appSlice.reducer;
