import { AnalyzeResponse, ThaiTone } from "../types/practice";

export type CoachingIssueType =
  | "uncertain"
  | "timing_misalignment"
  | "unstable_contour"
  | "late_drop"
  | "early_rise"
  | "high_offset"
  | "low_offset"
  | "compressed_range"
  | "exaggerated_range"
  | "strong_match";

export type CoachingSignal = {
  issueType: CoachingIssueType;
  severity: number;
  focusSyllable: string;
  whyCopy: string;
  graphCopy: string;
  nextAction: string;
  uiLabel: string;
};

type SyllableAnalysis = AnalyzeResponse["syllables"][number];

type ContourStats = {
  average: number;
  min: number;
  max: number;
  range: number;
  start: number;
  end: number;
  slope: number;
  instability: number;
};

type CoachingRule = {
  issueType: CoachingIssueType;
  priority: number;
  matches: (context: CoachingContext) => boolean;
  build: (context: CoachingContext) => CoachingSignal;
};

type CoachingContext = {
  analysis: AnalyzeResponse;
  syllable: SyllableAnalysis;
  expectedTone: ThaiTone;
  detectedTone: ThaiTone;
  userStats: ContourStats;
  nativeStats: ContourStats;
};

function getStats(points: number[] | undefined, fallbackTone: ThaiTone) {
  const base =
    points && points.length > 0
      ? points
      : fallbackTone === "mid"
        ? [0.52, 0.52, 0.53, 0.52, 0.52, 0.52, 0.52]
        : fallbackTone === "low"
          ? [0.66, 0.61, 0.54, 0.47, 0.39, 0.33, 0.29]
          : fallbackTone === "falling"
            ? [0.8, 0.75, 0.67, 0.55, 0.41, 0.29, 0.21]
            : fallbackTone === "high"
              ? [0.4, 0.46, 0.54, 0.62, 0.7, 0.78, 0.85]
              : [0.3, 0.26, 0.24, 0.3, 0.42, 0.61, 0.82];

  const average = base.reduce((sum, value) => sum + value, 0) / base.length;
  const min = Math.min(...base);
  const max = Math.max(...base);
  const range = max - min;
  const start = base[0];
  const end = base[base.length - 1];
  let instability = 0;

  for (let index = 1; index < base.length; index += 1) {
    instability += Math.abs(base[index] - base[index - 1]);
  }

  return {
    average,
    min,
    max,
    range,
    start,
    end,
    slope: end - start,
    instability,
  };
}

function buildContext(analysis: AnalyzeResponse, syllable: SyllableAnalysis): CoachingContext {
  const userStats = getStats(syllable.user_pitch_points, syllable.detected_tone);
  const nativeStats = getStats(syllable.native_pitch_points, syllable.expected_tone);

  return {
    analysis,
    syllable,
    expectedTone: syllable.expected_tone,
    detectedTone: syllable.detected_tone,
    userStats,
    nativeStats,
  };
}

function getFocusSyllable(analysis: AnalyzeResponse) {
  if (analysis.syllables.length === 0) {
    return {
      syllable: "--",
      expected_tone: "mid" as ThaiTone,
      detected_tone: "mid" as ThaiTone,
      accuracy: analysis.overall_accuracy,
      feedback: analysis.next_step,
    };
  }

  const sorted = [...analysis.syllables].sort((left, right) => {
    if (left.accuracy !== right.accuracy) {
      return left.accuracy - right.accuracy;
    }

    return right.feedback.length - left.feedback.length;
  });

  return sorted[0] ?? analysis.syllables[0];
}

function isStrongMatch(context: CoachingContext) {
  return (
    context.syllable.accuracy >= 85 &&
    Math.abs(context.userStats.average - context.nativeStats.average) < 0.06 &&
    context.userStats.range >= 0.03
  );
}

function isUncertain(context: CoachingContext) {
  return context.analysis.overall_accuracy < 55 && context.userStats.instability > 0.7;
}

function isTimingMismatch(context: CoachingContext) {
  return context.analysis.timing_score < 70;
}

function isUnstableContour(context: CoachingContext) {
  return context.userStats.instability > 0.55 && context.syllable.accuracy < 80;
}

function isLateDrop(context: CoachingContext) {
  return (
    context.expectedTone === "falling" &&
    context.detectedTone !== "falling" &&
    context.userStats.slope > context.nativeStats.slope + 0.12
  );
}

function isEarlyRise(context: CoachingContext) {
  return (
    (context.expectedTone === "mid" || context.expectedTone === "low") &&
    (context.detectedTone === "rising" || context.detectedTone === "high") &&
    context.userStats.end > context.nativeStats.end + 0.05
  );
}

function isHighOffset(context: CoachingContext) {
  return context.userStats.average > context.nativeStats.average + 0.08;
}

function isLowOffset(context: CoachingContext) {
  return context.userStats.average < context.nativeStats.average - 0.08;
}

function isCompressedRange(context: CoachingContext) {
  return context.userStats.range < context.nativeStats.range * 0.72;
}

function isExaggeratedRange(context: CoachingContext) {
  return context.userStats.range > context.nativeStats.range * 1.28;
}

function buildStrongMatch(context: CoachingContext): CoachingSignal {
  return {
    issueType: "strong_match",
    severity: 10,
    focusSyllable: context.syllable.syllable,
    whyCopy: "The shape is already strong; only a small polish remains.",
    graphCopy: "Your line is very close to the native contour.",
    nextAction: "Repeat once at the same pace to lock in the shape.",
    uiLabel: "Almost there",
  };
}

function buildUncertain(context: CoachingContext): CoachingSignal {
  return {
    issueType: "uncertain",
    severity: 100,
    focusSyllable: context.syllable.syllable,
    whyCopy: "The signal is too noisy to judge pronunciation confidently.",
    graphCopy: "The graph is noisy, so the comparison is not reliable.",
    nextAction: "Record again a little slower and steadier.",
    uiLabel: "Try again for a cleaner signal",
  };
}

function buildTimingMismatch(context: CoachingContext): CoachingSignal {
  return {
    issueType: "timing_misalignment",
    severity: 95,
    focusSyllable: context.syllable.syllable,
    whyCopy: "The syllable timing drifted, which makes the word less readable.",
    graphCopy: "Your line stretches where the native contour keeps a tighter rhythm.",
    nextAction: "Shorten the phrase and keep the tempo more even.",
    uiLabel: "Timing needs cleanup",
  };
}

function buildUnstableContour(context: CoachingContext): CoachingSignal {
  return {
    issueType: "unstable_contour",
    severity: 90,
    focusSyllable: context.syllable.syllable,
    whyCopy: "Pitch jumps around, so the contour is harder to read.",
    graphCopy: "The line is more jagged than the native sample.",
    nextAction: "Say the syllable more evenly, without tiny bumps.",
    uiLabel: "Stabilize the contour",
  };
}

function buildLateDrop(context: CoachingContext): CoachingSignal {
  return {
    issueType: "late_drop",
    severity: 85,
    focusSyllable: context.syllable.syllable,
    whyCopy: "The drop starts too late.",
    graphCopy: "Your line stays above the native line longer than it should.",
    nextAction: "Start the drop earlier and do not hold the peak too long.",
    uiLabel: "Drop earlier",
  };
}

function buildEarlyRise(context: CoachingContext): CoachingSignal {
  return {
    issueType: "early_rise",
    severity: 85,
    focusSyllable: context.syllable.syllable,
    whyCopy: "The contour rises earlier than it should.",
    graphCopy: "Your line lifts before the native shape does.",
    nextAction: "Remove the extra lift at the start and keep the tone lower.",
    uiLabel: "Reduce the early rise",
  };
}

function buildHighOffset(context: CoachingContext): CoachingSignal {
  return {
    issueType: "high_offset",
    severity: 75,
    focusSyllable: context.syllable.syllable,
    whyCopy: "The whole syllable sits above the target shape.",
    graphCopy: "Your line stays above the native contour for most of the syllable.",
    nextAction: "Lower the overall pitch slightly.",
    uiLabel: "Lower the pitch line",
  };
}

function buildLowOffset(context: CoachingContext): CoachingSignal {
  return {
    issueType: "low_offset",
    severity: 75,
    focusSyllable: context.syllable.syllable,
    whyCopy: "The whole syllable sits below the target level.",
    graphCopy: "Your line stays below the native contour for most of the syllable.",
    nextAction: "Raise the overall pitch slightly.",
    uiLabel: "Raise the pitch line",
  };
}

function buildCompressedRange(context: CoachingContext): CoachingSignal {
  return {
    issueType: "compressed_range",
    severity: 70,
    focusSyllable: context.syllable.syllable,
    whyCopy: "The contour is too flat, which makes it harder to distinguish.",
    graphCopy: "On the graph, your line moves less than the native contour.",
    nextAction: "Make the pitch movement more noticeable, but keep it smooth.",
    uiLabel: "Open the contour more",
  };
}

function buildExaggeratedRange(context: CoachingContext): CoachingSignal {
  return {
    issueType: "exaggerated_range",
    severity: 70,
    focusSyllable: context.syllable.syllable,
    whyCopy: "The contour is too sharp or exaggerated.",
    graphCopy: "Your line moves farther away from native than it should.",
    nextAction: "Soften the movement and make the shape feel more natural.",
    uiLabel: "Tone it down",
  };
}

const coachingRules: CoachingRule[] = [
  {
    issueType: "uncertain",
    priority: 100,
    matches: isUncertain,
    build: buildUncertain,
  },
  {
    issueType: "timing_misalignment",
    priority: 95,
    matches: isTimingMismatch,
    build: buildTimingMismatch,
  },
  {
    issueType: "unstable_contour",
    priority: 90,
    matches: isUnstableContour,
    build: buildUnstableContour,
  },
  {
    issueType: "late_drop",
    priority: 85,
    matches: isLateDrop,
    build: buildLateDrop,
  },
  {
    issueType: "early_rise",
    priority: 85,
    matches: isEarlyRise,
    build: buildEarlyRise,
  },
  {
    issueType: "high_offset",
    priority: 75,
    matches: isHighOffset,
    build: buildHighOffset,
  },
  {
    issueType: "low_offset",
    priority: 75,
    matches: isLowOffset,
    build: buildLowOffset,
  },
  {
    issueType: "compressed_range",
    priority: 70,
    matches: isCompressedRange,
    build: buildCompressedRange,
  },
  {
    issueType: "exaggerated_range",
    priority: 70,
    matches: isExaggeratedRange,
    build: buildExaggeratedRange,
  },
  {
    issueType: "strong_match",
    priority: 10,
    matches: isStrongMatch,
    build: buildStrongMatch,
  },
];

export function buildCoachingSignal(analysis: AnalyzeResponse): CoachingSignal {
  const focusSyllable = getFocusSyllable(analysis);
  const context = buildContext(analysis, focusSyllable);
  const matchingRules = coachingRules
    .filter((rule) => rule.matches(context))
    .sort((left, right) => right.priority - left.priority);

  if (matchingRules.length > 0) {
    return matchingRules[0].build(context);
  }

  return {
    issueType: "strong_match",
    severity: 50,
    focusSyllable: focusSyllable.syllable,
    whyCopy: "There is still room to improve, but the shape is already close to target.",
    graphCopy: "The graph is broadly close to native, so one precise adjustment is enough.",
    nextAction: "Repeat once more with the same rhythm and keep the current shape.",
    uiLabel: "Keep refining",
  };
}

export const coachingRuleSet = coachingRules;
