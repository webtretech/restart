import MasterLayout from "@/layouts/MasterLayout";
import Page404 from "@/pages/Status/Page404";
import { type AppRouteObject } from "@/router/interface";
import { lazy } from "react";

// Lazy load the routes to improve performance
const Home = lazy(() => import("@/pages/Home"));

const routes: AppRouteObject[] = [
  {
    children: [
      {
        element: <Home />,
        index: true,
      },
    ],
    element: <MasterLayout />,
    path: "/",
  },
  {
    element: <Page404 />,
    path: "/*",
  },
];

export default routes;
