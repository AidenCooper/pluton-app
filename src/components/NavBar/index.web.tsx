import { Theme } from "@/constants/Themes";
import { useTheme } from "@/hooks/useTheme";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

export default function NavBar() {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="media" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    tabs: {
      color: "green",
      backgroundColor: "yellow",
    },
    trigger: {
      backgroundColor: "blue",
      color: "red",
    },
  });
