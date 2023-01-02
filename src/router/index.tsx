import routes from "./routes";
import { RouteObjectPro } from "./interface";
import { createBrowserRouter, RouteObject } from "react-router-dom";

const wrappedRouter = (routes: RouteObjectPro[]): RouteObject[] => {
  return routes.map((route: RouteObjectPro) => {
    const { element, children, isProtected, ...rest } = route;
    const newRoute: RouteObject = { ...rest };

    if (isProtected) {
      // Check protected routes and handle auth / redirection
    }

    newRoute.element = element;

    if (Array.isArray(children) && children.length) {
      newRoute.children = wrappedRouter(children);
    }

    return newRoute;
  });
};

const router = createBrowserRouter(wrappedRouter(routes));
export default router;
