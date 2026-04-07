import React, { useEffect, useMemo, useRef, useState } from "react";
import { Animated, LayoutChangeEvent, StyleSheet, View } from "react-native";
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

import { appColors, toneColors } from "../../theme/colors";
import { ThaiTone } from "../../types/practice";

type PitchContourGraphProps = {
  userPoints: number[];
  nativePoints: number[];
  tone?: ThaiTone;
  accuracy?: number;
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

function buildLineLength(points: ChartPoint[]) {
  if (points.length < 2) {
    return 0;
  }

  let length = 0;

  for (let index = 1; index < points.length; index += 1) {
    const previous = points[index - 1];
    const current = points[index];
    const dx = current.x - previous.x;
    const dy = current.y - previous.y;

    length += Math.sqrt(dx * dx + dy * dy);
  }

  return length;
}

function getGraphPalette(tone: ThaiTone | undefined, accuracy: number | undefined) {
  const nativeColor = tone ? toneColors[tone] : appColors.secondary;
  const weak = typeof accuracy === "number" && accuracy < 70;

  return {
    nativeColor,
    nativeSoft: `${nativeColor}33`,
    userColor: weak ? appColors.dangerText : appColors.primary,
    userSoft: weak ? "#E5737355" : "#2196F344",
    bandStart: weak ? "#F4433630" : "#2196F326",
    bandEnd: `${nativeColor}26`,
    frameBackground: weak ? "#FFF9F8" : appColors.surface,
    frameBorder: weak ? "#F3D6D2" : appColors.outlineVariant,
  };
}

const AnimatedPath = Animated.createAnimatedComponent(Path);

export function PitchContourGraph({
  userPoints,
  nativePoints,
  tone,
  accuracy,
}: PitchContourGraphProps) {
  const [width, setWidth] = useState(0);
  const height = 176;
  const padding = 20;
  const revealProgress = useRef(new Animated.Value(0)).current;
  const palette = getGraphPalette(tone, accuracy);

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
  }, [nativeChartPoints]);

  const nativeLength = useMemo(() => {
    return buildLineLength(nativeChartPoints);
  }, [nativeChartPoints]);

  const userLength = useMemo(() => {
    return buildLineLength(userChartPoints);
  }, [userChartPoints]);

  useEffect(() => {
    if (!width || !userPath || !nativePath) {
      return;
    }

    revealProgress.setValue(0);

    Animated.timing(revealProgress, {
      toValue: 1,
      duration: 700,
      delay: 80,
      useNativeDriver: false,
    }).start();
  }, [nativePath, revealProgress, userPath, width]);

  const nativeStrokeDashoffset = revealProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [nativeLength || 1, 0],
  });

  const userStrokeDashoffset = revealProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [userLength || 1, 0],
  });

  const bandOpacity = revealProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  function handleLayout(event: LayoutChangeEvent) {
    setWidth(event.nativeEvent.layout.width);
  }

  return (
    <View style={styles.container}>
      <View style={styles.legendRow}>
        <View style={styles.legendItem}>
          <View
            style={[
              styles.legendSwatch,
              { backgroundColor: palette.userColor },
            ]}
          />
          <Text variant="labelMedium" style={styles.legendText}>
            Your pitch
          </Text>
        </View>
        <View style={styles.legendItem}>
          <View
            style={[
              styles.legendSwatch,
              { backgroundColor: palette.nativeColor },
            ]}
          />
          <Text variant="labelMedium" style={styles.legendText}>
            Native
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.chartFrame,
          {
            backgroundColor: palette.frameBackground,
            borderColor: palette.frameBorder,
          },
        ]}
        onLayout={handleLayout}
      >
        {width > 0 ? (
          <Svg width={width} height={height}>
            <Defs>
              <LinearGradient id="userArea" x1="0%" y1="0%" x2="0%" y2="100%">
                <Stop offset="0%" stopColor={palette.userColor} stopOpacity="0.32" />
                <Stop offset="100%" stopColor={palette.userColor} stopOpacity="0.03" />
              </LinearGradient>
              <LinearGradient id="differenceBand" x1="0%" y1="0%" x2="100%" y2="0%">
                <Stop offset="0%" stopColor={palette.bandStart} />
                <Stop offset="100%" stopColor={palette.bandEnd} />
              </LinearGradient>
              <LinearGradient id="nativeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <Stop offset="0%" stopColor={palette.nativeColor} stopOpacity="0.12" />
                <Stop offset="100%" stopColor={palette.nativeColor} stopOpacity="0.3" />
              </LinearGradient>
            </Defs>

            <Rect
              x={0}
              y={0}
              width={width}
              height={height}
              rx={20}
              fill={palette.frameBackground}
            />

            {[0.2, 0.4, 0.6, 0.8].map((fraction) => {
              const x = padding + (width - padding * 2) * fraction;

              return (
                <Line
                  key={`grid-x-${fraction}`}
                  x1={x}
                  y1={padding}
                  x2={x}
                  y2={height - padding}
                  stroke={appColors.outlineVariant}
                  strokeOpacity={0.55}
                  strokeDasharray="4 6"
                  strokeWidth={1}
                />
              );
            })}

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
                  strokeDasharray="4 6"
                  strokeWidth={1}
                />
              );
            })}

            <AnimatedPath d={differenceBandPath} fill="url(#differenceBand)" opacity={bandOpacity} />
            <Path d={areaPath} fill="url(#userArea)" />
            <Path
              d={nativeGlowPath}
              stroke="url(#nativeGlow)"
              strokeWidth={8}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <AnimatedPath
              d={nativePath}
              stroke={palette.nativeColor}
              strokeWidth={3}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={nativeLength > 0 ? `${nativeLength} ${nativeLength}` : undefined}
              strokeDashoffset={nativeStrokeDashoffset}
            />
            <Path
              d={nativePath}
              stroke={palette.nativeColor}
              strokeOpacity={0.9}
              strokeWidth={2.5}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="6 4"
            />
            <AnimatedPath
              d={userPath}
              stroke={palette.userColor}
              strokeWidth={4.5}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={userLength > 0 ? `${userLength} ${userLength}` : undefined}
              strokeDashoffset={userStrokeDashoffset}
            />

            {nativeStart ? (
              <Circle
                cx={nativeStart.x}
                cy={nativeStart.y}
                r={4}
                fill={palette.nativeColor}
              />
            ) : null}
            {nativeEnd ? (
              <Circle
                cx={nativeEnd.x}
                cy={nativeEnd.y}
                r={4}
                fill={palette.nativeColor}
              />
            ) : null}
            {userStart ? (
              <Circle
                cx={userStart.x}
                cy={userStart.y}
                r={4.5}
                fill={palette.userColor}
              />
            ) : null}
            {userEnd ? (
              <Circle
                cx={userEnd.x}
                cy={userEnd.y}
                r={4.5}
                fill={palette.userColor}
              />
            ) : null}

            <SvgText
              x={padding}
              y={14}
              fill={appColors.textMuted}
              fontSize="10"
            >
              higher pitch
            </SvgText>
            <SvgText
              x={padding}
              y={height - padding - 10}
              fill={appColors.textMuted}
              fontSize="10"
            >
              lower pitch
            </SvgText>

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
  legendText: {
    color: appColors.textSecondary,
  },
  chartFrame: {
    minHeight: 176,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
  },
});
