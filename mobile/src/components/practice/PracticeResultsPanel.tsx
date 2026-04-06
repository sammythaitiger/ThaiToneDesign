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

function getAccuracyTier(accuracy: number) {
  if (accuracy >= 85) {
    return "strong";
  }

  if (accuracy >= 70) {
    return "developing";
  }

  return "weak";
}

function getAccuracyTone(accuracy: number) {
  if (accuracy >= 85) {
    return {
      cardBackground: appColors.successSurface,
      cardBorder: "#CDE8CF",
      badgeBackground: appColors.successText,
      badgeText: appColors.onSecondary,
      eyebrowText: appColors.successText,
      feedbackBackground: "#F6FBF6",
      feedbackText: "#2C5F32",
      label: "Strong",
    };
  }

  if (accuracy >= 70) {
    return {
      cardBackground: appColors.warningSurface,
      cardBorder: "#F6D7A8",
      badgeBackground: appColors.warningText,
      badgeText: appColors.onPrimary,
      eyebrowText: appColors.warningText,
      feedbackBackground: "#FFF8ED",
      feedbackText: "#925F16",
      label: "Developing",
    };
  }

  return {
    cardBackground: appColors.dangerSurface,
    cardBorder: "#F3C7C3",
    badgeBackground: appColors.dangerText,
    badgeText: appColors.onPrimary,
    eyebrowText: appColors.dangerText,
    feedbackBackground: "#FFF5F4",
    feedbackText: "#8A2D25",
    label: "Needs work",
  };
}

export function PracticeResultsPanel({
  analysis,
  onTryAgain,
  onBackToWords,
}: PracticeResultsPanelProps) {
  const weakestSyllable = analysis.syllables.reduce((lowest, current) => {
    return current.accuracy < lowest.accuracy ? current : lowest;
  }, analysis.syllables[0]);
  const strongCount = analysis.syllables.filter(
    (syllable) => getAccuracyTier(syllable.accuracy) === "strong"
  ).length;
  const weakCount = analysis.syllables.filter(
    (syllable) => getAccuracyTier(syllable.accuracy) === "weak"
  ).length;

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

          <View style={styles.summaryHeroRow}>
            <View style={styles.summaryScoreBlock}>
              <Text variant="displaySmall" style={styles.summaryScore}>
                {analysis.overall_accuracy}%
              </Text>
              <Text variant="bodyLarge" style={styles.summaryCopy}>
                overall accuracy
              </Text>
            </View>

            <View style={styles.summaryInsightCard}>
              <Text variant="labelSmall" style={styles.summaryInsightLabel}>
                Main focus
              </Text>
              <Text variant="titleMedium" style={styles.summaryInsightValue}>
                {weakestSyllable?.syllable ?? "--"}
              </Text>
              <Text variant="bodySmall" style={styles.summaryInsightCopy}>
                weakest syllable right now
              </Text>
            </View>
          </View>

          <Text variant="headlineSmall" style={styles.summaryTitle}>
            Your result is ready.
          </Text>
          <Text variant="bodyLarge" style={styles.summaryCopy}>
            You can understand the score fast: timing is {analysis.timing_score}%,{" "}
            and the next coaching target is {weakestSyllable?.syllable ?? "the weakest syllable"}.
          </Text>
          <ProgressBar
            progress={analysis.overall_accuracy / 100}
            style={styles.progress}
          />

          <View style={styles.summaryStatsRow}>
            <View style={styles.summaryStatCard}>
              <Text variant="labelSmall" style={styles.summaryStatLabel}>
                Timing
              </Text>
              <Text variant="headlineSmall" style={styles.summaryStatValue}>
                {analysis.timing_score}%
              </Text>
            </View>
            <View style={styles.summaryStatCard}>
              <Text variant="labelSmall" style={styles.summaryStatLabel}>
                Strong syllables
              </Text>
              <Text variant="headlineSmall" style={styles.summaryStatValue}>
                {strongCount}
              </Text>
            </View>
            <View style={styles.summaryStatCard}>
              <Text variant="labelSmall" style={styles.summaryStatLabel}>
                Needs work
              </Text>
              <Text variant="headlineSmall" style={styles.summaryStatValue}>
                {weakCount}
              </Text>
            </View>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.nextStepCard}>
        <Card.Content style={styles.nextStepContent}>
          <View style={styles.nextStepTopRow}>
            <Text variant="labelMedium" style={styles.nextStepLabel}>
              Next step
            </Text>
            {weakestSyllable ? (
              <View style={styles.nextStepFocusPill}>
                <Text variant="labelMedium" style={styles.nextStepFocusText}>
                  Focus {weakestSyllable.syllable}
                </Text>
              </View>
            ) : null}
          </View>
          <Text variant="headlineSmall" style={styles.nextStepTitle}>
            Improve the weakest moment first.
          </Text>
          <Text variant="bodyLarge" style={styles.nextStepText}>
            {analysis.next_step}
          </Text>
        </Card.Content>
      </Card>

      <View style={styles.sectionHeader}>
        <View>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Syllable breakdown
          </Text>
          <Text variant="bodySmall" style={styles.sectionCopy}>
            Strong syllables are separated from the ones that need another pass.
          </Text>
        </View>
      </View>

      <View style={styles.resultsList}>
        {analysis.syllables.map((result) => (
          (() => {
            const tone = getAccuracyTone(result.accuracy);

            return (
              <Surface
                key={result.syllable}
                style={[
                  styles.resultCard,
                  {
                    backgroundColor: tone.cardBackground,
                    borderColor: tone.cardBorder,
                  },
                ]}
              >
                <View style={styles.resultHeader}>
                  <View style={styles.resultTitleGroup}>
                    <Text variant="labelSmall" style={[styles.resultEyebrow, { color: tone.eyebrowText }]}>
                      {tone.label}
                    </Text>
                    <Text variant="titleLarge" style={styles.resultTitle}>
                      {result.syllable}
                    </Text>
                    <Text variant="bodySmall" style={styles.resultSubtitle}>
                      Tone contour comparison
                    </Text>
                  </View>
                  <View style={[styles.badge, { backgroundColor: tone.badgeBackground }]}>
                    <Text
                      variant="labelMedium"
                      style={[styles.badgeText, { color: tone.badgeText }]}
                    >
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
                  <View style={styles.compareGroup}>
                    <Text variant="labelSmall" style={styles.compareLabel}>
                      Match
                    </Text>
                    <View style={styles.matchPill}>
                      <Text variant="labelSmall" style={styles.matchPillText}>
                        {result.expected_tone === result.detected_tone ? "Matched" : "Different"}
                      </Text>
                    </View>
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

                <View
                  style={[
                    styles.feedbackPanel,
                    { backgroundColor: tone.feedbackBackground },
                  ]}
                >
                  <Text
                    variant="bodySmall"
                    style={[styles.feedbackText, { color: tone.feedbackText }]}
                  >
                    {result.feedback}
                  </Text>
                </View>

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
            );
          })()
        ))}
      </View>

      <View style={styles.actions}>
        <Button mode="contained" onPress={onTryAgain} contentStyle={styles.actionButton}>
          Try again
        </Button>
        <Button mode="outlined" onPress={onBackToWords} contentStyle={styles.actionButton}>
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
    backgroundColor: appColors.heroPrimary,
  },
  summaryContent: {
    gap: 14,
  },
  summaryTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  summaryBadge: {
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.12)",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  summaryBadgeText: {
    color: appColors.heroText,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.7,
  },
  summaryMeta: {
    color: appColors.heroAccent,
  },
  summaryHeroRow: {
    flexDirection: "row",
    gap: 14,
    alignItems: "stretch",
  },
  summaryScoreBlock: {
    flex: 1.1,
    gap: 2,
  },
  summaryScore: {
    color: appColors.heroText,
    fontWeight: "800",
    lineHeight: 56,
  },
  summaryInsightCard: {
    flex: 0.9,
    borderRadius: 22,
    backgroundColor: "rgba(255,255,255,0.08)",
    padding: 14,
    gap: 6,
  },
  summaryInsightLabel: {
    color: appColors.heroAccent,
    textTransform: "uppercase",
    letterSpacing: 0.7,
  },
  summaryInsightValue: {
    color: appColors.heroText,
  },
  summaryInsightCopy: {
    color: appColors.heroTextMuted,
  },
  summaryTitle: {
    color: appColors.heroText,
  },
  summaryCopy: {
    color: appColors.heroTextSoft,
    lineHeight: 23,
  },
  summaryStatsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  summaryStatCard: {
    flex: 1,
    minWidth: 92,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.08)",
    padding: 14,
    gap: 4,
  },
  summaryStatLabel: {
    color: appColors.heroAccent,
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
  summaryStatValue: {
    color: appColors.heroText,
    fontWeight: "600",
  },
  progress: {
    height: 12,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.12)",
  },
  sectionHeader: {
    gap: 4,
  },
  sectionTitle: {
    color: appColors.textPrimary,
  },
  sectionCopy: {
    color: appColors.textSecondary,
    lineHeight: 20,
  },
  resultsList: {
    gap: 14,
  },
  resultCard: {
    borderRadius: 24,
    padding: 18,
    gap: 14,
    borderWidth: 1,
  },
  resultHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    alignItems: "center",
  },
  resultTitleGroup: {
    flex: 1,
    gap: 4,
  },
  resultEyebrow: {
    textTransform: "uppercase",
    letterSpacing: 0.7,
    fontWeight: "700",
  },
  resultTitle: {
    color: appColors.textPrimary,
  },
  resultSubtitle: {
    color: appColors.textMuted,
  },
  badge: {
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  badgeText: {
    fontWeight: "700",
  },
  compareRow: {
    flexDirection: "row",
    gap: 14,
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
  matchPill: {
    alignSelf: "flex-start",
    borderRadius: 999,
    backgroundColor: appColors.surface,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: appColors.outlineVariant,
  },
  matchPillText: {
    color: appColors.textSecondary,
    fontWeight: "700",
  },
  feedbackPanel: {
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  feedbackText: {
    lineHeight: 20,
  },
  resultActions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 2,
  },
  nextStepCard: {
    borderRadius: 26,
    backgroundColor: "#17324F",
    borderWidth: 1,
    borderColor: "#294A70",
  },
  nextStepContent: {
    gap: 10,
  },
  nextStepTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  nextStepLabel: {
    color: appColors.heroAccent,
    textTransform: "uppercase",
    letterSpacing: 0.7,
  },
  nextStepFocusPill: {
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.12)",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  nextStepFocusText: {
    color: appColors.heroText,
    fontWeight: "700",
  },
  nextStepTitle: {
    color: appColors.heroText,
  },
  nextStepText: {
    color: appColors.heroText,
    lineHeight: 24,
  },
  actions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 2,
  },
  actionButton: {
    minHeight: 48,
  },
});
