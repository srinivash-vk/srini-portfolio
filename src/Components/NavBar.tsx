import { useEffect, useState } from "react";
import { ReactComponent as DARKMODE } from "../Assets/Icons/dark-mode.svg";
import { ReactComponent as LIGHTMODE } from "../Assets/Icons/light-mode.svg";

export default function NavBar() {
  const [theme, setTheme] = useState<any>(null);

  useEffect(() => {
    if (window.matchMedia("prefers-color-scheme: dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="fixed w-full z-20 top-0 left-0 lg:px-20 md:px-15 sm:px-8 xs:px-8 ">
    <div className="flex flex-row justify-between items-center py-4 bg-slate-900 dark:bg-light">
      <div className="cursor-default text-3xl bg-gradient-to-r from-teal-500  to-cyan-500 text-transparent bg-clip-text">
        SV
      </div>
      <div className="transition-all duration-100" onClick={handleThemeSwitch}>
        {theme === "light" ? (
          <div className="p-2 bg-zinc-200 rounded-md">
            <LIGHTMODE className="h-6 w-6" fill="black" />
          </div>
        ) : (
          <div className="p-2 bg-zinc-200 rounded-md">
            <DARKMODE className="h-6 w-6" fill="black" />
          </div>
        )}
      </div>
    </div>
        </div>
  );
}
