import SuspenseOutlet from "@/components/SuspenseOutlet";
import ThemeChanger from "@/components/ThemeChanger";
import clsx from "clsx";
import { HiMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function MasterLayout(): JSX.Element {
  return (
    <>
      <div
        className={clsx(
          "navbar fixed z-20 border-b",
          "border-b-base-200 bg-base-100"
        )}
      >
        <div className="flex-none">
          <label
            htmlFor="side-navbar-drawer-left"
            className={clsx(
              "btn btn-primary btn-circle",
              "btn-ghost drawer-button"
            )}
          >
            <HiMenuAlt2 className="h-5 w-5" />
          </label>
        </div>
        <div className="flex-1">
          <Link className="ml-2 text-2xl font-bold" to="/">
            {import.meta.env.VITE_APP_NAME}
          </Link>
        </div>
        <div className="flex-none">
          <ThemeChanger />

          <div className="dropdown-end dropdown">
            <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
              <div className="w-10 rounded-full">
                <img
                  src="https://placeimg.com/40/40/people"
                  loading="lazy"
                  alt="Profile"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className={clsx(
                "dropdown-content menu menu-compact rounded-box",
                "mt-3 w-52 bg-base-100 p-2 shadow"
              )}
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <SuspenseOutlet />
    </>
  );
}
