// sf icons: https://developer.apple.com/design/human-interface-guidelines/sf-symbols

import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";

export default function NavBarLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf="house.fill" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <Label>Settings</Label>
        <Icon sf="house.fill" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile" role="more">
        <Label>Profile</Label>
        <Icon sf="house.fill" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
