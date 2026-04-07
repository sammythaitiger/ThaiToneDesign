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
import {
  showcaseAnalysis,
  showcaseWord,
  showcaseWords,
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
  return (
    <View style={styles.screen}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={onBack} />
        <Appbar.Content
          title="UI Showcase"
          subtitle="All main states in one place"
        />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.content}>
        <Card style={styles.heroCard}>
          <Card.Content style={styles.heroContent}>
            <Text variant="labelLarge" style={styles.heroEyebrow}>
              Dev tool
            </Text>
            <Text variant="headlineMedium" style={styles.heroTitle}>
              Visual review board
            </Text>
            <Text variant="bodyLarge" style={styles.heroCopy}>
              Use this screen to quickly inspect all important UI states without
              reproducing the real user flow every time.
            </Text>
          </Card.Content>
        </Card>

        <ShowcaseSection
          title="Selection"
          description="Word cards and the reusable states used on the practice library screen."
        >
          {showcaseWords.map((word) => (
            <WordSelectionCard
              key={word.id}
              word={word}
              onPractice={() => undefined}
            />
          ))}

          <PracticeStateCard
            eyebrow="Loading"
            title="Preparing your practice library"
            description="Fetching Thai tone words and getting the screen ready for practice."
          />
          <PracticeStateCard
            eyebrow="Error"
            title="Unable to load practice words"
            description="The server did not respond in time. Retry after checking the backend."
            tone="danger"
            primaryActionLabel="Retry"
            onPrimaryAction={() => undefined}
          />
          <PracticeStateCard
            eyebrow="No matches"
            title="No words match your criteria"
            description="Try broadening your filters or clearing the search query."
            primaryActionLabel="Clear all filters"
            onPrimaryAction={() => undefined}
          />
        </ShowcaseSection>

        <Divider />

        <ShowcaseSection
          title="Practice Flow"
          description="Permission, countdown, recording, upload/analyze, and final results."
        >
          <PracticePermissionState
            onGrant={() => undefined}
            onBack={() => undefined}
          />
          <PracticeCountdownState
            word={showcaseWord}
            countdownValue={3}
            onCancel={() => undefined}
          />
          <PracticeRecordingState
            word={showcaseWord}
            recordingSeconds={7}
            activeSyllableIndex={1}
            onStop={() => undefined}
            onCancel={() => undefined}
          />
          <PracticeAnalyzingState phase="uploading" />
          <PracticeAnalyzingState phase="analyzing" />
        </ShowcaseSection>

        <Divider />

        <ShowcaseSection
          title="Results"
          description="The full premium results panel with coaching, syllable breakdown, and graph states."
        >
          <PracticeResultsPanel
            analysis={showcaseAnalysis}
            onTryAgain={() => undefined}
            onBackToWords={() => undefined}
          />
        </ShowcaseSection>

        <Divider />

        <ShowcaseSection
          title="Shared Elements"
          description="Extra reusable pieces that are used across screens."
        >
          <PracticeStateCard
            eyebrow="Neutral"
            title="Shared state card"
            description="This is the neutral version of the reusable system card."
            primaryActionLabel="Primary action"
            onPrimaryAction={() => undefined}
            secondaryActionLabel="Secondary action"
            onSecondaryAction={() => undefined}
          />
          <Button mode="contained" onPress={() => undefined}>
            Sample CTA
          </Button>
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
    padding: 16,
    gap: 20,
    paddingBottom: 36,
  },
  heroCard: {
    borderRadius: 28,
    backgroundColor: appColors.heroPrimary,
  },
  heroContent: {
    gap: 10,
  },
  heroEyebrow: {
    color: appColors.heroAccent,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  heroTitle: {
    color: appColors.heroText,
  },
  heroCopy: {
    color: appColors.heroTextSoft,
    lineHeight: 23,
  },
  section: {
    gap: 14,
  },
  sectionHeader: {
    gap: 4,
  },
  sectionTitle: {
    color: appColors.textPrimary,
  },
  sectionDescription: {
    color: appColors.textSecondary,
    lineHeight: 21,
  },
  sectionBody: {
    gap: 16,
  },
});
