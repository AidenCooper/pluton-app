// https://www.iamsajid.com/ui-colors/

import { ColorValue } from "react-native";

export type ColorPalette = {
  // Background
  bgDark: ColorValue;
  bg: ColorValue;
  bgLight: ColorValue;
  // Text
  text: ColorValue;
  textMuted: ColorValue;
  // Border
  highlight: ColorValue;
  border: ColorValue;
  borderMuted: ColorValue;
  // Action
  primary: ColorValue;
  secondary: ColorValue;
  // Alert
  danger: ColorValue;
  warning: ColorValue;
  success: ColorValue;
  info: ColorValue;
};

export const DarkPalette: ColorPalette = {
  // Background
  bgDark: "hsl(228 100% 4%)",
  bg: "hsl(214 100% 6%)",
  bgLight: "hsl(205 100% 7%)",
  // Text
  text: "hsl(204 100% 94%)",
  textMuted: "hsl(203 74% 68%)",
  // Border
  highlight: "hsl(198 100% 23%)",
  border: "hsl(201 100% 18%)",
  borderMuted: "hsl(206 100% 14%)",
  // Action
  primary: "hsl(200 100% 60%)",
  secondary: "hsl(28 96% 60%)",
  // Alert
  danger: "hsl(8 84% 66%)",
  warning: "hsl(54 100% 27%)",
  success: "hsl(160 100% 35%)",
  info: "hsl(217 100% 69%)",
};

export const LightPalette: ColorPalette = {
  // Background
  bgDark: "hsl(204 100% 89%)",
  bg: "hsl(204 100% 94%)",
  bgLight: "hsl(204 100% 100%)",
  // Text
  text: "hsl(233 100% 11%)",
  textMuted: "hsl(201 100% 18%)",
  // Border
  highlight: "hsl(203 100% 96%)",
  border: "hsl(197 100% 31%)",
  borderMuted: "hsl(197 100% 43%)",
  // Action
  primary: "hsl(201 100% 18%)",
  secondary: "hsl(27 100% 17%)",
  // Alert
  danger: "hsl(6 65% 41%);",
  warning: "hsl(52 100% 13%)",
  success: "hsl(161 100% 12%)",
  info: "hsl(217 67% 44%)",
};
