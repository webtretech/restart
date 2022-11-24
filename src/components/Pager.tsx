import { Suspense, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Route } from "../routes";
import Spinner from "./Spinner";

export default function Pager(route: Route): JSX.Element {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  // Auth guard
  useEffect(() => {
    // Check auth status and redirect if user is a guest
    if (route.protected /* && isGuestUser */) {
      navigate("/", { state: { next: pathname + search } });
    }
  }, [pathname, search]);

  return <Suspense fallback={<Spinner />}>{route.element}</Suspense>;
}
