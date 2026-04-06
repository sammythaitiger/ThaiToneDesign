import {
  Easing,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";

export type MotionVariant = "hero" | "section" | "list";
export type MotionLayoutPreset = "standard" | "emphasis";

export const motionTokens = {
  duration: {
    quick: 180,
    standard: 260,
    relaxed: 340,
    stagger: 70,
  },
  distance: {
    hero: 24,
    section: 18,
    list: 12,
  },
  scale: {
    heroStart: 0.97,
    sectionStart: 0.985,
    listStart: 0.992,
  },
  easing: {
    entrance: Easing.out(Easing.cubic),
    emphasis: Easing.out(Easing.exp),
  },
} as const;

export function getMotionDelay(index: number, baseDelay = 0) {
  return baseDelay + index * motionTokens.duration.stagger;
}

export function getMotionVariantConfig(variant: MotionVariant) {
  if (variant === "hero") {
    return {
      distance: motionTokens.distance.hero,
      scaleStart: motionTokens.scale.heroStart,
      opacityDuration: motionTokens.duration.relaxed,
      transformDuration: motionTokens.duration.relaxed,
    };
  }

  if (variant === "list") {
    return {
      distance: motionTokens.distance.list,
      scaleStart: motionTokens.scale.listStart,
      opacityDuration: motionTokens.duration.quick,
      transformDuration: motionTokens.duration.standard,
    };
  }

  return {
    distance: motionTokens.distance.section,
    scaleStart: motionTokens.scale.sectionStart,
    opacityDuration: motionTokens.duration.standard,
    transformDuration: motionTokens.duration.relaxed,
  };
}

export function enableLayoutAnimations() {
  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export function animateNextLayout(preset: MotionLayoutPreset = "standard") {
  enableLayoutAnimations();

  const duration =
    preset === "emphasis"
      ? motionTokens.duration.relaxed
      : motionTokens.duration.standard;

  LayoutAnimation.configureNext({
    duration,
    create: {
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
      duration,
    },
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
      duration,
    },
    delete: {
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
      duration: motionTokens.duration.quick,
    },
  });
}
