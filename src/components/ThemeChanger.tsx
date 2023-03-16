import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getDarkTheme } from "@/redux/app/appSelector";
import { appActions } from "@/redux/app/appSlice";
import { useEffect } from "react";
import { Swap } from "react-daisyui";
import { twMerge } from "tailwind-merge";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { themeChange } from "theme-change";

export default function ThemeChanger({
  className,
}: {
  className?: string;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const darkTheme = useAppSelector(getDarkTheme);

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <Swap
      rotate
      active={darkTheme}
      className={twMerge("btn-ghost btn-circle btn", className)}
      onElement={
        <MdOutlineLightMode
          className="h-5 w-5"
          data-set-theme="night"
          onClick={() => dispatch(appActions.toggleDarkTheme())}
        />
      }
      offElement={
        <MdOutlineDarkMode
          className="h-5 w-5"
          data-set-theme="light"
          onClick={() => dispatch(appActions.toggleDarkTheme())}
        />
      }
    />
  );
}
