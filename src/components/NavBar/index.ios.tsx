// sf icons: https://developer.apple.com/design/human-interface-guidelines/sf-symbols

import { useTheme } from "@/hooks/useThemeStore";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";

export default function NavBar() {
  const theme = useTheme();

  return (
    <NativeTabs tintColor={theme.palette.warning}>
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf={{ default: "house", selected: "house.fill" }} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="media">
        <Label>Media</Label>
        <Icon
          sf={{
            default: "rectangle.stack",
            selected: "rectangle.stack.fill",
          }}
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="profile">
        <Label>Profile</Label>
        <Icon
          sf={{ default: "person.circle", selected: "person.circle.fill" }}
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
