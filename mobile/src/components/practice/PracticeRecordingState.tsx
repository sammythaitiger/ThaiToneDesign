import React, { useEffect, useMemo, useRef } from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

import { PracticeWord } from "../../types/practice";
import { appColors, toneColors } from "../../theme/colors";

type PracticeRecordingStateProps = {
  word: PracticeWord;
  recordingSeconds: number;
  activeSyllableIndex: number;
  onStop: () => void;
  onCancel: () => void;
};

function formatSeconds(value: number) {
  return `00:${value.toString().padStart(2, "0")}`;
}

export function PracticeRecordingState({
  word,
  recordingSeconds,
  activeSyllableIndex,
  onStop,
  onCancel,
}: PracticeRecordingStateProps) {
  const pulse = useRef(new Animated.Value(0)).current;
  const glow = useRef(new Animated.Value(0)).current;
  const waveValues = useMemo(
    () => Array.from({ length: 12 }, () => new Animated.Value(0.35)),
    []
  );

  useEffect(() => {
    const pulseLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1,
          duration: 1400,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    );

    const glowLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(glow, {
          toValue: 1,
          duration: 850,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(glow, {
          toValue: 0,
          duration: 850,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    );

    const waveLoops = waveValues.map((value, index) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(value, {
            toValue: 1,
            duration: 420 + index * 35,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
          Animated.timing(value, {
            toValue: 0.28,
            duration: 420 + index * 30,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
        ])
      )
    );

    pulseLoop.start();
    glowLoop.start();
    waveLoops.forEach((animation, index) => {
      setTimeout(() => {
        animation.start();
      }, index * 45);
    });

    return () => {
      pulseLoop.stop();
      glowLoop.stop();
      waveLoops.forEach((animation) => animation.stop());
    };
  }, [glow, pulse, waveValues]);

  const outerRingScale = pulse.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.6],
  });
  const outerRingOpacity = pulse.interpolate({
    inputRange: [0, 1],
    outputRange: [0.32, 0],
  });
  const innerRingScale = pulse.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.3],
  });
  const innerRingOpacity = pulse.interpolate({
    inputRange: [0, 1],
    outputRange: [0.48, 0],
  });
  const orbScale = glow.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.08],
  });

  return (
    <View style={styles.container}>
      <Card style={styles.heroCard}>
        <Card.Content style={styles.heroContent}>
          <View style={styles.heroTopRow}>
            <View style={styles.heroBadge}>
              <Text variant="labelMedium" style={styles.heroBadgeText}>
                Recording
              </Text>
            </View>
            <View style={styles.livePill}>
              <Animated.View
                style={[
                  styles.liveDot,
                  {
                    opacity: glow.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.45, 1],
                    }),
                  },
                ]}
              />
              <Text variant="labelMedium" style={styles.livePillText}>
                Live
              </Text>
            </View>
          </View>

          <View style={styles.orbStage}>
            <Animated.View
              style={[
                styles.outerRing,
                {
                  opacity: outerRingOpacity,
                  transform: [{ scale: outerRingScale }],
                },
              ]}
            />
            <Animated.View
              style={[
                styles.innerRing,
                {
                  opacity: innerRingOpacity,
                  transform: [{ scale: innerRingScale }],
                },
              ]}
            />
            <Animated.View
              style={[
                styles.centerOrb,
                {
                  transform: [{ scale: orbScale }],
                },
              ]}
            >
              <Text variant="headlineMedium" style={styles.centerOrbText}>
                ●
              </Text>
            </Animated.View>
          </View>

          <View style={styles.heroTextBlock}>
            <Text variant="headlineSmall" style={styles.heroTitle}>
              Recording {word.thai}...
            </Text>
            <Text variant="bodyLarge" style={styles.heroCopy}>
              Speak clearly and keep the tone contour smooth across syllables.
            </Text>
            <Text variant="headlineMedium" style={styles.timerText}>
              {formatSeconds(recordingSeconds)}
            </Text>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.waveCard}>
        <Card.Content style={styles.waveContent}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Real-time analysis
          </Text>
          <View style={styles.energyRow}>
            {waveValues.map((value, index) => (
              <Animated.View
                key={`${word.id}-energy-${index}`}
                style={[
                  styles.energyBar,
                  {
                    backgroundColor:
                      index % 3 === activeSyllableIndex % 3
                        ? appColors.primary
                        : appColors.heroAccentSoft,
                    transform: [{ scaleY: value }],
                  },
                ]}
              />
            ))}
          </View>

          <View style={styles.waveRow}>
            {word.syllables.map((syllable, index) => (
              <View
                key={`${word.id}-wave-${index}`}
                style={[
                  styles.waveBar,
                  {
                    backgroundColor:
                      index <= activeSyllableIndex
                        ? toneColors[syllable.tone]
                        : appColors.outlineVariant,
                  },
                  index === activeSyllableIndex ? styles.waveBarActive : null,
                ]}
              />
            ))}
          </View>
          <Text variant="bodyMedium" style={styles.helperText}>
            Active syllable: {word.syllables[activeSyllableIndex]?.thai ?? "--"}
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.feedbackCard}>
        <Card.Content style={styles.feedbackContent}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Detected syllables
          </Text>
          {word.syllables.map((syllable, index) => (
            <View key={`${word.id}-detected-${index}`} style={styles.detectedRow}>
              <Text variant="bodyMedium" style={styles.detectedLabel}>
                {index + 1}. {syllable.thai}
              </Text>
              <Text variant="bodyMedium" style={styles.detectedStatus}>
                {index < activeSyllableIndex
                  ? "Detected"
                  : index === activeSyllableIndex
                    ? "Recording..."
                    : "Waiting"}
              </Text>
            </View>
          ))}
        </Card.Content>
      </Card>

      <Card style={styles.tipsCard}>
        <Card.Content style={styles.tipsContent}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Tips for better recording
          </Text>
          <Text variant="bodyMedium" style={styles.tipText}>
            Speak clearly and naturally.
          </Text>
          <Text variant="bodyMedium" style={styles.tipText}>
            Do not rush between syllables.
          </Text>
          <Text variant="bodyMedium" style={styles.tipText}>
            Focus on the tone contour, not just the final pitch.
          </Text>
        </Card.Content>
      </Card>

      <View style={styles.actions}>
        <Button mode="contained" onPress={onStop} contentStyle={styles.primaryButton}>
          Stop
        </Button>
        <Button mode="outlined" onPress={onCancel} contentStyle={styles.primaryButton}>
          Cancel recording
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
    backgroundColor: appColors.heroPrimary,
  },
  heroContent: {
    gap: 16,
  },
  heroTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  heroBadge: {
    alignSelf: "flex-start",
    borderRadius: 999,
    backgroundColor: appColors.dangerText,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  heroBadgeText: {
    color: appColors.onPrimary,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  livePill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.08)",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: "#FF7B7B",
  },
  livePillText: {
    color: appColors.heroText,
    fontWeight: "700",
  },
  orbStage: {
    height: 176,
    alignItems: "center",
    justifyContent: "center",
  },
  outerRing: {
    position: "absolute",
    width: 144,
    height: 144,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.12)",
  },
  innerRing: {
    position: "absolute",
    width: 112,
    height: 112,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.18)",
  },
  centerOrb: {
    width: 84,
    height: 84,
    borderRadius: 999,
    backgroundColor: appColors.dangerText,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
  },
  centerOrbText: {
    color: appColors.onPrimary,
    lineHeight: 34,
  },
  heroTextBlock: {
    gap: 6,
    alignItems: "center",
  },
  heroTitle: {
    color: appColors.heroText,
    textAlign: "center",
  },
  heroCopy: {
    color: appColors.heroTextSoft,
    lineHeight: 22,
    textAlign: "center",
  },
  timerText: {
    color: appColors.heroAccent,
    marginTop: 4,
  },
  waveCard: {
    borderRadius: 24,
    backgroundColor: appColors.surface,
    borderWidth: 1,
    borderColor: appColors.outlineVariant,
  },
  waveContent: {
    gap: 14,
  },
  sectionTitle: {
    color: appColors.textPrimary,
  },
  energyRow: {
    height: 62,
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 6,
  },
  energyBar: {
    flex: 1,
    minHeight: 10,
    borderRadius: 999,
  },
  waveRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
    minHeight: 64,
  },
  waveBar: {
    flex: 1,
    borderRadius: 999,
    minHeight: 16,
  },
  waveBarActive: {
    minHeight: 54,
  },
  helperText: {
    color: appColors.textSecondary,
  },
  feedbackCard: {
    borderRadius: 24,
    backgroundColor: appColors.surfaceAlt,
    borderWidth: 1,
    borderColor: appColors.outlineVariant,
  },
  feedbackContent: {
    gap: 12,
  },
  detectedRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  detectedLabel: {
    color: appColors.textPrimary,
  },
  detectedStatus: {
    color: appColors.primary,
    fontWeight: "600",
  },
  tipsCard: {
    borderRadius: 24,
    backgroundColor: appColors.surface,
    borderWidth: 1,
    borderColor: appColors.outlineVariant,
  },
  tipsContent: {
    gap: 8,
  },
  tipText: {
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
