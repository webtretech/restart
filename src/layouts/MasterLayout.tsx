import LanguageChanger from "@/components/LanguageChanger";
import SuspenseOutlet from "@/components/SuspenseOutlet";
import ThemeChanger from "@/components/ThemeChanger";
import { Button, Dropdown, Navbar } from "react-daisyui";
import { HiMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function MasterLayout(): JSX.Element {
  return (
    <>
      <Navbar
        className={twMerge(
          "fixed z-20 bg-base-100",
          "border-b border-b-base-200"
        )}
      >
        <div className="flex-none">
          <Button shape="circle" color="ghost">
            <HiMenuAlt2 className="h-5 w-5" />
          </Button>
        </div>

        <div className="grow">
          <Link className="ml-2 text-2xl font-bold" to="/">
            {import.meta.env.VITE_APP_NAME}
          </Link>
        </div>

        <div className="flex-none">
          <LanguageChanger className="mr-1" />

          <ThemeChanger className="mr-1" />

          <Dropdown end className="pr-3">
            <Dropdown.Toggle button={false}>
              <Button color="ghost" shape="circle" className="avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://avatars.githubusercontent.com/u/21959017?s=400&u=1c2711bcd2713d682bf553835a6dce998c6fd49b&v=4"
                    loading="lazy"
                    alt="Profile"
                  />
                </div>
              </Button>
            </Dropdown.Toggle>

            <Dropdown.Menu className="menu-compact mt-3 w-52">
              <Dropdown.Item className="justify-between">
                Profile
                <span className="badge">New</span>
              </Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Navbar>

      <SuspenseOutlet />
    </>
  );
}
