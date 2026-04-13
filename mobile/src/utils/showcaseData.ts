import { AnalyzeResponse, PracticeWord } from "../types/practice";

export type DemoScenarioId = "best" | "medium" | "weak";

export type DemoScenario = {
  id: DemoScenarioId;
  label: string;
  heroTitle: string;
  heroCopy: string;
  operatorNote: string;
  resultSummary: string;
  word: PracticeWord;
  analysis: AnalyzeResponse;
};

export const showcaseWord: PracticeWord = {
  id: "showcase-word-1",
  thai: "สวัสดี",
  transcription: "sa-wat-dee",
  english: "hello",
  syllables: [
    {
      thai: "สะ",
      transcription: "sa",
      tone: "low",
    },
    {
      thai: "หวัด",
      transcription: "wat",
      tone: "falling",
    },
    {
      thai: "ดี",
      transcription: "dee",
      tone: "mid",
    },
  ],
};

export const showcaseWords: PracticeWord[] = [
  showcaseWord,
  {
    id: "showcase-word-2",
    thai: "มา",
    transcription: "maa",
    english: "come",
    syllables: [
      {
        thai: "มา",
        transcription: "maa",
        tone: "mid",
      },
    ],
  },
  {
    id: "showcase-word-3",
    thai: "เข้าใจ",
    transcription: "kao-jai",
    english: "understand",
    syllables: [
      {
        thai: "เข้า",
        transcription: "kao",
        tone: "falling",
      },
      {
        thai: "ใจ",
        transcription: "jai",
        tone: "mid",
      },
    ],
  },
];

export const showcaseAnalysis: AnalyzeResponse = {
  word_id: showcaseWord.id,
  overall_accuracy: 78,
  timing_score: 84,
  next_step:
    "Repeat the middle syllable slowly and aim to keep the contour from dropping too early before the final release.",
  syllables: [
    {
      syllable: "สะ",
      expected_tone: "low",
      detected_tone: "low",
      accuracy: 88,
      feedback: "Good control. The low contour stays stable and easy to understand.",
    },
    {
      syllable: "หวัด",
      expected_tone: "falling",
      detected_tone: "high",
      accuracy: 61,
      feedback:
        "The peak starts too high and the drop comes too late. Let the contour fall earlier.",
    },
    {
      syllable: "ดี",
      expected_tone: "mid",
      detected_tone: "mid",
      accuracy: 82,
      feedback: "Solid finish. Keep the ending flatter and more relaxed.",
    },
  ],
};

export const demoScenarios: DemoScenario[] = [
  {
    id: "best",
    label: "Best outcome",
    heroTitle: "Confident learner path",
    heroCopy:
      "Shows the product at its strongest: clear control, fast comprehension, and positive coaching.",
    operatorNote:
      "Use this when you want to show the ideal product story in under 30 seconds.",
    resultSummary:
      "High-confidence result with one small refinement so the screen still feels instructional.",
    word: showcaseWords[1],
    analysis: {
      word_id: showcaseWords[1].id,
      overall_accuracy: 94,
      timing_score: 92,
      next_step:
        "Keep the vowel steady through the release so the final contour stays relaxed and precise.",
      syllables: [
        {
          syllable: "มา",
          expected_tone: "mid",
          detected_tone: "mid",
          accuracy: 94,
          feedback:
            "Excellent control. The contour stays level and easy to trust from start to finish.",
        },
      ],
    },
  },
  {
    id: "medium",
    label: "Medium outcome",
    heroTitle: "Balanced coaching path",
    heroCopy:
      "Shows a believable in-between result with clear teaching value and one obvious improvement target.",
    operatorNote:
      "Use this as the default investor flow because it demonstrates analysis, nuance, and coaching.",
    resultSummary:
      "Moderate score with one visible weak syllable and actionable next-step guidance.",
    word: showcaseWord,
    analysis: showcaseAnalysis,
  },
  {
    id: "weak",
    label: "Weak outcome",
    heroTitle: "Safe fallback path",
    heroCopy:
      "Keeps the demo presentation-safe even when the learner misses the contour and needs clear recovery guidance.",
    operatorNote:
      "Use this if you want to prove the app still looks intentional when the result is weak.",
    resultSummary:
      "Lower-confidence result that still gives structured feedback, a focus target, and a calm retry path.",
    word: showcaseWords[2],
    analysis: {
      word_id: showcaseWords[2].id,
      overall_accuracy: 58,
      timing_score: 68,
      next_step:
        "Slow the first syllable down, let the pitch fall earlier, and then keep the second syllable flatter.",
      syllables: [
        {
          syllable: "เข้า",
          expected_tone: "falling",
          detected_tone: "high",
          accuracy: 52,
          feedback:
            "The contour stays too high for too long. Start the drop earlier so the fall is easier to hear.",
        },
        {
          syllable: "ใจ",
          expected_tone: "mid",
          detected_tone: "rising",
          accuracy: 64,
          feedback:
            "The ending lifts too much. Relax the finish and aim for a flatter release.",
        },
      ],
    },
  },
];
