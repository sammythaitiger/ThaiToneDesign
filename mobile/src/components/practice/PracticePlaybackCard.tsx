import React from "react";
import { StyleSheet, View } from "react-native";
import {
  ActivityIndicator,
  Button,
  Card,
  ProgressBar,
  Text,
} from "react-native-paper";

import { PlaybackStatus } from "../../hooks/useMockPlayback";
import { appColors } from "../../theme/colors";
import {
  elevation,
  radii,
  spacing,
  statusColors,
  typography,
} from "../../theme/tokens";

type PracticePlaybackCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  meta: string;
  sourceLabel: string;
  status: PlaybackStatus;
  progress: number;
  primaryLabel?: string;
  onPrimaryAction: () => void;
  secondaryLabel?: string;
  onSecondaryAction?: () => void;
};

function getStatusMeta(status: PlaybackStatus) {
  switch (status) {
    case "loading":
      return {
        chipBackground: statusColors.info.badgeSurface,
        chipText: statusColors.info.badgeText,
        copy: "Loading audio...",
        actionLabel: "Loading",
        icon: "progress-clock",
      };
    case "playing":
      return {
        chipBackground: statusColors.success.badgeSurface,
        chipText: statusColors.success.badgeText,
        copy: "Now playing",
        actionLabel: "Pause",
        icon: "pause-circle",
      };
    case "paused":
      return {
        chipBackground: statusColors.warning.badgeSurface,
        chipText: statusColors.warning.badgeText,
        copy: "Paused",
        actionLabel: "Resume",
        icon: "play-circle",
      };
    default:
      return {
        chipBackground: statusColors.neutral.badgeSurface,
        chipText: statusColors.neutral.badgeText,
        copy: "Ready to preview",
        actionLabel: "Play preview",
        icon: "play-circle",
      };
  }
}

export function PracticePlaybackCard({
  eyebrow,
  title,
  description,
  meta,
  sourceLabel,
  status,
  progress,
  primaryLabel,
  onPrimaryAction,
  secondaryLabel,
  onSecondaryAction,
}: PracticePlaybackCardProps) {
  const statusMeta = getStatusMeta(status);

  return (
    <Card
      style={[
        styles.card,
        status === "playing" || status === "paused" || status === "loading"
          ? styles.cardActive
          : null,
      ]}
    >
      <Card.Content style={styles.content}>
        <View style={styles.topRow}>
          <View style={styles.titleGroup}>
            <Text variant="labelSmall" style={styles.eyebrow}>
              {eyebrow}
            </Text>
            <Text variant="titleMedium" style={styles.title}>
              {title}
            </Text>
          </View>
          <View
            style={[
              styles.statusChip,
              { backgroundColor: statusMeta.chipBackground },
            ]}
          >
            <Text
              variant="labelMedium"
              style={[styles.statusChipText, { color: statusMeta.chipText }]}
            >
              {statusMeta.copy}
            </Text>
          </View>
        </View>

        <Text variant="bodyMedium" style={styles.description}>
          {description}
        </Text>

        <View style={styles.metaRow}>
          <Text variant="bodySmall" style={styles.metaCopy}>
            {meta}
          </Text>
          <Text variant="labelMedium" style={styles.sourceLabel}>
            {sourceLabel}
          </Text>
        </View>

        <View style={styles.progressRow}>
          <ProgressBar progress={progress} style={styles.progress} />
          {status === "loading" ? (
            <ActivityIndicator size={16} color={appColors.infoText} />
          ) : (
            <Text variant="labelSmall" style={styles.progressLabel}>
              {status === "idle" ? "00%" : `${Math.round(progress * 100)}%`}
            </Text>
          )}
        </View>

        <View style={styles.actionsRow}>
          <Button
            mode="contained"
            icon={statusMeta.icon}
            onPress={onPrimaryAction}
            contentStyle={styles.primaryButton}
            loading={status === "loading"}
            disabled={status === "loading"}
          >
            {primaryLabel ?? statusMeta.actionLabel}
          </Button>
          {secondaryLabel && onSecondaryAction ? (
            <Button
              mode="text"
              onPress={onSecondaryAction}
              contentStyle={styles.secondaryButton}
            >
              {secondaryLabel}
            </Button>
          ) : null}
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radii.medium,
    backgroundColor: appColors.surface,
    borderWidth: 1,
    borderColor: appColors.outlineVariant,
  },
  cardActive: {
    borderColor: appColors.primary,
    ...elevation.raisedCard,
  },
  content: {
    gap: spacing.large,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: spacing.medium,
  },
  titleGroup: {
    flex: 1,
    gap: spacing.micro,
  },
  eyebrow: {
    color: appColors.textMuted,
    textTransform: "uppercase",
    letterSpacing: typography.trackingLabel,
  },
  title: {
    color: appColors.textPrimary,
  },
  statusChip: {
    borderRadius: radii.pill,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
  },
  statusChipText: {
    fontWeight: "700",
  },
  description: {
    color: appColors.textSecondary,
    lineHeight: typography.lineHeightBody,
  },
  metaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: spacing.medium,
  },
  metaCopy: {
    color: appColors.textMuted,
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 180,
  },
  sourceLabel: {
    color: appColors.primary,
  },
  progressRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.small,
  },
  progress: {
    flex: 1,
    height: 8,
    borderRadius: radii.pill,
    backgroundColor: appColors.surfaceVariant,
  },
  progressLabel: {
    color: appColors.textMuted,
    minWidth: 34,
    textAlign: "right",
  },
  actionsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: spacing.small,
  },
  primaryButton: {
    minHeight: 48,
    paddingHorizontal: 4,
  },
  secondaryButton: {
    minHeight: 48,
    paddingHorizontal: 4,
  },
});
