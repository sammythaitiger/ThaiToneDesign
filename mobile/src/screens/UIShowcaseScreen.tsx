import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Appbar, Button, Card, Divider, Text } from "react-native-paper";

import { BottomTabBar } from "../components/practice/BottomTabBar";
import { PracticeAnalyzingState } from "../components/practice/PracticeAnalyzingState";
import { PracticeCountdownState } from "../components/practice/PracticeCountdownState";
import { PracticePermissionState } from "../components/practice/PracticePermissionState";
import { PracticeRecordingState } from "../components/practice/PracticeRecordingState";
import { PracticeResultsPanel } from "../components/practice/PracticeResultsPanel";
import { PracticeStateCard } from "../components/practice/PracticeStateCard";
import { WordSelectionCard } from "../components/practice/WordSelectionCard";
import { appColors } from "../theme/colors";
import { radii, spacing, typography } from "../theme/tokens";
import {
  DemoScenarioId,
  demoScenarios,
} from "../utils/showcaseData";

type UIShowcaseScreenProps = {
  onBack: () => void;
};

function ShowcaseSection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text variant="titleLarge" style={styles.sectionTitle}>
          {title}
        </Text>
        <Text variant="bodyMedium" style={styles.sectionDescription}>
          {description}
        </Text>
      </View>
      <View style={styles.sectionBody}>{children}</View>
    </View>
  );
}

export function UIShowcaseScreen({ onBack }: UIShowcaseScreenProps) {
  const [activeScenarioId, setActiveScenarioId] =
    React.useState<DemoScenarioId>("medium");
  const activeScenario =
    demoScenarios.find((scenario) => scenario.id === activeScenarioId) ??
    demoScenarios[1];

  return (
    <View style={styles.screen}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={onBack} />
        <Appbar.Content
          title="Demo Mode"
          subtitle="Stable presentation-safe flow"
        />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.content}>
        <Card style={styles.heroCard}>
          <Card.Content style={styles.heroContent}>
            <Text variant="labelLarge" style={styles.heroEyebrow}>
              Investor-ready
            </Text>
            <Text variant="headlineMedium" style={styles.heroTitle}>
              Controlled frontend demo mode
            </Text>
            <Text variant="bodyLarge" style={styles.heroCopy}>
              This flow stays stable even without live backend timing. Pick the
              scenario you want to present and walk through one coherent product
              story from selection to coaching.
            </Text>
            <View style={styles.heroMetaRow}>
              <View style={styles.heroMetaPill}>
                <Text variant="labelMedium" style={styles.heroMetaText}>
                  Deterministic data
                </Text>
              </View>
              <View style={styles.heroMetaPill}>
                <Text variant="labelMedium" style={styles.heroMetaText}>
                  No backend dependency
                </Text>
              </View>
            </View>
          </Card.Content>
        </Card>

        <ShowcaseSection
          title="Scenario Switcher"
          description="Swap between best, medium, and weak outcomes without changing the surrounding flow."
        >
          <PracticeStateCard
            eyebrow="Demo runtime"
            title={activeScenario.heroTitle}
            description={activeScenario.heroCopy}
          >
            <View style={styles.scenarioButtons}>
              {demoScenarios.map((scenario) => (
                <Button
                  key={scenario.id}
                  mode={scenario.id === activeScenario.id ? "contained" : "outlined"}
                  icon={
                    scenario.id === "best"
                      ? "trophy-outline"
                      : scenario.id === "medium"
                        ? "chart-line"
                        : "shield-check-outline"
                  }
                  onPress={() => setActiveScenarioId(scenario.id)}
                  contentStyle={styles.scenarioButtonContent}
                >
                  {scenario.label}
                </Button>
              ))}
            </View>
          </PracticeStateCard>
        </ShowcaseSection>

        <Divider />

        <ShowcaseSection
          title="Word Selection"
          description="A single chosen word keeps the setup controlled and visually coherent for the whole presentation."
        >
          <WordSelectionCard
            word={activeScenario.word}
            onPractice={() => undefined}
          />
          <PracticeStateCard
            eyebrow="Operator note"
            title="What to say while presenting"
            description={activeScenario.operatorNote}
            tone="neutral"
          />
        </ShowcaseSection>

        <Divider />

        <ShowcaseSection
          title="Recording Setup"
          description="Permission, countdown, and progress states are still available, but they now support a cleaner scripted demo path."
        >
          <PracticePermissionState
            onGrant={() => undefined}
            onBack={() => undefined}
          />
          <PracticeCountdownState
            word={activeScenario.word}
            countdownValue={3}
            onCancel={() => undefined}
          />
          <PracticeRecordingState
            word={activeScenario.word}
            recordingSeconds={7}
            activeSyllableIndex={Math.min(1, activeScenario.word.syllables.length - 1)}
            onStop={() => undefined}
            onCancel={() => undefined}
          />
          <PracticeAnalyzingState phase="uploading" />
          <PracticeAnalyzingState phase="analyzing" />
          <PracticeStateCard
            eyebrow="Safe fallback"
            title="Presentation-safe path"
            description="If a live recording is not ideal, this mode still lands on a curated result state with the same visual quality and pacing."
            primaryActionLabel="Use selected scenario"
            onPrimaryAction={() => undefined}
          />
        </ShowcaseSection>

        <Divider />

        <ShowcaseSection
          title="Results"
          description="Each scenario keeps the same polished result layout while changing only the outcome quality and coaching emphasis."
        >
          <PracticeStateCard
            eyebrow={activeScenario.label}
            title="Curated result story"
            description={activeScenario.resultSummary}
          />
          <PracticeResultsPanel
            analysis={activeScenario.analysis}
            onTryAgain={() => undefined}
            onBackToWords={() => undefined}
          />
        </ShowcaseSection>

        <Divider />

        <ShowcaseSection
          title="Fallback Surfaces"
          description="These are the supporting states that keep the demo stable if you want to narrate loading, recovery, or an unavailable path."
        >
          <PracticeStateCard
            eyebrow="Loading"
            title="Preparing the guided demo"
            description="Curated assets and practice states are loading so the walkthrough stays smooth."
          />
          <PracticeStateCard
            eyebrow="Recovery"
            title="Switch to another prepared scenario"
            description="If the current result is not the story you want to tell, move to another curated outcome without losing the polished flow."
            primaryActionLabel="Switch scenario"
            onPrimaryAction={() => undefined}
            secondaryActionLabel="Stay on current path"
            onSecondaryAction={() => undefined}
          />
        </ShowcaseSection>
      </ScrollView>

      <BottomTabBar />
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
  content: {
    padding: spacing.large,
    gap: spacing.xlarge,
    paddingBottom: 36,
  },
  heroCard: {
    borderRadius: radii.large,
    backgroundColor: appColors.heroPrimary,
  },
  heroContent: {
    gap: spacing.small,
  },
  heroEyebrow: {
    color: appColors.heroAccent,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: typography.trackingHero,
  },
  heroTitle: {
    color: appColors.heroText,
  },
  heroCopy: {
    color: appColors.heroTextSoft,
    lineHeight: typography.lineHeightBodyLarge,
  },
  heroMetaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.small,
  },
  heroMetaPill: {
    borderRadius: radii.pill,
    backgroundColor: "rgba(255,255,255,0.12)",
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
  },
  heroMetaText: {
    color: appColors.heroText,
    fontWeight: "700",
  },
  section: {
    gap: spacing.large,
  },
  sectionHeader: {
    gap: spacing.micro,
  },
  sectionTitle: {
    color: appColors.textPrimary,
  },
  sectionDescription: {
    color: appColors.textSecondary,
    lineHeight: typography.lineHeightBody,
  },
  sectionBody: {
    gap: spacing.large,
  },
  scenarioButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.small,
  },
  scenarioButtonContent: {
    minHeight: 44,
  },
});
