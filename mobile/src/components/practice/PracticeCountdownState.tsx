import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

import { appColors } from "../../theme/colors";
import { PracticeWord } from "../../types/practice";

type PracticeCountdownStateProps = {
  word: PracticeWord;
  countdownValue: number;
  onCancel: () => void;
};

export function PracticeCountdownState({
  word,
  countdownValue,
  onCancel,
}: PracticeCountdownStateProps) {
  return (
    <View style={styles.container}>
      <Card style={styles.heroCard}>
        <Card.Content style={styles.heroContent}>
          <View style={styles.badge}>
            <Text variant="labelMedium" style={styles.badgeText}>
              Get ready
            </Text>
          </View>

          <Text variant="headlineSmall" style={styles.title}>
            Recording starts in...
          </Text>
          <Text variant="displayLarge" style={styles.countdownValue}>
            {countdownValue}
          </Text>
          <Text variant="bodyLarge" style={styles.copy}>
            Prepare to say {word.thai} smoothly and keep the tone contour natural.
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.tipCard}>
        <Card.Content style={styles.tipContent}>
          <Text variant="titleMedium" style={styles.tipTitle}>
            Quick reminder
          </Text>
          <Text variant="bodyMedium" style={styles.tipText}>
            Start speaking right after the countdown finishes.
          </Text>
          <Text variant="bodyMedium" style={styles.tipText}>
            Aim for one connected take instead of pausing between syllables.
          </Text>
        </Card.Content>
      </Card>

      <Button mode="outlined" onPress={onCancel} contentStyle={styles.actionButton}>
        Cancel countdown
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 18,
  },
  heroCard: {
    borderRadius: 28,
    backgroundColor: appColors.heroPrimary,
  },
  heroContent: {
    alignItems: "center",
    gap: 12,
    paddingVertical: 8,
  },
  badge: {
    alignSelf: "flex-start",
    borderRadius: 999,
    backgroundColor: appColors.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  badgeText: {
    color: appColors.onPrimary,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  title: {
    color: appColors.heroText,
    textAlign: "center",
  },
  countdownValue: {
    color: appColors.heroAccent,
    fontWeight: "800",
  },
  copy: {
    color: appColors.heroTextSoft,
    textAlign: "center",
    lineHeight: 24,
  },
  tipCard: {
    borderRadius: 24,
    backgroundColor: appColors.surface,
    borderWidth: 1,
    borderColor: appColors.outlineVariant,
  },
  tipContent: {
    gap: 8,
  },
  tipTitle: {
    color: appColors.textPrimary,
  },
  tipText: {
    color: appColors.textSecondary,
    lineHeight: 21,
  },
  actionButton: {
    minHeight: 48,
  },
});
