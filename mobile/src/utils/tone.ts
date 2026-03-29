import { ThaiTone } from "../types/practice";
import { toneColors } from "../theme/colors";

type ToneMeta = {
  label: string;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
};

const TONE_META: Record<ThaiTone, ToneMeta> = {
  mid: {
    label: "Mid tone",
    backgroundColor: toneColors.mid,
    textColor: "#FFFFFF",
    borderColor: toneColors.mid,
  },
  low: {
    label: "Low tone",
    backgroundColor: toneColors.low,
    textColor: "#FFFFFF",
    borderColor: toneColors.low,
  },
  falling: {
    label: "Falling tone",
    backgroundColor: toneColors.falling,
    textColor: "#FFFFFF",
    borderColor: toneColors.falling,
  },
  high: {
    label: "High tone",
    backgroundColor: toneColors.high,
    textColor: "#FFFFFF",
    borderColor: toneColors.high,
  },
  rising: {
    label: "Rising tone",
    backgroundColor: toneColors.rising,
    textColor: "#FFFFFF",
    borderColor: toneColors.rising,
  },
};

export function getToneMeta(tone: ThaiTone) {
  return TONE_META[tone];
}
