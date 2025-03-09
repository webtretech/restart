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
const themes = { dark: "dark", light: "light" };

export default function ThemeChanger({
  className,
}: {
  className?: string;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(getTheme);
  const deviceThemeDark = useMedia("(prefers-color-scheme: dark)", false);

  // Automatically set theme if non is explicitly set
  if (!theme) {
    const htmlElement = document.querySelector("html")!;
    htmlElement.setAttribute(
      "data-theme",
      deviceThemeDark ? themes.dark : themes.light,
    );
  }

  useEffect(() => {
    themeChange(false);
  }, []);

  const themeIcon = useCallback(() => {
    switch (theme) {
      case themes.dark:
        return <MdOutlineDarkMode className="h-5 w-5" />;

      case themes.light:
        return <MdOutlineLightMode className="h-5 w-5" />;

      default:
        return <MdOutlineBrightnessAuto className="h-5 w-5" />;
    }
  }, [theme]);

  return (
    <Dropdown className={className} end>
      <Dropdown.Toggle button={false}>
        <Button color="ghost" shape="circle">
          {themeIcon()}
        </Button>
      </Dropdown.Toggle>

      <Dropdown.Menu className="mt-3 w-36">
        <Dropdown.Item
          className={clsx({ active: !theme })}
          data-set-theme=""
          onClick={() => dispatch(appActions.setTheme(""))}
        >
          <MdOutlineBrightnessAuto className="h-5 w-5" />
          Auto
        </Dropdown.Item>

        <Dropdown.Item
          className={clsx({ active: theme === themes.dark })}
          data-set-theme={themes.dark}
          onClick={() => dispatch(appActions.setTheme(themes.dark))}
        >
          <MdOutlineDarkMode className="h-5 w-5" />
          Dark
        </Dropdown.Item>

        <Dropdown.Item
          className={clsx({ active: theme === themes.light })}
          data-set-theme={themes.light}
          onClick={() => dispatch(appActions.setTheme(themes.light))}
        >
          <MdOutlineLightMode className="h-5 w-5" />
          Light
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
