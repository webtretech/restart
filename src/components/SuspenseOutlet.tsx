import { Suspense } from "react";
import { useOutlet } from "react-router-dom";
import Spinner from "./Spinner";

export default function SuspenseOutlet(): JSX.Element {
  const outlet = useOutlet();

  return <Suspense fallback={<Spinner />}>{outlet}</Suspense>;
}
