import useTheme from "@/hooks/useTheme";
import { Theme } from "@/types/theme";
import { Text, View, StyleSheet } from "react-native";

export default function SettingsTab() {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
    </View>
  );
}

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.background,
    },
    text: {
      color: theme.primary,
    },
  });
