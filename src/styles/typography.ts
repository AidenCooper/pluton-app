import { TextStyle } from "react-native";

type FontFamily = "josefinSans";
type FontSize = "x10" | "x20" | "x30" | "x40" | "x50" | "x60" | "x70";
type FontWeight = "regular" | "semibold" | "bold";

type Header = "x10" | "x20" | "x30" | "x40" | "x50" | "x60" | "x70";
type Subheader = "x10" | "x20" | "x30" | "x40" | "x50";
type Body = "x10" | "x20" | "x30" | "x40" | "x50";

export const fontFamily: Record<FontFamily, TextStyle> = {
  josefinSans: {
    fontFamily: "JosefinSans",
  },
};

export const fontSize: Record<FontSize, TextStyle> = {
  x10: {
    fontSize: 13,
  },
  x20: {
    fontSize: 14,
  },
  x30: {
    fontSize: 16,
  },
  x40: {
    fontSize: 19,
  },
  x50: {
    fontSize: 24,
  },
  x60: {
    fontSize: 32,
  },
  x70: {
    fontSize: 38,
  },
};

export const fontWeight: Record<FontWeight, TextStyle> = {
  regular: {
    fontWeight: "400",
  },
  semibold: {
    fontWeight: "600",
  },
  bold: {
    fontWeight: "700",
  },
};

export const header: Record<Header, TextStyle> = {
  x10: {
    ...fontSize.x10,
    ...fontWeight.bold,
  },
  x20: {
    ...fontSize.x20,
    ...fontWeight.bold,
  },
  x30: {
    ...fontSize.x30,
    ...fontWeight.bold,
  },
  x40: {
    ...fontSize.x40,
    ...fontWeight.bold,
  },
  x50: {
    ...fontSize.x50,
    ...fontWeight.bold,
  },
  x60: {
    ...fontSize.x60,
    ...fontWeight.bold,
  },
  x70: {
    ...fontSize.x70,
    ...fontWeight.bold,
  },
};

export const subheader: Record<Subheader, TextStyle> = {
  x10: {
    ...fontSize.x10,
    ...fontWeight.semibold,
  },
  x20: {
    ...fontSize.x20,
    ...fontWeight.semibold,
  },
  x30: {
    ...fontSize.x30,
    ...fontWeight.semibold,
  },
  x40: {
    ...fontSize.x40,
    ...fontWeight.semibold,
  },
  x50: {
    ...fontSize.x50,
    ...fontWeight.semibold,
  },
};

export const body: Record<Body, TextStyle> = {
  x10: {
    ...fontSize.x10,
    ...fontWeight.regular,
  },
  x20: {
    ...fontSize.x20,
    ...fontWeight.regular,
  },
  x30: {
    ...fontSize.x30,
    ...fontWeight.regular,
  },
  x40: {
    ...fontSize.x40,
    ...fontWeight.regular,
  },
  x50: {
    ...fontSize.x50,
    ...fontWeight.regular,
  },
};
