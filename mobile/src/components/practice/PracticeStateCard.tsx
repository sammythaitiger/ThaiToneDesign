import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

import { appColors } from "../../theme/colors";
import { radii, spacing, statusColors, typography } from "../../theme/tokens";

type PracticeStateTone = "neutral" | "warning" | "danger";

type PracticeStateCardProps = {
  title: string;
  description: string;
  eyebrow?: string;
  tone?: PracticeStateTone;
  primaryActionLabel?: string;
  onPrimaryAction?: () => void;
  secondaryActionLabel?: string;
  onSecondaryAction?: () => void;
  children?: React.ReactNode;
};

const toneStyles: Record<
  PracticeStateTone,
  {
    cardBackground: string;
    badgeBackground: string;
    badgeText: string;
    borderColor: string;
  }
> = {
  neutral: {
    cardBackground: statusColors.neutral.surface,
    badgeBackground: statusColors.info.badgeSurface,
    badgeText: statusColors.info.badgeText,
    borderColor: appColors.outlineVariant,
  },
  warning: {
    cardBackground: statusColors.warning.surface,
    badgeBackground: statusColors.warning.badgeSurface,
    badgeText: statusColors.warning.badgeText,
    borderColor: appColors.outlineVariant,
  },
  danger: {
    cardBackground: statusColors.danger.surface,
    badgeBackground: statusColors.danger.badgeSurface,
    badgeText: statusColors.danger.badgeText,
    borderColor: appColors.outlineVariant,
  },
};

export function PracticeStateCard({
  title,
  description,
  eyebrow = "Status",
  tone = "neutral",
  primaryActionLabel,
  onPrimaryAction,
  secondaryActionLabel,
  onSecondaryAction,
  children,
}: PracticeStateCardProps) {
  const palette = toneStyles[tone];

  return (
    <Card
      style={[
        styles.card,
        {
          backgroundColor: palette.cardBackground,
          borderColor: palette.borderColor,
        },
      ]}
    >
      <Card.Content style={styles.content}>
        <View
          style={[
            styles.badge,
            {
              backgroundColor: palette.badgeBackground,
            },
          ]}
        >
          <Text
            variant="labelMedium"
            style={[
              styles.badgeText,
              {
                color: palette.badgeText,
              },
            ]}
          >
            {eyebrow}
          </Text>
        </View>

        <View style={styles.copyBlock}>
          <Text variant="headlineSmall" style={styles.title}>
            {title}
          </Text>
          <Text variant="bodyMedium" style={styles.description}>
            {description}
          </Text>
        </View>

        {children ? <View style={styles.children}>{children}</View> : null}

        {primaryActionLabel || secondaryActionLabel ? (
          <View style={styles.actions}>
            {primaryActionLabel && onPrimaryAction ? (
              <Button
                mode="contained"
                onPress={onPrimaryAction}
                contentStyle={styles.buttonContent}
              >
                {primaryActionLabel}
              </Button>
            ) : null}

            {secondaryActionLabel && onSecondaryAction ? (
              <Button
                mode="outlined"
                onPress={onSecondaryAction}
                contentStyle={styles.buttonContent}
              >
                {secondaryActionLabel}
              </Button>
            ) : null}
          </View>
        ) : null}
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radii.medium,
    borderWidth: 1,
  },
  content: {
    gap: spacing.large,
  },
  badge: {
    alignSelf: "flex-start",
    borderRadius: radii.pill,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
  },
  badgeText: {
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: typography.trackingLabel,
  },
  copyBlock: {
    gap: spacing.small,
  },
  title: {
    color: appColors.textPrimary,
  },
  description: {
    color: appColors.textSecondary,
    lineHeight: typography.lineHeightBody,
  },
  children: {
    gap: spacing.medium,
  },
  actions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.small,
  },
  buttonContent: {
    minHeight: 46,
  },
});
