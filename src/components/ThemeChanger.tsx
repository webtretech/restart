import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getTheme } from "@/redux/app/appSelector";
import { appActions } from "@/redux/app/appSlice";
import clsx from "clsx";
import { useCallback, useEffect } from "react";
import { Button, Dropdown } from "react-daisyui";
import {
  MdOutlineBrightnessAuto,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";
import { useMedia } from "react-use";
import { themeChange } from "theme-change";

// Set the corresponding daisyUI themes from "tailwind.config.cjs"
const themes = { light: "light", dark: "dark" };

export default function ThemeChanger({
  className,
}: {
  className?: string;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(getTheme);
  const deviceThemeDark = useMedia("(prefers-color-scheme: dark)", false);

  const themeIcon = useCallback(() => {
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
    // Automatically set theme if non is explicitly set
    if (!theme) {
      const htmlElement = document.querySelector("html")!;

      if (deviceThemeDark) {
        htmlElement.setAttribute("data-theme", themes.dark);
      } else htmlElement.setAttribute("data-theme", themes.light);
    }
  }, [theme, deviceThemeDark]);

  return (
    <Dropdown end className={className}>
      <Dropdown.Toggle button={false}>
        <Button shape="circle" color="ghost">
          {themeIcon()}
        </Button>
      </Dropdown.Toggle>

      <Dropdown.Menu className="menu-compact mt-3 w-32">
        <Dropdown.Item
          data-set-theme=""
          className={clsx({ active: !theme })}
          onClick={() => dispatch(appActions.setTheme(""))}
        >
          <MdOutlineBrightnessAuto className="h-5 w-5" />
          Auto
        </Dropdown.Item>

        <Dropdown.Item
          data-set-theme={themes.dark}
          className={clsx({ active: theme === themes.dark })}
          onClick={() => dispatch(appActions.setTheme(themes.dark))}
        >
          <MdOutlineDarkMode className="h-5 w-5" />
          Dark
        </Dropdown.Item>

        <Dropdown.Item
          data-set-theme={themes.light}
          className={clsx({ active: theme === themes.light })}
          onClick={() => dispatch(appActions.setTheme(themes.light))}
        >
          <MdOutlineLightMode className="h-5 w-5" />
          Light
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
