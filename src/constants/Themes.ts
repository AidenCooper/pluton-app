// https://ui.shadcn.com/

type Theme = {
  foreground: string;
  background: string;

  card: string;
  cardForeground: string;

  popover: string;
  popoverForeground: string;

  primary: string;
  primaryForeground: string;

  secondary: string;
  secondaryForeground: string;

  muted: string;
  mutedForeground: string;

  accent: string;
  accentForeground: string;

  destructive: string;
  border: string;
  input: string;
  ring: string;

  chart1: string;
  chart2: string;
  chart3: string;
  chart4: string;
  chart5: string;

  sidebar: string;
  sidebarForeground: string;
  sidebarPrimary: string;
  sidebarPrimaryForeground: string;
  sidebarAccent: string;
  sidebarBorder: string;
  sidebarRing: string;
};

const DarkTheme: Theme = {
  background: "#09090B",
  foreground: "#FAFAFA",

  card: "#18181B",
  cardForeground: "#FAFAFA",

  popover: "#18181B",
  popoverForeground: "#FAFAFA",

  primary: "#155DFC",
  primaryForeground: "#EFF6FF",

  secondary: "#27272A",
  secondaryForeground: "#FAFAFA",

  muted: "#27272A",
  mutedForeground: "#9F9FA9",

  accent: "#27272A",
  accentForeground: "#FAFAFA",

  destructive: "#E7000B",
  border: "#FFFFFF1A",
  input: "#FFFFFF26",
  ring: "#1447E6",

  chart1: "#1447E6",
  chart2: "#00BC7D",
  chart3: "#FD9A00",
  chart4: "#AD46FF",
  chart5: "#FF2056",

  sidebar: "#18181B",
  sidebarForeground: "#FAFAFA",
  sidebarPrimary: "#155DFC",
  sidebarPrimaryForeground: "#FAFAFA",
  sidebarAccent: "#27272A",
  sidebarBorder: "#FFFFFF1A",
  sidebarRing: "#1447E6",
};

const LightTheme: Theme = {
  background: "white",
  foreground: "#09090B",

  card: "white",
  cardForeground: "09090B",

  popover: "white",
  popoverForeground: "#09090B",

  primary: "#2B7FFF",
  primaryForeground: "#EFF6FF",

  secondary: "#F4F4F5",
  secondaryForeground: "#18181B",

  muted: "#F4F4F5",
  mutedForeground: "#71717B",

  accent: "#F4F4F5",
  accentForeground: "#18181B",

  destructive: "#E7000B",
  border: "#E4E4E7",
  input: "#E4E4E7",
  ring: "#2B7FFF",

  chart1: "#F54A00",
  chart2: "#009689",
  chart3: "#104E64",
  chart4: "#FFBA00",
  chart5: "#FD9A00",

  sidebar: "#FAFAFA",
  sidebarForeground: "#09090B",
  sidebarPrimary: "#2B7FFF",
  sidebarPrimaryForeground: "#EFF6FF",
  sidebarAccent: "#F4F4F5",
  sidebarBorder: "#E4E4E7",
  sidebarRing: "#2B7FFF",
};

export { Theme, DarkTheme, LightTheme };

// Josefin Sans

/*
:root {
  --radius: 0.65rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.141 0.005 285.823);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.141 0.005 285.823);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.141 0.005 285.823);
  --primary: oklch(0.623 0.214 259.815);
  --primary-foreground: oklch(0.97 0.014 254.604);
  --secondary: oklch(0.967 0.001 286.375);
  --secondary-foreground: oklch(0.21 0.006 285.885);
  --muted: oklch(0.967 0.001 286.375);
  --muted-foreground: oklch(0.552 0.016 285.938);
  --accent: oklch(0.967 0.001 286.375);
  --accent-foreground: oklch(0.21 0.006 285.885);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.92 0.004 286.32);
  --input: oklch(0.92 0.004 286.32);
  --ring: oklch(0.623 0.214 259.815);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.141 0.005 285.823);
  --sidebar-primary: oklch(0.623 0.214 259.815);
  --sidebar-primary-foreground: oklch(0.97 0.014 254.604);
  --sidebar-accent: oklch(0.967 0.001 286.375);
  --sidebar-accent-foreground: oklch(0.21 0.006 285.885);
  --sidebar-border: oklch(0.92 0.004 286.32);
  --sidebar-ring: oklch(0.623 0.214 259.815);
}

.dark {
  --background: oklch(0.141 0.005 285.823);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.21 0.006 285.885);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.21 0.006 285.885);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.546 0.245 262.881);
  --primary-foreground: oklch(0.379 0.146 265.522);
  --secondary: oklch(0.274 0.006 286.033);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.274 0.006 286.033);
  --muted-foreground: oklch(0.705 0.015 286.067);
  --accent: oklch(0.274 0.006 286.033);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.488 0.243 264.376);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.21 0.006 285.885);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.546 0.245 262.881);
  --sidebar-primary-foreground: oklch(0.379 0.146 265.522);
  --sidebar-accent: oklch(0.274 0.006 286.033);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.488 0.243 264.376);
}
*/
