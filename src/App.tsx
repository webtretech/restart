import { Route, Routes } from "react-router-dom";
import Pager from "./components/Pager";
import routes from "./routes";
import NotFound from "./views/NotFound";

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen w-full">
      <Routes>
        {routes.map((router, key) => (
          <Route key={key} {...router.layout}>
            {router.routes.map((route, k) => (
              <Route
                key={k}
                path={route.path}
                index={route.index}
                element={
                  <Pager protected={router.layout.protected} {...route} />
                }
              />
            ))}
          </Route>
        ))}

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
