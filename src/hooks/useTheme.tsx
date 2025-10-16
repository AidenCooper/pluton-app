import { DARK_THEME, LIGHT_THEME } from "@/types/theme";
import { useEffect, useState } from "react";
import { ColorSchemeName, useColorScheme } from "react-native";

const DEFAULT_THEME = DARK_THEME;

function getThemeFromScheme(scheme: ColorSchemeName) {
  switch (scheme) {
    case "dark":
      return DARK_THEME;
    case "light":
      return LIGHT_THEME;
    default:
      return DEFAULT_THEME;
  }
}

export default function useTheme() {
  const scheme = useColorScheme();

  const [theme, setTheme] = useState(getThemeFromScheme(scheme));

  useEffect(() => {
    const newTheme = getThemeFromScheme(scheme);
    if (newTheme !== theme) setTheme(newTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scheme]);

  return theme;
}
