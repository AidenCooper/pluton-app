import { DarkTheme, LightTheme } from "@/constants/Themes";
import { useColorScheme } from "./useColorScheme";

export function useTheme() {
  const scheme = useColorScheme();
  return scheme === "light" ? DarkTheme : LightTheme;
}
