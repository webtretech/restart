import router from "@/router";
import { RouterProvider } from "react-router-dom";

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen w-full">
      <RouterProvider router={router} />
    </div>
  );
}
