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
              Microphone access
            </Text>
          </View>
          <Text variant="headlineSmall" style={styles.title}>
            Microphone permission required
          </Text>
          <Text variant="bodyLarge" style={styles.copy}>
            To record your pronunciation, the app needs microphone access before
            you can begin the practice flow.
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.stepsCard}>
        <Card.Content style={styles.stepsContent}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            How to enable it
          </Text>
          <Text variant="bodyMedium" style={styles.stepText}>
            1. Grant microphone permission below
          </Text>
          <Text variant="bodyMedium" style={styles.stepText}>
            2. If needed later, open system settings and enable the mic
          </Text>
          <Text variant="bodyMedium" style={styles.stepText}>
            3. Return to the practice screen and start recording
          </Text>
        </Card.Content>
      </Card>

      <View style={styles.actions}>
        <Button mode="contained" onPress={onGrant} contentStyle={styles.primaryButton}>
          Grant permission
        </Button>
        <Button mode="outlined" onPress={onBack} contentStyle={styles.primaryButton}>
          Back to word list
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
  stepsContent: {
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
