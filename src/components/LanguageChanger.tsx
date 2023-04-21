import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getLanguage } from "@/redux/app/appSelector";
import { appActions } from "@/redux/app/appSlice";
import clsx from "clsx";
import { Button, Dropdown } from "react-daisyui";
import { MdOutlineLanguage } from "react-icons/md";

export default function LanguageChanger({
  className,
}: {
  className: string;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const language = useAppSelector(getLanguage);

  return (
    <Dropdown vertical="end" className={className}>
      <Dropdown.Toggle button={false}>
        <Button shape="circle" color="ghost" className="w-16">
          <MdOutlineLanguage className="h-5 w-5" />
          &nbsp;{language.slice(0, 2).toUpperCase()}
        </Button>
      </Dropdown.Toggle>

      <Dropdown.Menu className="menu-compact mt-3 w-36 p-2">
        <Dropdown.Item
          className={clsx({ "bordered -ml-1": language.includes("en") })}
          onClick={() => dispatch(appActions.setLanguage("en-US"))}
        >
          English (US)
        </Dropdown.Item>
        <Dropdown.Item
          className={clsx({ "bordered -ml-1": language.includes("de") })}
          onClick={() => dispatch(appActions.setLanguage("de"))}
        >
          German
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
