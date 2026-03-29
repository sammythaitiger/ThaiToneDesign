import { PracticeWord } from "../types/practice";

export const SAMPLE_WORDS: PracticeWord[] = [
  {
    id: "maa",
    thai: "มา",
    transcription: "maa",
    english: "to come",
    syllables: [
      {
        thai: "มา",
        transcription: "maa",
        tone: "mid",
      },
    ],
  },
  {
    id: "sawasdee",
    thai: "สวัสดี",
    transcription: "sa-wat-dii",
    english: "hello",
    syllables: [
      {
        thai: "ส",
        transcription: "sa",
        tone: "mid",
      },
      {
        thai: "วัส",
        transcription: "wat",
        tone: "low",
      },
      {
        thai: "ดี",
        transcription: "dii",
        tone: "mid",
      },
    ],
  },
  {
    id: "khob-khun",
    thai: "ขอบคุณ",
    transcription: "khop-khun",
    english: "thank you",
    syllables: [
      {
        thai: "ขอบ",
        transcription: "khop",
        tone: "low",
      },
      {
        thai: "คุณ",
        transcription: "khun",
        tone: "high",
      },
    ],
  },
];
