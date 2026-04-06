import React, { useEffect, useRef } from "react";
import { Animated, StyleProp, ViewStyle } from "react-native";

import {
  MotionVariant,
  getMotionDelay,
  getMotionVariantConfig,
  motionTokens,
} from "../../utils/motion";

type AnimatedEntranceProps = {
  children: React.ReactNode;
  delay?: number;
  distance?: number;
  staggerIndex?: number;
  style?: StyleProp<ViewStyle>;
  variant?: MotionVariant;
};

export function AnimatedEntrance({
  children,
  delay = 0,
  distance,
  staggerIndex,
  style,
  variant = "section",
}: AnimatedEntranceProps) {
  const config = getMotionVariantConfig(variant);
  const resolvedDelay =
    typeof staggerIndex === "number" ? getMotionDelay(staggerIndex, delay) : delay;
  const resolvedDistance = distance ?? config.distance;

  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(resolvedDistance)).current;
  const scale = useRef(new Animated.Value(config.scaleStart)).current;

  useEffect(() => {
    opacity.setValue(0);
    translateY.setValue(resolvedDistance);
    scale.setValue(config.scaleStart);

    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: config.opacityDuration,
        delay: resolvedDelay,
        easing: motionTokens.easing.entrance,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: config.transformDuration,
        delay: resolvedDelay,
        easing: motionTokens.easing.entrance,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: config.transformDuration,
        delay: resolvedDelay,
        easing: motionTokens.easing.emphasis,
        useNativeDriver: true,
      }),
    ]).start();
  }, [
    config.opacityDuration,
    config.scaleStart,
    config.transformDuration,
    opacity,
    resolvedDelay,
    resolvedDistance,
    scale,
    translateY,
  ]);

  return (
    <Animated.View
      style={[
        style,
        {
          opacity,
          transform: [{ translateY }, { scale }],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}
