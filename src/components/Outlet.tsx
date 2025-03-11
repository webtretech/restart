import Spinner from "@/components/Spinner";
import { Suspense } from "react";
import { useOutlet } from "react-router";

export default function Outlet() {
  const outlet = useOutlet();

  return <Suspense fallback={<Spinner />}>{outlet}</Suspense>;
}
