import { ViewStyle } from "react-native";

type BorderRadius = "small" | "base" | "large" | "max";
type BorderWidth = "thin" | "base" | "thick";
type Shadow = "base";

export const borderRadius: Record<BorderRadius, number> = {
  small: 5,
  base: 10,
  large: 20,
  max: 9999,
};

export const borderWidth: Record<BorderWidth, number> = {
  thin: 1,
  base: 2,
  thick: 3,
};

export const shadow: Record<Shadow, ViewStyle> = {
  base: {
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
};
