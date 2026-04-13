import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

import { appColors } from "../../theme/colors";
import { radii, spacing, statusColors, typography } from "../../theme/tokens";
import { PracticeWord } from "../../types/practice";
import { ToneChip } from "./ToneChip";

type WordSelectionCardProps = {
  word: PracticeWord;
  onPractice: () => void;
};

function getDifficulty(word: PracticeWord) {
  if (word.syllables.length >= 3) {
    return 3;
  }

  if (word.syllables.length === 2) {
    return 2;
  }

  return 1;
}

export function WordSelectionCard({
  word,
  onPractice,
}: WordSelectionCardProps) {
  const difficulty = getDifficulty(word);

  return (
    <Card style={styles.card} mode="elevated">
      <Card.Content style={styles.content}>
        <View style={styles.headerRow}>
          <View style={styles.titleBlock}>
            <Text variant="headlineSmall" style={styles.wordTitle}>
              {word.thai}
            </Text>
            <Text variant="bodyLarge" style={styles.transcription}>
              ({word.transcription}) - {word.english}
            </Text>
          </View>
          <View style={styles.practiceBadge}>
            <Text variant="labelMedium" style={styles.practiceBadgeText}>
              Ready
            </Text>
          </View>
        </View>

        <View style={styles.metaRow}>
          <View style={styles.metaPill}>
            <Text variant="bodyMedium" style={styles.metaText}>
              Syllables: {word.syllables.length}
            </Text>
          </View>
          <View style={styles.metaPill}>
            <Text variant="bodyMedium" style={styles.metaText}>
              Difficulty: {"★".repeat(difficulty)}
            </Text>
          </View>
        </View>

        <View style={styles.tonesRow}>
          {word.syllables.map((syllable, index) => (
            <ToneChip key={`${word.id}-${index}`} tone={syllable.tone} compact />
          ))}
        </View>
      </Card.Content>
      <Card.Actions style={styles.actions}>
        <Button
          mode="contained"
          icon="microphone"
          onPress={onPractice}
          contentStyle={styles.buttonContent}
        >
          Practice
        </Button>
      </Card.Actions>
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
  content: {
    gap: spacing.large,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: spacing.medium,
  },
  titleBlock: {
    flex: 1,
  },
  wordTitle: {
    color: appColors.textPrimary,
  },
  transcription: {
    color: appColors.textSecondary,
    marginTop: spacing.micro,
    lineHeight: typography.lineHeightBody,
  },
  practiceBadge: {
    borderRadius: radii.pill,
    backgroundColor: statusColors.info.badgeSurface,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
  },
  practiceBadgeText: {
    color: statusColors.info.badgeText,
    fontWeight: "700",
  },
  metaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.small,
  },
  metaPill: {
    borderRadius: radii.pill,
    backgroundColor: appColors.surfaceAlt,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
  },
  metaText: {
    color: appColors.textMuted,
  },
  tonesRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.small,
  },
  actions: {
    justifyContent: "flex-end",
    paddingHorizontal: spacing.medium,
    paddingBottom: spacing.medium,
    paddingTop: spacing.micro,
  },
  buttonContent: {
    minHeight: 44,
  },
});
