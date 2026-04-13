import { appColors } from "./colors";

export const spacing = {
  micro: 4,
  xsmall: 6,
  small: 8,
  medium: 12,
  large: 16,
  xlarge: 20,
} as const;

export const radii = {
  small: 18,
  medium: 24,
  large: 28,
  hero: 30,
  pill: 999,
} as const;

export const typography = {
  trackingLabel: 0.7,
  trackingHero: 0.8,
  lineHeightBody: 21,
  lineHeightBodyLarge: 23,
  lineHeightBodyRelaxed: 24,
  lineHeightHeadline: 34,
  lineHeightDisplay: 56,
} as const;

export const elevation = {
  raisedCard: {
    shadowColor: "#0F172A",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  focusCard: {
    shadowColor: "#10233D",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
} as const;

export const statusColors = {
  info: {
    surface: appColors.infoSurface,
    text: appColors.infoText,
    badgeSurface: appColors.infoSurface,
    badgeText: appColors.infoText,
  },
  success: {
    surface: appColors.successSurface,
    text: appColors.successText,
    badgeSurface: appColors.successSurface,
    badgeText: appColors.successText,
  },
  warning: {
    surface: appColors.warningSurface,
    text: appColors.warningText,
    badgeSurface: "#FDE7BF",
    badgeText: appColors.warningText,
  },
  danger: {
    surface: appColors.dangerSurface,
    text: appColors.dangerText,
    badgeSurface: "#F9D5D2",
    badgeText: appColors.dangerText,
  },
  neutral: {
    surface: appColors.surface,
    text: appColors.textSecondary,
    badgeSurface: appColors.surfaceVariant,
    badgeText: appColors.textSecondary,
  },
} as const;
