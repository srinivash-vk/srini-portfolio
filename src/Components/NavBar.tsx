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
    <div className="flex flex-row justify-between items-center py-4 bg-dark  dark:bg-light">
      <div className="text-3xl bg-gradient-to-r from-teal-500  to-cyan-500 text-transparent bg-clip-text">
        SV
      </div>
      <div className=" transition-all duration-100" onClick={handleThemeSwitch}>
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
  );
}
