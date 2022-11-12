import { Suspense, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IRoute } from "../routes";
import Spinner from "./Spinner";

export default function Pager(props: IRoute) {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  // Auth guard
  useEffect(() => {
    // Check auth status and redirect if user is a guest
    if (props.protected /* && isGuestUser */) {
      navigate({ pathname: "/" }, { state: { from: pathname + search } });
    }
  }, [pathname, search]);

  return <Suspense fallback={<Spinner />}>{props.element}</Suspense>;
}
