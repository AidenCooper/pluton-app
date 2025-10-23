import { PixelRatio } from "react-native";

// UI scaling
export function dp(px: number) {
  return px / PixelRatio.get();
}

// Font scaling
export function sp(px: number) {
  return px / (PixelRatio.getFontScale() * PixelRatio.get());
}
