import { Theme } from "@react-navigation/native";

export const DEFAULT_FONTS = {
  regular: {
    fontFamily: "System",
    fontWeight: "500",
  },
  medium: {
    fontFamily: "System",
    fontWeight: "500",
  },
  bold: {
    fontFamily: "System",
    fontWeight: "500",
  },
  heavy: {
    fontFamily: "System",
    fontWeight: "500",
  },
} as const satisfies Theme["fonts"];

/*
regular: {
    // fontFamily: "JosefinSans_400Regular",
    fontFamily: "JosefinSans",
    fontWeight: "400",
  },
  medium: {
    // fontFamily: "JosefinSans_500Medium",
    fontFamily: "JosefinSans",
    fontWeight: "500",
  },
  bold: {
    // fontFamily: "JosefinSans_600SemiBold",
    fontFamily: "JosefinSans",
    fontWeight: "600",
  },
  heavy: {
    // fontFamily: "JsefinSans_700Bold",
    fontFamily: "JosefinSans",
    fontWeight: "700",
  },
*/
