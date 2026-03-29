import React from "react";
import { StyleSheet, View } from "react-native";
import { Surface, Text } from "react-native-paper";

import { appColors } from "../../theme/colors";

const TABS = ["Home", "Dict", "Cards", "Video", "Stats"];

export function BottomTabBar() {
  return (
    <Surface style={styles.container} elevation={2}>
      {TABS.map((tab, index) => (
        <View
          key={tab}
          style={[styles.tab, index === 0 ? styles.tabActive : null]}
        >
          <Text
            variant="labelMedium"
            style={[
              styles.tabLabel,
              index === 0 ? styles.tabLabelActive : null,
            ]}
          >
            {tab}
          </Text>
        </View>
      ))}
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 12,
    backgroundColor: appColors.surface,
    borderTopWidth: 1,
    borderColor: appColors.outlineVariant,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 16,
  },
  tabActive: {
    backgroundColor: appColors.surfaceVariant,
  },
  tabLabel: {
    color: appColors.textMuted,
  },
  tabLabelActive: {
    color: appColors.primary,
    fontWeight: "700",
  },
});
