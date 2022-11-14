import { lazy } from "react";
import { AtLeast } from "ts-toolbelt/out/Object/AtLeast";
import MasterLayout from "../layouts/Master";

interface ILayout {
  path?: string;
  element: JSX.Element;
}

export interface IRoute extends ILayout {
  index?: boolean;
  protected?: boolean;
}

export type RouteGroup = {
  layout: AtLeast<ILayout, "path" | "element">;
  routes: IRoute[];
};

// Lazy load the routes to improve performance
const Home = lazy(() => import("../views/Home"));
const NotFound = lazy(() => import("../views/NotFound"));

const routes: RouteGroup[] = [
  {
    layout: { path: "/", element: <MasterLayout /> },
    routes: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default routes;
