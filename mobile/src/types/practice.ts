export type ThaiTone = "mid" | "low" | "falling" | "high" | "rising";

export interface PracticeSyllable {
  thai: string;
  transcription: string;
  tone: ThaiTone;
}

export interface PracticeWord {
  id: string;
  thai: string;
  transcription: string;
  english: string;
  syllables: PracticeSyllable[];
}

export interface PracticeWordSummary {
  id: string;
  thai: string;
  transcription: string;
  english: string;
  syllable_count: number;
}

export interface SyllableResult {
  syllable: string;
  expectedTone: ThaiTone;
  detectedTone: ThaiTone;
  accuracy: number;
  feedback: string;
}

export interface AnalyzeResponse {
  word_id: string;
  overall_accuracy: number;
  timing_score: number;
  next_step: string;
  syllables: Array<{
    syllable: string;
    expected_tone: ThaiTone;
    detected_tone: ThaiTone;
    accuracy: number;
    feedback: string;
  }>;
}
