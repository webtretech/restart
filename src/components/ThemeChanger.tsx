import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getTheme } from "@/redux/app/appSelector";
import { appActions } from "@/redux/app/appSlice";
import clsx from "clsx";
import { useEffect, useMemo } from "react";
import { Button, Dropdown } from "react-daisyui";
import {
  MdOutlineBrightnessAuto,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";
import { themeChange } from "theme-change";

export default function ThemeChanger({
  className,
}: {
  className?: string;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(getTheme);
  const themeIcon = useMemo(() => {
    switch (theme) {
      case "light":
        return <MdOutlineLightMode className="h-5 w-5" />;

      case "dark":
        return <MdOutlineDarkMode className="h-5 w-5" />;

      default: {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          const html = document.querySelector("html") as HTMLElement;
          html.setAttribute("data-theme", "night");
        }

        return <MdOutlineBrightnessAuto className="h-5 w-5" />;
      }
    }
  }, [theme]);

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <Dropdown vertical="end" className={className}>
      <Dropdown.Toggle button={false}>
        <Button shape="circle" color="ghost">
          {themeIcon}
        </Button>
      </Dropdown.Toggle>

      <Dropdown.Menu className="menu-compact mt-3 w-32 p-2">
        <Dropdown.Item
          data-set-theme=""
          className={clsx({ bordered: theme === "auto" })}
          onClick={() => dispatch(appActions.setTheme("auto"))}
        >
          <MdOutlineBrightnessAuto className="h-5 w-5" /> Auto
        </Dropdown.Item>

        <Dropdown.Item
          data-set-theme="night"
          className={clsx({ bordered: theme === "dark" })}
          onClick={() => dispatch(appActions.setTheme("dark"))}
        >
          <MdOutlineDarkMode className="h-5 w-5" /> Dark
        </Dropdown.Item>

        <Dropdown.Item
          data-set-theme="light"
          className={clsx({ bordered: theme === "light" })}
          onClick={() => dispatch(appActions.setTheme("light"))}
        >
          <MdOutlineLightMode className="h-5 w-5" />
          Light
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
