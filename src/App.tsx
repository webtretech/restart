import router from "@/router";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import i18n from "@/i18n";
import { useAppSelector } from "@/hooks/redux";
import { getLanguage } from "@/redux/app/appSelector";

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
