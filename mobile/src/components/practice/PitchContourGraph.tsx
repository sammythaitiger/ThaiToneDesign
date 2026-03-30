import React, { useMemo, useState } from "react";
import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import Svg, { Defs, Line, LinearGradient, Path, Rect, Stop, Text as SvgText } from "react-native-svg";
import { Text } from "react-native-paper";

import { appColors } from "../../theme/colors";

type PitchContourGraphProps = {
  userPoints: number[];
  nativePoints: number[];
};

function buildLinePath(points: number[], width: number, height: number, padding: number) {
  const usableWidth = width - padding * 2;
  const usableHeight = height - padding * 2;

  return points
    .map((point, index) => {
      const x =
        padding +
        (index / Math.max(points.length - 1, 1)) * usableWidth;
      const y = padding + (1 - point) * usableHeight;

      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");
}

function buildAreaPath(points: number[], width: number, height: number, padding: number) {
  const usableWidth = width - padding * 2;
  const usableHeight = height - padding * 2;

  const top = points
    .map((point, index) => {
      const x =
        padding +
        (index / Math.max(points.length - 1, 1)) * usableWidth;
      const y = padding + (1 - point) * usableHeight;

      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  const endX = padding + usableWidth;
  const startX = padding;
  const bottomY = padding + usableHeight;

  return `${top} L ${endX} ${bottomY} L ${startX} ${bottomY} Z`;
}

export function PitchContourGraph({
  userPoints,
  nativePoints,
}: PitchContourGraphProps) {
  const [width, setWidth] = useState(0);
  const height = 140;
  const padding = 18;

  const nativePath = useMemo(() => {
    if (!width) {
      return "";
    }

    return buildLinePath(nativePoints, width, height, padding);
  }, [height, nativePoints, width]);

  const userPath = useMemo(() => {
    if (!width) {
      return "";
    }

    return buildLinePath(userPoints, width, height, padding);
  }, [height, userPoints, width]);

  const areaPath = useMemo(() => {
    if (!width) {
      return "";
    }

    return buildAreaPath(userPoints, width, height, padding);
  }, [height, userPoints, width]);

  function handleLayout(event: LayoutChangeEvent) {
    setWidth(event.nativeEvent.layout.width);
  }

  return (
    <View style={styles.container}>
      <View style={styles.legendRow}>
        <View style={styles.legendItem}>
          <View style={[styles.legendSwatch, styles.userSwatch]} />
          <Text variant="labelMedium" style={styles.legendText}>
            Your pitch
          </Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendSwatch, styles.nativeSwatch]} />
          <Text variant="labelMedium" style={styles.legendText}>
            Native
          </Text>
        </View>
      </View>

      <View style={styles.chartFrame} onLayout={handleLayout}>
        {width > 0 ? (
          <Svg width={width} height={height}>
            <Defs>
              <LinearGradient id="userArea" x1="0%" y1="0%" x2="0%" y2="100%">
                <Stop offset="0%" stopColor="#2196F3" stopOpacity="0.26" />
                <Stop offset="100%" stopColor="#2196F3" stopOpacity="0.02" />
              </LinearGradient>
            </Defs>

            <Rect
              x={0}
              y={0}
              width={width}
              height={height}
              rx={20}
              fill={appColors.surface}
            />

            {[0.2, 0.4, 0.6, 0.8].map((fraction) => {
              const y = padding + (height - padding * 2) * fraction;
              return (
                <Line
                  key={`grid-y-${fraction}`}
                  x1={padding}
                  y1={y}
                  x2={width - padding}
                  y2={y}
                  stroke={appColors.outlineVariant}
                  strokeDasharray="4 4"
                  strokeWidth={1}
                />
              );
            })}

            <Path d={areaPath} fill="url(#userArea)" />
            <Path
              d={nativePath}
              stroke={appColors.secondary}
              strokeWidth={4}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d={userPath}
              stroke={appColors.primary}
              strokeWidth={4}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <SvgText
              x={padding}
              y={height - 6}
              fill={appColors.textMuted}
              fontSize="11"
            >
              start
            </SvgText>
            <SvgText
              x={width - padding - 18}
              y={height - 6}
              fill={appColors.textMuted}
              fontSize="11"
            >
              end
            </SvgText>
          </Svg>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  legendRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 14,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  legendSwatch: {
    width: 12,
    height: 12,
    borderRadius: 999,
  },
  userSwatch: {
    backgroundColor: appColors.primary,
  },
  nativeSwatch: {
    backgroundColor: appColors.secondary,
  },
  legendText: {
    color: appColors.textSecondary,
  },
  chartFrame: {
    minHeight: 140,
    borderRadius: 20,
    backgroundColor: appColors.surface,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: appColors.outlineVariant,
  },
});
