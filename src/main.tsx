import App from "@/App";
import store from "@/store";
import "@/style.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";

// Create app
const root = createRoot(document.getElementById("root")!);

// Render the app
root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </StrictMode>,
);
