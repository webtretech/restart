import { RouterProvider } from "react-router-dom";
import router from "./router";

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen w-full">
      <RouterProvider router={router} />
    </div>
  );
}
