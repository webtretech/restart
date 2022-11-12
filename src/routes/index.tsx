import { lazy } from "react";
import { AtLeast } from "ts-toolbelt/out/Object/AtLeast";
import MasterLayout from "../layouts/Master";

// Lazy load the routes
const Home = lazy(() => import("../views/Home"));

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

// Routes
const routes: RouteGroup[] = [
  {
    layout: { path: "/", element: <MasterLayout /> },
    routes: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];

// Register other routes by adding to the array
export default [...routes];
