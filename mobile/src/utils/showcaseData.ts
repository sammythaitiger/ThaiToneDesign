import { AnalyzeResponse, PracticeWord } from "../types/practice";

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
