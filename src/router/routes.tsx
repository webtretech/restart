import MasterLayout from "@/layouts/MasterLayout";
import { AppRouteObject } from "@/router/interface";
import Page404 from "@/views/Status/Page404";
import { lazy } from "react";

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
