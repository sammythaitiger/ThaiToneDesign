import { ThaiTone } from "../types/practice";

const BASE_CONTOURS: Record<ThaiTone, number[]> = {
  mid: [0.51, 0.515, 0.525, 0.53, 0.528, 0.52, 0.515],
  low: [0.67, 0.62, 0.55, 0.47, 0.4, 0.34, 0.3],
  falling: [0.81, 0.77, 0.69, 0.55, 0.41, 0.28, 0.2],
  high: [0.39, 0.45, 0.53, 0.62, 0.71, 0.79, 0.85],
  rising: [0.31, 0.26, 0.24, 0.3, 0.42, 0.61, 0.82],
};

const HUMANIZATION_PROFILE = [0.022, -0.012, 0.018, -0.028, 0.014, -0.01, 0.02];

function clamp(value: number, min = 0.12, max = 0.88) {
  return Math.min(max, Math.max(min, value));
}

export function getNativeContourPoints(tone: ThaiTone) {
  return BASE_CONTOURS[tone];
}

export function getUserContourPoints(
  expectedTone: ThaiTone,
  detectedTone: ThaiTone,
  accuracy: number
) {
  const expected = BASE_CONTOURS[expectedTone];
  const detected = BASE_CONTOURS[detectedTone];
  const accuracyWeight = accuracy / 100;
  const deviationScale = (100 - accuracy) / 100;
  const registerShift =
    expectedTone === "high" || expectedTone === "rising" ? -0.016 : 0.014;

  return expected.map((expectedPoint, index) => {
    const detectedPoint = detected[index] ?? expectedPoint;
    const blendedPoint =
      expectedPoint * accuracyWeight + detectedPoint * (1 - accuracyWeight);

    const accentShift =
      Math.sin(index * 1.15 + deviationScale * 3.1) *
      (0.018 + deviationScale * 0.05);
    const humanizedShift =
      HUMANIZATION_PROFILE[index] * (0.35 + deviationScale * 0.9);
    const mismatchLift =
      (detectedPoint - expectedPoint) * (0.16 + deviationScale * 0.42);

    return clamp(
      blendedPoint +
        accentShift +
        humanizedShift +
        mismatchLift +
        registerShift * (0.5 + deviationScale * 0.4)
    );
  });
}
