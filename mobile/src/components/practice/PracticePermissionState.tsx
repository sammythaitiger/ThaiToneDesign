import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

import { appColors } from "../../theme/colors";

type PracticePermissionStateProps = {
  onGrant: () => void;
  onBack: () => void;
};

export function PracticePermissionState({
  onGrant,
  onBack,
}: PracticePermissionStateProps) {
  return (
    <View style={styles.container}>
      <Card style={styles.heroCard}>
        <Card.Content style={styles.heroContent}>
          <View style={styles.badge}>
            <Text variant="labelMedium" style={styles.badgeText}>
              Before you record
            </Text>
          </View>
          <Text variant="headlineSmall" style={styles.title}>
            We only need the microphone for your pronunciation attempt
          </Text>
          <Text variant="bodyLarge" style={styles.copy}>
            Thai Tones asks for microphone access only when you choose to
            record. That lets the app capture your attempt, compare the tone
            contour, and show coaching feedback right after.
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.stepsCard}>
        <Card.Content style={styles.stepsContent}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            What to expect
          </Text>
          <Text variant="bodyMedium" style={styles.stepText}>
            1. Tap the button below when you are ready to record
          </Text>
          <Text variant="bodyMedium" style={styles.stepText}>
            2. Record one short attempt for the selected word
          </Text>
          <Text variant="bodyMedium" style={styles.stepText}>
            3. See your score, graph, and next coaching step immediately after
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.reassuranceCard}>
        <Card.Content style={styles.reassuranceContent}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Why this feels safe
          </Text>
          <Text variant="bodyMedium" style={styles.stepText}>
            The permission prompt appears only at the moment you start the
            practice flow.
          </Text>
          <Text variant="bodyMedium" style={styles.stepText}>
            If you are not ready yet, you can go back to the word list without
            losing your place.
          </Text>
          <Text variant="bodyMedium" style={styles.stepText}>
            If permission was denied before, you can retry from here instead of
            hunting through the app.
          </Text>
        </Card.Content>
      </Card>

      <View style={styles.actions}>
        <Button mode="contained" onPress={onGrant} contentStyle={styles.primaryButton}>
          Continue to microphone prompt
        </Button>
        <Button mode="outlined" onPress={onBack} contentStyle={styles.primaryButton}>
          Not now
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
    borderRadius: 28,
    backgroundColor: appColors.dangerSurface,
    borderWidth: 1,
    borderColor: appColors.outlineVariant,
  },
  heroContent: {
    gap: 10,
  },
  badge: {
    alignSelf: "flex-start",
    borderRadius: 999,
    backgroundColor: appColors.dangerText,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  badgeText: {
    color: appColors.onPrimary,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.7,
  },
  title: {
    color: appColors.dangerText,
  },
  copy: {
    color: appColors.textSecondary,
    lineHeight: 22,
  },
  stepsCard: {
    borderRadius: 24,
    backgroundColor: appColors.surface,
    borderWidth: 1,
    borderColor: appColors.outlineVariant,
  },
  reassuranceCard: {
    borderRadius: 24,
    backgroundColor: appColors.surfaceAlt,
    borderWidth: 1,
    borderColor: appColors.outlineVariant,
  },
  stepsContent: {
    gap: 10,
  },
  reassuranceContent: {
    gap: 10,
  },
  sectionTitle: {
    color: appColors.textPrimary,
  },
  stepText: {
    color: appColors.textSecondary,
    lineHeight: 21,
  },
  actions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  primaryButton: {
    minHeight: 48,
  },
});
