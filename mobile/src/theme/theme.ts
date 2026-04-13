import { MD3LightTheme } from "react-native-paper";
import { appColors } from "./colors";
import { radii } from "./tokens";

export const appTheme = {
  ...MD3LightTheme,
  roundness: radii.small,
  colors: {
    ...MD3LightTheme.colors,
    primary: appColors.primary,
    onPrimary: appColors.onPrimary,
    secondary: appColors.secondary,
    onSecondary: appColors.onSecondary,
    background: appColors.background,
    surface: appColors.surface,
    surfaceVariant: appColors.surfaceVariant,
    outline: appColors.outline,
    outlineVariant: appColors.outlineVariant,
    onSurface: appColors.textPrimary,
    onSurfaceVariant: appColors.textSecondary,
  },
};
