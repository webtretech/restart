import { type RouteObject } from "react-router-dom";

export type AppRouteObject = RouteObject & {
  /**
   * @description routes that need login
   */
  isProtected?: boolean;

  /**
   * @description child route
   */
  children?: AppRouteObject[];
};
