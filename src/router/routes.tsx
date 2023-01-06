import { lazy } from "react";
import MasterLayout from "../layouts/MasterLayout";
import Page404 from "../views/Status/Page404";
import { AppRouteObject } from "./interface";

// Lazy load the routes to improve performance
const Home = lazy(() => import("../views/Home"));

const routes: AppRouteObject[] = [
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/*",
    element: <Page404 />,
  },
];

export default routes;
