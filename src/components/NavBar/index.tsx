import { useTheme } from "@/hooks/useTheme";
import { Tabs } from "expo-router";
import { NavBarIcon } from "./Icon";

export default function NavBar() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: theme.primary,

        tabBarItemStyle: {
          alignItems: "center",
          flexDirection: "row",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 0,
        },
        tabBarStyle: {
          backgroundColor: theme.sidebar,

          borderRadius: 50,
          borderTopWidth: 0,

          bottom: 30,
          height: 60,
          paddingBottom: 0,
          marginLeft: "10%",
          marginRight: "10%",

          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused, size }) => (
            <NavBarIcon
              name="home-outline"
              selected="home"
              color={color}
              focused={focused}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="media"
        options={{
          title: "Media",
          tabBarIcon: ({ color, focused, size }) => (
            <NavBarIcon
              name="play-box-multiple-outline"
              selected="play-box-multiple"
              color={color}
              focused={focused}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused, size }) => (
            <NavBarIcon
              name="account-circle-outline"
              selected="account-circle"
              color={color}
              focused={focused}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
