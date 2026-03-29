import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Appbar, Button, Card, Text } from "react-native-paper";

import { BottomTabBar } from "../components/practice/BottomTabBar";
import { PracticeAnalyzingState } from "../components/practice/PracticeAnalyzingState";
import { PracticeReferencePanel } from "../components/practice/PracticeReferencePanel";
import { PracticeResultsPanel } from "../components/practice/PracticeResultsPanel";
import { appColors } from "../theme/colors";
import { AnalyzeResponse, PracticeWord } from "../types/practice";

type ToneWordPracticeScreenProps = {
  word: PracticeWord;
  analysis: AnalyzeResponse | null;
  isAnalyzing: boolean;
  errorMessage: string;
  onBack: () => void;
  onAnalyze: () => void;
  onReset: () => void;
  onRetry: () => void;
};

export function ToneWordPracticeScreen({
  word,
  analysis,
  isAnalyzing,
  errorMessage,
  onBack,
  onAnalyze,
  onReset,
  onRetry,
}: ToneWordPracticeScreenProps) {
  const headerTitle = isAnalyzing ? "Analyzing..." : analysis ? "Results" : word.thai;
  const hasPracticeError = Boolean(errorMessage) && !isAnalyzing && !analysis;

  return (
    <View style={styles.screen}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={onBack} />
        <Appbar.Content title={headerTitle} subtitle="Practice" />
        {analysis ? (
          <View style={styles.scoreBadge}>
            <Text variant="labelMedium" style={styles.scoreText}>
              {analysis.overall_accuracy}%
            </Text>
          </View>
        ) : (
          <Appbar.Action
            icon="volume-high"
            onPress={() => undefined}
            containerColor={appColors.surfaceVariant}
          />
        )}
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.content}>
        {!isAnalyzing ? (
          <View style={styles.modeBanner}>
            <Text variant="labelMedium" style={styles.modeBannerLabel}>
              Word practice
            </Text>
            <Text variant="bodyMedium" style={styles.modeBannerCopy}>
              Listen to the reference, inspect each syllable, then run analysis
              when you are ready.
            </Text>
          </View>
        ) : null}

        {!isAnalyzing && !analysis ? (
          <>
            <PracticeReferencePanel word={word} onAnalyze={onAnalyze} />
            <Text variant="bodyMedium" style={styles.backLink} onPress={onBack}>
              Back to word list
            </Text>
          </>
        ) : null}

        {isAnalyzing ? <PracticeAnalyzingState /> : null}

        {hasPracticeError ? (
          <Card style={styles.errorCard}>
            <Card.Content style={styles.errorContent}>
              <Text variant="headlineSmall" style={styles.errorTitle}>
                Analysis failed
              </Text>
              <Text variant="bodyMedium" style={styles.errorCopy}>
                {errorMessage}
              </Text>
              <View style={styles.errorActions}>
                <Button mode="contained" onPress={onRetry} contentStyle={styles.primaryButton}>
                  Try recording again
                </Button>
                <Button mode="outlined" onPress={onBack} contentStyle={styles.primaryButton}>
                  Back to word list
                </Button>
              </View>
            </Card.Content>
          </Card>
        ) : null}

        {analysis ? (
          <PracticeResultsPanel
            analysis={analysis}
            onTryAgain={onReset}
            onBackToWords={onBack}
          />
        ) : null}
      </ScrollView>

      {!isAnalyzing ? <BottomTabBar /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: appColors.background,
  },
  appbar: {
    backgroundColor: appColors.surface,
    borderBottomWidth: 1,
    borderBottomColor: appColors.outlineVariant,
  },
  scoreBadge: {
    marginRight: 16,
    borderRadius: 999,
    backgroundColor: appColors.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  scoreText: {
    color: appColors.onPrimary,
    fontWeight: "700",
  },
  content: {
    padding: 16,
    paddingBottom: 32,
    gap: 20,
  },
  modeBanner: {
    borderRadius: 24,
    backgroundColor: appColors.surface,
    padding: 18,
    gap: 8,
    borderWidth: 1,
    borderColor: appColors.outlineVariant,
  },
  modeBannerLabel: {
    color: appColors.primary,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  modeBannerCopy: {
    color: appColors.textSecondary,
    lineHeight: 21,
  },
  backLink: {
    color: appColors.primary,
    textAlign: "center",
    marginTop: 4,
  },
  errorCard: {
    borderRadius: 24,
    backgroundColor: appColors.warningSurface,
    borderWidth: 1,
    borderColor: appColors.outlineVariant,
  },
  errorContent: {
    gap: 12,
  },
  errorTitle: {
    color: appColors.warningText,
  },
  errorCopy: {
    color: appColors.textSecondary,
    lineHeight: 21,
  },
  errorActions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  primaryButton: {
    minHeight: 46,
  },
});
