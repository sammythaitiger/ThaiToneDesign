import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

import { appColors } from "../../theme/colors";

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
    cardBackground: appColors.surface,
    badgeBackground: appColors.infoSurface,
    badgeText: appColors.infoText,
    borderColor: appColors.outlineVariant,
  },
  warning: {
    cardBackground: appColors.warningSurface,
    badgeBackground: "#FDE7BF",
    badgeText: appColors.warningText,
    borderColor: appColors.outlineVariant,
  },
  danger: {
    cardBackground: appColors.dangerSurface,
    badgeBackground: "#F9D5D2",
    badgeText: appColors.dangerText,
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
    borderRadius: 24,
    borderWidth: 1,
  },
  content: {
    gap: 14,
  },
  badge: {
    alignSelf: "flex-start",
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  badgeText: {
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.7,
  },
  copyBlock: {
    gap: 8,
  },
  title: {
    color: appColors.textPrimary,
  },
  description: {
    color: appColors.textSecondary,
    lineHeight: 21,
  },
  children: {
    gap: 12,
  },
  actions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  buttonContent: {
    minHeight: 46,
  },
});
