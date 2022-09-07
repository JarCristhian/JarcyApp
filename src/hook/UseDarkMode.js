import { useEffect, useState } from "react";

export default function UseDarkMode() {
  if (localStorage.theme == undefined) {
    localStorage.setItem("theme", "dark");
  }
  const [theme, setTheme] = useState(localStorage.theme);
  let colorTheme = theme == "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme ? theme : "dark");
    localStorage.setItem("theme", theme ? theme : "dark");
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
