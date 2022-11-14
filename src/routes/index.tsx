import { lazy } from "react";
import { AtLeast } from "ts-toolbelt/out/Object/AtLeast";
import MasterLayout from "../layouts/Master";

type Layout = {
  path?: string;
  element: JSX.Element;
};

export interface IRoute extends Layout {
  index?: boolean;
  protected?: boolean;
}

export type RouteGroup = {
  layout: AtLeast<Layout, "path" | "element">;
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
