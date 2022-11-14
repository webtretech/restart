import { lazy } from "react";
import { AtLeast } from "ts-toolbelt/out/Object/AtLeast";
import MasterLayout from "../layouts/Master";

export interface IRoute {
  path?: string;
  index?: boolean;
  element: JSX.Element;
  protected?: boolean;
}

export type RouteGroup = {
  layout: AtLeast<{ path: string; element: JSX.Element }, "path" | "element">;
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

// Register other routes by adding to the array
export default [...routes];
