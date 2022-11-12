import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pager from "./components/Pager";
import routes from "./routes";

// Lazy load the routes
const NotFound = lazy(() => import("./views/NotFound"));

export default function App() {
  return (
    <div className="min-h-screen w-full">
      <BrowserRouter>
        <Routes>
          {routes.map((r, i) => (
            <Route key={i} {...r.layout}>
              {r.routes.map((route, k) => (
                <Route
                  key={i + k}
                  path={route.path}
                  index={route.index}
                  element={<Pager {...route} />}
                />
              ))}
            </Route>
          ))}

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
