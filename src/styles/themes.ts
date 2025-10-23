import { ColorPalette, DarkPalette, LightPalette } from "./colors";
import { FontScheme, JosefinSansFont } from "./fonts";

export type Theme = {
  title: string;
  dark: boolean;
  font: FontScheme;
  palette: ColorPalette;
};

export const PlutonDarkTheme: Theme = {
  dark: true,
  title: "PlutonDark",
  font: JosefinSansFont,
  palette: DarkPalette,
};

export const PlutonLightTheme: Theme = {
  dark: false,
  title: "PlutonLight",
  font: JosefinSansFont,
  palette: LightPalette,
};

export const DEFAULT_THEME = PlutonDarkTheme;

export function getThemes() {
  return [PlutonDarkTheme, PlutonLightTheme];
}
