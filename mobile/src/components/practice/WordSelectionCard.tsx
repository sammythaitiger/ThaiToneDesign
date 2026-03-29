import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

import { appColors } from "../../theme/colors";
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
    borderRadius: 24,
    backgroundColor: appColors.surface,
    borderWidth: 1,
    borderColor: appColors.outlineVariant,
  },
  content: {
    gap: 14,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
  },
  titleBlock: {
    flex: 1,
  },
  wordTitle: {
    color: appColors.textPrimary,
  },
  transcription: {
    color: appColors.textSecondary,
    marginTop: 4,
    lineHeight: 21,
  },
  practiceBadge: {
    borderRadius: 999,
    backgroundColor: appColors.infoSurface,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  practiceBadgeText: {
    color: appColors.infoText,
    fontWeight: "700",
  },
  metaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  metaPill: {
    borderRadius: 999,
    backgroundColor: appColors.surfaceAlt,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  metaText: {
    color: appColors.textMuted,
  },
  tonesRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  actions: {
    justifyContent: "flex-end",
    paddingHorizontal: 12,
    paddingBottom: 12,
    paddingTop: 4,
  },
  buttonContent: {
    minHeight: 44,
  },
});
