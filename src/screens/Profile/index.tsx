import { useTheme } from "@/hooks/useTheme";
import { Theme } from "@/constants/Themes";
import { Text, View, StyleSheet } from "react-native";

export default function ProfileScreen() {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
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
      fontSize: 50,
    },
  });
