import { Suspense } from "react";
import { IRoute } from "../routes";
import Spinner from "./Spinner";

export default function Pager(props: IRoute) {
  return <Suspense fallback={<Spinner />}>{props.element}</Suspense>;
}
