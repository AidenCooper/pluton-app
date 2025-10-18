// sf icons: https://developer.apple.com/design/human-interface-guidelines/sf-symbols

import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { useTheme } from "@/hooks/useTheme";

export default function NavBar() {
  const theme = useTheme();

  return (
    <NativeTabs tintColor={theme.primary}>
      <NativeTabs.Trigger name="index">
        <Label>Discover</Label>
        <Icon sf={{ default: "safari", selected: "safari.fill" }} />
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
