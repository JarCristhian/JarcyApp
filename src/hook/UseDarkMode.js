import { useEffect, useState } from "react";

export default function UseDarkMode() {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme=='dark'? 'light':'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme?theme:'dark');
    localStorage.setItem('theme', theme?theme:'dark');
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
