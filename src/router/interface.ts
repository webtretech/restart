import { type RouteObject } from "react-router";

export type AppRouteObject = RouteObject & {
  /**
   * @description child route
   */
  children?: AppRouteObject[];
};
