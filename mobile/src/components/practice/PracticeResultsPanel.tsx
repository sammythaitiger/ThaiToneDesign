import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, ProgressBar, Surface, Text } from "react-native-paper";

import { AnalyzeResponse } from "../../types/practice";
import { appColors } from "../../theme/colors";
import { getNativeContourPoints, getUserContourPoints } from "../../utils/contours";
import { PitchContourGraph } from "./PitchContourGraph";
import { ToneChip } from "./ToneChip";

type PracticeResultsPanelProps = {
  analysis: AnalyzeResponse;
  onTryAgain: () => void;
  onBackToWords: () => void;
};

export function PracticeResultsPanel({
  analysis,
  onTryAgain,
  onBackToWords,
}: PracticeResultsPanelProps) {
  return (
    <View style={styles.container}>
      <Card style={styles.summaryCard}>
        <Card.Content style={styles.summaryContent}>
          <View style={styles.summaryTopRow}>
            <View style={styles.summaryBadge}>
              <Text variant="labelMedium" style={styles.summaryBadgeText}>
                Results
              </Text>
            </View>
            <Text variant="labelMedium" style={styles.summaryMeta}>
              {analysis.syllables.length} checks
            </Text>
          </View>
          <Text variant="headlineMedium" style={styles.summaryTitle}>
            Overall accuracy: {analysis.overall_accuracy}%
          </Text>
          <Text variant="bodyLarge" style={styles.summaryCopy}>
            Timing accuracy: {analysis.timing_score}%
          </Text>
          <ProgressBar
            progress={analysis.overall_accuracy / 100}
            style={styles.progress}
          />
          <View style={styles.summaryPills}>
            <View style={styles.summaryPill}>
              <Text variant="labelMedium" style={styles.summaryPillText}>
                Timing {analysis.timing_score}%
              </Text>
            </View>
            <View style={styles.summaryPill}>
              <Text variant="labelMedium" style={styles.summaryPillText}>
                Syllables {analysis.syllables.length}
              </Text>
            </View>
          </View>
        </Card.Content>
      </Card>

      <View style={styles.resultsList}>
        {analysis.syllables.map((result) => (
          <Surface
            key={result.syllable}
            style={[
              styles.resultCard,
              result.accuracy < 70 ? styles.resultCardWarning : null,
            ]}
          >
            <View style={styles.resultHeader}>
              <View style={styles.resultTitleGroup}>
                <Text variant="titleMedium" style={styles.resultTitle}>
                  {result.syllable}
                </Text>
                <Text variant="bodySmall" style={styles.resultSubtitle}>
                  Tone contour comparison
                </Text>
              </View>
              <View style={styles.badge}>
                <Text variant="labelMedium" style={styles.badgeText}>
                  {result.accuracy}%
                </Text>
              </View>
            </View>

            <View style={styles.compareRow}>
              <View style={styles.compareGroup}>
                <Text variant="labelSmall" style={styles.compareLabel}>
                  Expected
                </Text>
                <ToneChip tone={result.expected_tone} compact />
              </View>
              <View style={styles.compareGroup}>
                <Text variant="labelSmall" style={styles.compareLabel}>
                  Detected
                </Text>
                <ToneChip tone={result.detected_tone} compact />
              </View>
            </View>

            <PitchContourGraph
              userPoints={
                result.user_pitch_points ??
                getUserContourPoints(
                  result.expected_tone,
                  result.detected_tone,
                  result.accuracy
                )
              }
              nativePoints={
                result.native_pitch_points ??
                getNativeContourPoints(result.expected_tone)
              }
            />

            <Text variant="bodySmall" style={styles.feedbackText}>
              {result.feedback}
            </Text>

            <View style={styles.resultActions}>
              <Button mode="text" compact icon="play">
                Play yours
              </Button>
              <Button mode="text" compact icon="play-circle-outline">
                Play native
              </Button>
              {result.accuracy < 70 ? (
                <Button mode="contained-tonal" compact icon="refresh">
                  Practice syllable
                </Button>
              ) : null}
            </View>
          </Surface>
        ))}
      </View>

      <Card style={styles.nextStepCard}>
        <Card.Content>
          <Text variant="labelMedium" style={styles.nextStepLabel}>
            Next step
          </Text>
          <Text variant="bodyLarge" style={styles.nextStepText}>
            {analysis.next_step}
          </Text>
        </Card.Content>
      </Card>

      <View style={styles.actions}>
        <Button mode="contained" onPress={onTryAgain}>
          Try again
        </Button>
        <Button mode="outlined" onPress={onBackToWords}>
          Back to word list
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  summaryCard: {
    borderRadius: 28,
    backgroundColor: appColors.surface,
    borderWidth: 1,
    borderColor: appColors.outlineVariant,
  },
  summaryContent: {
    gap: 12,
  },
  summaryTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  summaryBadge: {
    borderRadius: 999,
    backgroundColor: appColors.infoSurface,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  summaryBadgeText: {
    color: appColors.infoText,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.7,
  },
  summaryMeta: {
    color: appColors.textMuted,
  },
  summaryTitle: {
    color: appColors.textPrimary,
  },
  summaryCopy: {
    color: appColors.textSecondary,
  },
  summaryPills: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  summaryPill: {
    borderRadius: 999,
    backgroundColor: appColors.surfaceAlt,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  summaryPillText: {
    color: appColors.textSecondary,
    fontWeight: "600",
  },
  progress: {
    height: 12,
    borderRadius: 999,
    backgroundColor: appColors.outlineVariant,
  },
  resultsList: {
    gap: 12,
  },
  resultCard: {
    borderRadius: 24,
    padding: 16,
    backgroundColor: appColors.surfaceAlt,
    gap: 12,
    borderWidth: 1,
    borderColor: appColors.outlineVariant,
  },
  resultHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    alignItems: "center",
  },
  resultTitleGroup: {
    flex: 1,
    gap: 2,
  },
  resultTitle: {
    color: appColors.textPrimary,
  },
  resultSubtitle: {
    color: appColors.textMuted,
  },
  badge: {
    borderRadius: 999,
    backgroundColor: appColors.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  badgeText: {
    color: appColors.onPrimary,
    fontWeight: "700",
  },
  compareRow: {
    flexDirection: "row",
    gap: 16,
    flexWrap: "wrap",
  },
  compareGroup: {
    gap: 6,
  },
  compareLabel: {
    color: appColors.textMuted,
    textTransform: "uppercase",
    letterSpacing: 0.7,
  },
  feedbackText: {
    color: appColors.textSecondary,
    lineHeight: 20,
  },
  resultActions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 2,
  },
  resultCardWarning: {
    backgroundColor: "#FFF9F1",
  },
  nextStepCard: {
    borderRadius: 24,
    backgroundColor: appColors.heroPrimary,
  },
  nextStepLabel: {
    color: appColors.heroAccent,
    textTransform: "uppercase",
    letterSpacing: 0.7,
  },
  nextStepText: {
    color: appColors.heroText,
    marginTop: 8,
    lineHeight: 24,
  },
  actions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 2,
  },
});
