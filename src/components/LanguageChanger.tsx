import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getLanguage } from "@/redux/app/appSelector";
import { appActions } from "@/redux/app/appSlice";
import clsx from "clsx";
import { Button, Dropdown } from "react-daisyui";
import { LuLanguages } from "react-icons/lu";

export default function LanguageChanger({
  className,
}: {
  className: string;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const language = useAppSelector(getLanguage);

  return (
    <Dropdown end className={className}>
      <Dropdown.Toggle button={false}>
        <Button shape="circle" color="ghost" className="w-[4.6rem]">
          <LuLanguages className="h-5 w-5" />
          {language.slice(0, 2).toUpperCase()}
        </Button>
      </Dropdown.Toggle>

      <Dropdown.Menu className="mt-3 w-36">
        <Dropdown.Item
          className={clsx({ active: language.includes("en") })}
          onClick={() => dispatch(appActions.setLanguage("en-US"))}
        >
          English (US)
        </Dropdown.Item>
        <Dropdown.Item
          className={clsx({ active: language.includes("de") })}
          onClick={() => dispatch(appActions.setLanguage("de"))}
        >
          German
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
