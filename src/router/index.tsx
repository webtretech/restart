import ErrorBoundary from "@/components/ErrorBoundary";
import Spinner from "@/components/Spinner";
import { type AppRouteObject } from "@/router/interface";
import routes from "@/router/routes";
import { createBrowserRouter, type RouteObject } from "react-router-dom";

const wrappedRouter = (routes: AppRouteObject[]): RouteObject[] => {
  return routes.map((route: AppRouteObject) => {
    const { children, element, ...otherRouteProps } = route;

    const newRoute: RouteObject = { ...otherRouteProps };
    newRoute.errorElement = <ErrorBoundary />;
    newRoute.hydrateFallbackElement = <Spinner />;

    newRoute.element = element;

    if (Array.isArray(children) && children.length) {
      newRoute.children = wrappedRouter(children);
    }

    return newRoute;
  });
};

const router = createBrowserRouter(wrappedRouter(routes));
export default router;
