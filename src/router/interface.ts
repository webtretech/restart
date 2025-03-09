import { type RouteObject } from "react-router-dom";

export type AppRouteObject = RouteObject & {
  /**
   * @description child route
   */
  children?: AppRouteObject[];
};
