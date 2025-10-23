import { ColorPalette, DarkPalette } from "./colors";
import { FontScheme, JosefinSansFont } from "./fonts";

export type Theme = {
  font: FontScheme;
  palette: ColorPalette;
};

export const PlutonTheme: Theme = {
  font: JosefinSansFont,
  palette: DarkPalette,
};
