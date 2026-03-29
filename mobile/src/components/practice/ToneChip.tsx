import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { ThaiTone } from "../../types/practice";
import { getToneMeta } from "../../utils/tone";

type ToneChipProps = {
  tone: ThaiTone;
  compact?: boolean;
};

export function ToneChip({ tone, compact = false }: ToneChipProps) {
  const toneMeta = getToneMeta(tone);

  return (
    <View
      style={[
        styles.chip,
        compact ? styles.compactChip : styles.regularChip,
        {
          backgroundColor: toneMeta.backgroundColor,
          borderColor: toneMeta.borderColor,
        },
      ]}
    >
      <Text
        variant={compact ? "labelSmall" : "labelMedium"}
        style={[styles.text, { color: toneMeta.textColor }]}
      >
        {toneMeta.label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    borderWidth: 1,
    borderRadius: 999,
    alignSelf: "flex-start",
    minHeight: 30,
    justifyContent: "center",
  },
  regularChip: {
    paddingHorizontal: 13,
    paddingVertical: 8,
  },
  compactChip: {
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  text: {
    fontWeight: "700",
    letterSpacing: 0.3,
  },
});
