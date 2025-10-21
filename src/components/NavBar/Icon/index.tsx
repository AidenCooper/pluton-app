import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ComponentProps } from "react";

// prettier-ignore
type MaterialCommunityIconProps = ComponentProps<typeof MaterialCommunityIcons>;

type NavBarIconProps = {
  name: MaterialCommunityIconProps["name"];
  selected?: MaterialCommunityIconProps["name"];
  focused?: boolean;
} & Omit<MaterialCommunityIconProps, "name">;

function NavBarIcon({
  name,
  selected,
  focused = false,
  ...rest
}: NavBarIconProps) {
  const iconName = focused && selected ? selected : name;
  return <MaterialCommunityIcons name={iconName} {...rest} />;
}

export { MaterialCommunityIconProps, NavBarIconProps, NavBarIcon };
