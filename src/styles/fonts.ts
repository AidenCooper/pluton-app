import { TextStyle } from "react-native";

export type FontStyle = {
  fontFamily: TextStyle["fontFamily"];
  fontWeight: TextStyle["fontWeight"];
};

export type FontScheme = {
  regular: FontStyle;
  medium: FontStyle;
  semibold: FontStyle;
  bold: FontStyle;
};

export const JosefinSansFont: FontScheme = {
  regular: {
    fontFamily: "JosefinSans",
    fontWeight: "500",
  },
  medium: {
    fontFamily: "JosefinSans",
    fontWeight: "600",
  },
  semibold: {
    fontFamily: "JosefinSans",
    fontWeight: "700",
  },
  bold: {
    fontFamily: "JosefinSans",
    fontWeight: "800",
  },
};
