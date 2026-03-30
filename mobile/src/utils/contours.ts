import { ThaiTone } from "../types/practice";

const BASE_CONTOURS: Record<ThaiTone, number[]> = {
  mid: [0.52, 0.52, 0.53, 0.53, 0.52, 0.52],
  low: [0.62, 0.56, 0.48, 0.41, 0.36, 0.31],
  falling: [0.78, 0.73, 0.6, 0.45, 0.31, 0.2],
  high: [0.42, 0.48, 0.56, 0.63, 0.71, 0.8],
  rising: [0.28, 0.24, 0.26, 0.36, 0.56, 0.78],
};

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

  return expected.map((expectedPoint, index) => {
    const detectedPoint = detected[index] ?? expectedPoint;
    const blendedPoint =
      expectedPoint * accuracyWeight + detectedPoint * (1 - accuracyWeight);

    const accentShift =
      Math.sin(index * 1.35 + deviationScale * 2.4) * 0.035 * deviationScale;

    return clamp(blendedPoint + accentShift);
  });
}
