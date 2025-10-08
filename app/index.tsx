import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";

export const CustomText = ({ children }: PropsWithChildren) => (
  <Text>{children}</Text>
);

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Testing</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
