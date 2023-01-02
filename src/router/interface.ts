import { RouteObject } from "react-router-dom";

export type RouteObjectPro = RouteObject & {
  /**
   * @description routes that need login
   */
  isProtected?: boolean;

  /**
   * @description child route
   */
  children?: RouteObjectPro[];
};
