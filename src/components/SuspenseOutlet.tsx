import Spinner from "@/components/Spinner";
import { Suspense } from "react";
import { useOutlet } from "react-router";

export default function SuspenseOutlet(): JSX.Element {
  const outlet = useOutlet();

  return <Suspense fallback={<Spinner />}>{outlet}</Suspense>;
}
