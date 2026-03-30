import React, { useMemo, useState } from "react";
import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import Svg, {
  Circle,
  Defs,
  Line,
  LinearGradient,
  Path,
  Rect,
  Stop,
  Text as SvgText,
} from "react-native-svg";
import { Text } from "react-native-paper";

import { appColors } from "../../theme/colors";

type PitchContourGraphProps = {
  userPoints: number[];
  nativePoints: number[];
};

type ChartPoint = {
  x: number;
  y: number;
};

function buildChartPoints(
  points: number[],
  width: number,
  height: number,
  padding: number
) {
  const usableWidth = width - padding * 2;
  const usableHeight = height - padding * 2;

  return points.map((point, index) => ({
    x: padding + (index / Math.max(points.length - 1, 1)) * usableWidth,
    y: padding + (1 - point) * usableHeight,
  }));
}

function buildSmoothLinePath(points: ChartPoint[]) {
  if (points.length === 0) {
    return "";
  }

  if (points.length === 1) {
    return `M ${points[0].x} ${points[0].y}`;
  }

  let path = `M ${points[0].x} ${points[0].y}`;

  for (let index = 0; index < points.length - 1; index += 1) {
    const current = points[index];
    const next = points[index + 1];
    const controlX = (current.x + next.x) / 2;

    path += ` Q ${controlX} ${current.y} ${next.x} ${next.y}`;
  }

  return path;
}

function buildAreaPath(points: ChartPoint[], height: number, padding: number) {
  if (points.length === 0) {
    return "";
  }

  const smoothTop = buildSmoothLinePath(points);
  const bottomY = height - padding;
  const start = points[0];
  const end = points[points.length - 1];

  return `${smoothTop} L ${end.x} ${bottomY} L ${start.x} ${bottomY} Z`;
}

export function PitchContourGraph({
  userPoints,
  nativePoints,
}: PitchContourGraphProps) {
  const [width, setWidth] = useState(0);
  const height = 140;
  const padding = 18;

  const userChartPoints = useMemo(() => {
    if (!width) {
      return [];
    }

    return buildChartPoints(userPoints, width, height, padding);
  }, [height, padding, userPoints, width]);

  const nativeChartPoints = useMemo(() => {
    if (!width) {
      return [];
    }

    return buildChartPoints(nativePoints, width, height, padding);
  }, [height, nativePoints, padding, width]);

  const nativePath = useMemo(() => {
    return buildSmoothLinePath(nativeChartPoints);
  }, [nativeChartPoints]);

  const userPath = useMemo(() => {
    return buildSmoothLinePath(userChartPoints);
  }, [userChartPoints]);

  const areaPath = useMemo(() => {
    return buildAreaPath(userChartPoints, height, padding);
  }, [height, padding, userChartPoints]);

  const nativeStart = nativeChartPoints[0];
  const nativeEnd = nativeChartPoints[nativeChartPoints.length - 1];
  const userStart = userChartPoints[0];
  const userEnd = userChartPoints[userChartPoints.length - 1];

  const differenceBandPath = useMemo(() => {
    if (!userChartPoints.length || !nativeChartPoints.length) {
      return "";
    }

    const upper = userChartPoints
      .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
      .join(" ");
    const lower = [...nativeChartPoints]
      .reverse()
      .map((point) => `L ${point.x} ${point.y}`)
      .join(" ");

    return `${upper} ${lower} Z`;
  }, [nativeChartPoints, userChartPoints]);

  const nativeGlowPath = useMemo(() => {
    return buildSmoothLinePath(nativeChartPoints);
  }, [height, nativePoints, width]);

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
              <LinearGradient id="differenceBand" x1="0%" y1="0%" x2="100%" y2="0%">
                <Stop offset="0%" stopColor="#2196F3" stopOpacity="0.12" />
                <Stop offset="100%" stopColor="#4CAF50" stopOpacity="0.12" />
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

            <Path d={differenceBandPath} fill="url(#differenceBand)" />
            <Path d={areaPath} fill="url(#userArea)" />
            <Path
              d={nativeGlowPath}
              stroke={appColors.secondary}
              strokeOpacity={0.18}
              strokeWidth={8}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d={nativePath}
              stroke={appColors.secondary}
              strokeWidth={3}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="6 4"
            />
            <Path
              d={userPath}
              stroke={appColors.primary}
              strokeWidth={4.5}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {nativeStart ? (
              <Circle
                cx={nativeStart.x}
                cy={nativeStart.y}
                r={4}
                fill={appColors.secondary}
              />
            ) : null}
            {nativeEnd ? (
              <Circle
                cx={nativeEnd.x}
                cy={nativeEnd.y}
                r={4}
                fill={appColors.secondary}
              />
            ) : null}
            {userStart ? (
              <Circle
                cx={userStart.x}
                cy={userStart.y}
                r={4.5}
                fill={appColors.primary}
              />
            ) : null}
            {userEnd ? (
              <Circle
                cx={userEnd.x}
                cy={userEnd.y}
                r={4.5}
                fill={appColors.primary}
              />
            ) : null}

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
