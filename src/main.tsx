import App from "@/App";
import ErrorFallback from "@/components/ErrorFallback";
import store from "@/store";
import "@/style.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { Provider as ReduxProvider } from "react-redux";

// Global error handler
const errorHandler = (error: Error, info: { componentStack: string }): void => {
  // You can log errors to third-party services
  if (import.meta.env.DEV) console.error(error, info);
};

// Create app
const root = createRoot(document.getElementById("root")!);

// Render the app
root.render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHandler}>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </ErrorBoundary>
  </StrictMode>
);
