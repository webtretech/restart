import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import MasterLayout from "../layouts/MasterLayout";
import Page404 from "../views/Status/Page404";

// Lazy load the routes to improve performance
const Home = lazy(() => import("../views/Home"));

const routes: RouteObject[] = [
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
