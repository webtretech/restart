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

// Set the corresponding theme names from "tailwind.config.cjs"
const themes = { light: "light", dark: "dark" };

export default function ThemeChanger({
  className,
}: {
  className?: string;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(getTheme);
  const themeIcon = useMemo(() => {
    switch (theme) {
      case themes.light:
        return <MdOutlineLightMode className="h-5 w-5" />;

      case themes.dark:
        return <MdOutlineDarkMode className="h-5 w-5" />;

      default:
        return <MdOutlineBrightnessAuto className="h-5 w-5" />;
    }
  }, [theme]);

  useEffect(() => {
    themeChange(false);
    // Automatically set dark theme when auto detect is enabled
    if (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      const html = document.querySelector("html") as HTMLElement;
      html.setAttribute("data-theme", themes.dark);
    }
  }, [theme]);

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
          className={clsx({ bordered: !theme })}
          onClick={() => dispatch(appActions.setTheme(""))}
        >
          <MdOutlineBrightnessAuto
            className={clsx("h-5 w-5", { "-ml-1": !theme })}
          />
          Auto
        </Dropdown.Item>

        <Dropdown.Item
          data-set-theme={themes.dark}
          className={clsx({ bordered: theme === themes.dark })}
          onClick={() => dispatch(appActions.setTheme(themes.dark))}
        >
          <MdOutlineDarkMode
            className={clsx("h-5 w-5", { "-ml-1": theme === themes.dark })}
          />
          Dark
        </Dropdown.Item>

        <Dropdown.Item
          data-set-theme={themes.light}
          className={clsx({ bordered: theme === themes.light })}
          onClick={() => dispatch(appActions.setTheme(themes.light))}
        >
          <MdOutlineLightMode
            className={clsx("h-5 w-5", { "-ml-1": theme === themes.light })}
          />
          Light
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
