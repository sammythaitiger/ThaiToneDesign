import React from "react";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator, Button, Card, Text } from "react-native-paper";

import { appColors } from "../../theme/colors";

const STEPS = [
  "1. Syllable segmentation",
  "2. Pitch extraction for each syllable",
  "3. Tone comparison",
  "4. Generating feedback",
];

export function PracticeAnalyzingState() {
  return (
    <View style={styles.container}>
      <Card style={styles.heroCard}>
        <Card.Content style={styles.heroContent}>
          <View style={styles.heroBadge}>
            <Text variant="labelMedium" style={styles.heroBadgeText}>
              Analyzing
            </Text>
          </View>
          <Text variant="headlineSmall" style={styles.title}>
            Processing your recording...
          </Text>
          <Text variant="bodyLarge" style={styles.copy}>
            This usually takes 2-3 seconds.
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          {STEPS.map((step, index) => (
            <View key={step} style={styles.stepRow}>
              <Text variant="bodyMedium" style={styles.stepText}>
                {step}
              </Text>
              <Text variant="bodyMedium" style={styles.stepStatus}>
                {index < 2 ? "✓" : index === 2 ? "●" : "○"}
              </Text>
            </View>
          ))}
        </Card.Content>
      </Card>

      <Card style={styles.infoCard}>
        <Card.Content style={styles.infoContent}>
          <ActivityIndicator animating size="small" />
          <Text variant="bodyMedium" style={styles.infoText}>
            Comparing pitch contours and generating personalized feedback
          </Text>
        </Card.Content>
      </Card>

      <Button mode="contained" disabled icon="reload">
        Processing
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 18,
  },
  heroCard: {
    borderRadius: 28,
    backgroundColor: appColors.heroPrimary,
  },
  heroContent: {
    gap: 10,
  },
  heroBadge: {
    alignSelf: "flex-start",
    borderRadius: 999,
    backgroundColor: appColors.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  heroBadgeText: {
    color: appColors.onPrimary,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  title: {
    color: appColors.heroText,
  },
  copy: {
    color: appColors.heroTextSoft,
  },
  card: {
    borderRadius: 24,
    backgroundColor: appColors.surface,
    borderWidth: 1,
    borderColor: appColors.outlineVariant,
  },
  cardContent: {
    gap: 12,
  },
  stepRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  stepText: {
    color: appColors.textPrimary,
    flex: 1,
  },
  stepStatus: {
    color: appColors.primary,
    fontWeight: "700",
  },
  infoCard: {
    borderRadius: 24,
    backgroundColor: appColors.surfaceAlt,
    borderWidth: 1,
    borderColor: appColors.outlineVariant,
  },
  infoContent: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  infoText: {
    color: appColors.textSecondary,
    flex: 1,
    lineHeight: 21,
  },
});
