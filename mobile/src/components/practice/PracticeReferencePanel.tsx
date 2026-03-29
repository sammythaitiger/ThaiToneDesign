import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

import { appColors, toneColors } from "../../theme/colors";
import { PracticeWord } from "../../types/practice";
import { ToneChip } from "./ToneChip";

type PracticeReferencePanelProps = {
  word: PracticeWord;
  onAnalyze: () => void;
};

function getSyllableDuration(index: number) {
  return (0.2 + index * 0.05).toFixed(2);
}

export function PracticeReferencePanel({
  word,
  onAnalyze,
}: PracticeReferencePanelProps) {
  return (
    <View style={styles.container}>
      <Card style={styles.heroCard}>
        <Card.Content style={styles.summaryContent}>
          <View style={styles.summaryTopRow}>
            <View style={styles.summaryBadge}>
              <Text variant="labelMedium" style={styles.summaryBadgeText}>
                Practice
              </Text>
            </View>
            <Text variant="labelMedium" style={styles.summaryMeta}>
              {word.syllables.length} syllables
            </Text>
          </View>
          <Text variant="displaySmall" style={styles.summaryWord}>
            {word.thai}
          </Text>
          <Text variant="titleMedium" style={styles.summaryTitle}>
            {word.transcription}
          </Text>
          <Text variant="bodyLarge" style={styles.summaryCopy}>
            {word.english}
          </Text>
        </Card.Content>
      </Card>

      <Text variant="titleMedium" style={styles.sectionTitle}>
        Syllable breakdown
      </Text>

      <View style={styles.syllableGrid}>
        {word.syllables.map((syllable, index) => (
          <Card key={`${word.id}-${index}`} style={styles.syllableCard}>
            <Card.Content style={styles.syllableContent}>
              <Text variant="headlineSmall" style={styles.syllableThai}>
                {syllable.thai}
              </Text>
              <Text variant="bodyMedium" style={styles.syllableTranscription}>
                ({syllable.transcription})
              </Text>
              <ToneChip tone={syllable.tone} compact />
              <Text variant="bodySmall" style={styles.durationText}>
                {getSyllableDuration(index)}s
              </Text>
            </Card.Content>
          </Card>
        ))}
      </View>

      <Card style={styles.sectionCard}>
        <Card.Content style={styles.sectionCardContent}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Listen to native pronunciation
          </Text>
          <View style={styles.audioControls}>
            <Button
              mode="contained-tonal"
              icon="play-circle-outline"
              contentStyle={styles.actionButton}
            >
              Play whole word
            </Button>
            {word.syllables.map((_, index) => (
              <Button
                key={`${word.id}-play-${index}`}
                mode="outlined"
                compact
                icon="play"
                contentStyle={styles.compactActionButton}
              >
                {index + 1}
              </Button>
            ))}
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.sectionCard}>
        <Card.Content style={styles.sectionCardContent}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Visual timeline (reference)
          </Text>
          <View style={styles.timelineRow}>
            {word.syllables.map((syllable, index) => (
              <View
                key={`${word.id}-timeline-${index}`}
                style={[
                  styles.timelineSegment,
                  { backgroundColor: toneColors[syllable.tone] },
                ]}
              >
                <Text variant="labelMedium" style={styles.timelineText}>
                  {syllable.thai}
                </Text>
                <Text variant="labelSmall" style={styles.timelineDuration}>
                  {getSyllableDuration(index)}s
                </Text>
              </View>
            ))}
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.sectionCard}>
        <Card.Content style={styles.sectionCardContent}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Recording instructions
          </Text>
          <View style={styles.instructionsList}>
            <Text variant="bodyMedium" style={styles.instructionText}>
              1. Press the practice button below
            </Text>
            <Text variant="bodyMedium" style={styles.instructionText}>
              2. Pronounce each syllable clearly
            </Text>
            <Text variant="bodyMedium" style={styles.instructionText}>
              3. Try to match the tone pattern
            </Text>
          </View>
        </Card.Content>
      </Card>

      <View style={styles.ctaPanel}>
        <Button
          mode="contained"
          icon="record-circle"
          contentStyle={styles.ctaButton}
          onPress={onAnalyze}
        >
          Record and analyze
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 18,
  },
  heroCard: {
    borderRadius: 30,
    backgroundColor: appColors.heroPrimary,
  },
  summaryContent: {
    gap: 10,
    paddingVertical: 6,
  },
  summaryTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  summaryBadge: {
    borderRadius: 999,
    backgroundColor: appColors.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  summaryBadgeText: {
    color: appColors.onPrimary,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.7,
  },
  summaryMeta: {
    color: appColors.heroAccent,
  },
  summaryWord: {
    color: appColors.heroText,
  },
  summaryTitle: {
    color: appColors.heroTextMuted,
  },
  summaryCopy: {
    color: appColors.heroTextSoft,
    lineHeight: 24,
  },
  sectionTitle: {
    color: appColors.textPrimary,
  },
  syllableGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  syllableCard: {
    width: "31%",
    minWidth: 96,
    borderRadius: 20,
    backgroundColor: appColors.surface,
    borderWidth: 1,
    borderColor: appColors.outlineVariant,
  },
  syllableContent: {
    alignItems: "center",
    gap: 8,
  },
  syllableThai: {
    color: appColors.textPrimary,
  },
  syllableTranscription: {
    color: appColors.textSecondary,
  },
  durationText: {
    color: appColors.textMuted,
  },
  sectionCard: {
    borderRadius: 22,
    backgroundColor: appColors.surface,
    borderWidth: 1,
    borderColor: appColors.outlineVariant,
  },
  sectionCardContent: {
    gap: 14,
  },
  audioControls: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  actionButton: {
    minHeight: 44,
  },
  compactActionButton: {
    minHeight: 40,
  },
  timelineRow: {
    flexDirection: "row",
    gap: 8,
  },
  timelineSegment: {
    flex: 1,
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 8,
    alignItems: "center",
    minHeight: 92,
    justifyContent: "center",
  },
  timelineText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  timelineDuration: {
    color: "#FFFFFF",
    marginTop: 4,
  },
  instructionsList: {
    gap: 8,
  },
  instructionText: {
    color: appColors.textSecondary,
    lineHeight: 21,
  },
  ctaPanel: {
    borderRadius: 28,
    backgroundColor: appColors.heroPrimary,
    padding: 20,
  },
  ctaButton: {
    minHeight: 56,
  },
});
