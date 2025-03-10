import ErrorBoundary from "@/components/ErrorBoundary";
import Spinner from "@/components/Spinner";
import { type AppRouteObject } from "@/router/interface";
import routes from "@/router/routes";
import { createBrowserRouter, type RouteObject } from "react-router";

const wrappedRouter = (routes: AppRouteObject[]): RouteObject[] => {
  return routes.map((route) => {
    const { children, ...otherRouteProps } = route;

    const newRoute: RouteObject = { ...otherRouteProps };
    newRoute.errorElement = <ErrorBoundary />;
    newRoute.hydrateFallbackElement = <Spinner />;

    if (Array.isArray(children) && children.length) {
      newRoute.children = wrappedRouter(children);
    }

    return newRoute;
  });
};

export default createBrowserRouter(wrappedRouter(routes));
