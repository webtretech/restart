import { useAppSelector } from "@/hooks/redux";
import i18n from "@/i18n";
import { getLanguage } from "@/redux/app/appSelector";
import router from "@/router";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

export default function App(): JSX.Element {
  const language = useAppSelector(getLanguage);

  useEffect(() => {
    void i18n.changeLanguage(language);
  }, [language]);

  return (
    <div className="min-h-screen w-full">
      <RouterProvider router={router} />
    </div>
  );
}
