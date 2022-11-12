import { configureStore } from "@reduxjs/toolkit";
import loggerMiddleware from "./middlewares/logger";
import app from "./reducers/app";

// Create the global store
export const store = configureStore({
  // Register the reducers
  reducer: { app },
  middleware: (getDefaultMiddleware) => {
    // Only include loggerMiddleware during development
    if (import.meta.env.DEV) {
      return getDefaultMiddleware().concat([loggerMiddleware]);
    }

    // Added production middleware here by concatenation
    return getDefaultMiddleware();
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred types
export type AppDispatch = typeof store.dispatch;
