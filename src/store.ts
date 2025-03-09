import appSlice from "@/redux/app/appSlice";
import counterSlice from "@/redux/counter/counterSlice";
import { configureStore, type Middleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

// Global middleware
const middleware: Middleware[] = [];
// Development middleware
if (import.meta.env.DEV) {
  middleware.push(logger);
}

// Create the global store
const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
  reducer: {
    app: appSlice,
    counter: counterSlice,
  },
});

// Inferred types
export type AppDispatch = typeof store.dispatch;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export default store;
