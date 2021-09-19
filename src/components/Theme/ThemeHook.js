import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getTheme } from "../../slices/userSlice";

function ThemeHook() {
  const selectedTheme = useSelector(getTheme);
  const [theme, setTheme] = useState(selectedTheme);

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return theme;
}

export default ThemeHook;
