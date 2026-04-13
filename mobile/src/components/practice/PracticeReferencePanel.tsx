import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

import { useMockPlayback } from "../../hooks/useMockPlayback";
import { appColors, toneColors } from "../../theme/colors";
import { radii, spacing, typography } from "../../theme/tokens";
import { PracticeWord } from "../../types/practice";
import { PracticePlaybackCard } from "./PracticePlaybackCard";
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
  const playback = useMockPlayback({
    durationMs: Math.max(word.syllables.length * 850, 1800),
  });

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

      <PracticePlaybackCard
        eyebrow="Reference audio"
        title="Native pronunciation guide"
        description="Preview the full word before recording so the pacing and tone movement feel intentional."
        meta={`${word.transcription} • ${word.syllables.length} syllables`}
        sourceLabel="Native"
        status={playback.getStatus("native-reference")}
        progress={playback.getProgress("native-reference")}
        onPrimaryAction={() => playback.toggle("native-reference")}
        secondaryLabel="Start recording"
        onSecondaryAction={onAnalyze}
      />

      <Card style={styles.sectionCard}>
        <Card.Content style={styles.sectionCardContent}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Before you start
          </Text>
          <View style={styles.instructionsList}>
            <Text variant="bodyMedium" style={styles.instructionText}>
              Take one calm breath and listen to the native preview first.
            </Text>
            <Text variant="bodyMedium" style={styles.instructionText}>
              You only need one smooth take. The app will guide you after the
              analysis if anything sounds off.
            </Text>
            <Text variant="bodyMedium" style={styles.instructionText}>
              If you are not ready, go back to the word list and return when
              you want to try again.
            </Text>
          </View>
        </Card.Content>
      </Card>

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
              1. Play the native preview once before recording
            </Text>
            <Text variant="bodyMedium" style={styles.instructionText}>
              2. Pronounce each syllable clearly and in one smooth take
            </Text>
            <Text variant="bodyMedium" style={styles.instructionText}>
              3. Match the tone pattern, then stop to compare your result
            </Text>
          </View>
        </Card.Content>
      </Card>

      <View style={styles.ctaPanel}>
        <Button
          mode="contained"
          icon="microphone"
          contentStyle={styles.ctaButton}
          onPress={onAnalyze}
        >
          Start recording
        </Button>
        <Text variant="bodySmall" style={styles.ctaHint}>
          The microphone prompt only appears when you choose to record.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.xlarge,
  },
  heroCard: {
    borderRadius: radii.hero,
    backgroundColor: appColors.heroPrimary,
  },
  summaryContent: {
    gap: spacing.small,
    paddingVertical: spacing.xsmall,
  },
  summaryTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: spacing.medium,
  },
  summaryBadge: {
    borderRadius: radii.pill,
    backgroundColor: appColors.primary,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
  },
  summaryBadgeText: {
    color: appColors.onPrimary,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: typography.trackingLabel,
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
    lineHeight: typography.lineHeightBodyRelaxed,
  },
  sectionTitle: {
    color: appColors.textPrimary,
  },
  syllableGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.medium,
  },
  syllableCard: {
    width: "31%",
    minWidth: 96,
    borderRadius: radii.small,
    backgroundColor: appColors.surface,
    borderWidth: 1,
    borderColor: appColors.outlineVariant,
  },
  syllableContent: {
    alignItems: "center",
    gap: spacing.small,
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
    borderRadius: radii.small,
    backgroundColor: appColors.surface,
    borderWidth: 1,
    borderColor: appColors.outlineVariant,
  },
  sectionCardContent: {
    gap: spacing.large,
  },
  timelineRow: {
    flexDirection: "row",
    gap: spacing.small,
  },
  timelineSegment: {
    flex: 1,
    borderRadius: radii.small,
    paddingVertical: spacing.xlarge,
    paddingHorizontal: spacing.small,
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
    gap: spacing.small,
  },
  instructionText: {
    color: appColors.textSecondary,
    lineHeight: typography.lineHeightBody,
  },
  ctaPanel: {
    borderRadius: radii.large,
    backgroundColor: appColors.heroPrimary,
    padding: spacing.xlarge,
    gap: spacing.small,
  },
  ctaButton: {
    minHeight: 56,
  },
  ctaHint: {
    color: appColors.heroTextMuted,
    lineHeight: typography.lineHeightBody,
    textAlign: "center",
  },
});
