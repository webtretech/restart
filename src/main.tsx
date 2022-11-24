import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorFallback from "./components/ErrorFallback";
import "./main.css";
import { store as reduxStore } from "./redux";

// Create app
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Global error handler
const errorHandler = (error: Error, info: { componentStack: string }): void => {
  // You can log errors to third-party services
  if (import.meta.env.DEV) console.error(error, info);
};

// Render the app
root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHandler}>
      <Provider store={reduxStore}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
