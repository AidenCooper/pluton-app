import { Theme } from "@react-navigation/native";
import { ColorValue } from "react-native";
import { DEFAULT_FONTS } from "./defaults";

const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: "#4F7FFF",
    background: "rgb(242, 242, 242)",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(216, 216, 216)",
    notification: "rgb(255, 59, 48)",
  },
  fonts: DEFAULT_FONTS,
};

type ColorScheme = {
  primary: ColorValue;
  secondary: ColorValue;
  background: ColorValue;
  backgroundPaper: ColorValue;
  error: ColorValue;
};

/*
* Dark:
    - primary:          #00a4dc
    - secondary:        #aa5cc3
    - background:       #101010
    - background-paper: #202020

* Light:
    - primary:          #00a4dc
    - secondary:        #aa5cc3
    - background:       #f2f2f2
    - background-paper: #e8e8e8

* Purple Haze:
    - primary:          #48c3c8
    - secondary:        #ff77f1
    - background:       #101010
    - background-paper: #000420
*/
