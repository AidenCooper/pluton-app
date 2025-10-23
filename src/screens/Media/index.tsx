import { useTheme } from "@/hooks/useThemeStore";
import { Theme } from "@/styles/themes";
import { sp } from "@/utils/scaling";
import { StyleSheet, Text, View } from "react-native";

export default function MediaScreen() {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Media</Text>
    </View>
  );
}

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",

      backgroundColor: theme.palette.bgDark,
    },
    text: {
      color: theme.palette.primary,
      fontFamily: theme.font.regular.fontFamily,
      fontWeight: theme.font.regular.fontWeight,
      fontSize: sp(128),
    },
  });
