import { Route, Routes } from "react-router-dom";
import Pager from "./components/Pager";
import routes from "./routes";

export default function App() {
  return (
    <div className="min-h-screen w-full">
      <Routes>
        {routes.map((router, key) => (
          <Route key={key} {...router.layout}>
            {router.routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                index={route.index}
                element={<Pager {...route} />}
              />
            ))}
          </Route>
        ))}
      </Routes>
    </div>
  );
}
