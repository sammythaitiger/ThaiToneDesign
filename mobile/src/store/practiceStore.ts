import { create } from "zustand";

import {
  AnalyzeResponse,
  PracticeWord,
  PracticeWordSummary,
  ThaiTone,
} from "../types/practice";
import {
  analyzeWord,
  fetchPracticeWord,
  fetchPracticeWords,
} from "../utils/api";

export type PracticeRoute = "selection" | "practice";
export type SyllableFilter = "1" | "2" | "3" | "4+" | null;
export type PracticeStage = "before_recording" | "recording" | "analyzing" | "results";
export type MicrophonePermissionState = "required" | "granted";

type PracticeStore = {
  wordOptions: PracticeWordSummary[];
  practiceWords: PracticeWord[];
  selectedWordId: string;
  selectedWord: PracticeWord | null;
  analysis: AnalyzeResponse | null;
  currentRoute: PracticeRoute;
  practiceStage: PracticeStage;
  microphonePermission: MicrophonePermissionState;
  recordingSeconds: number;
  lastRecordingDurationMs: number;
  selectedTones: ThaiTone[];
  syllableFilter: SyllableFilter;
  searchQuery: string;
  isLoadingWords: boolean;
  isLoadingWordDetail: boolean;
  isAnalyzing: boolean;
  errorMessage: string;
  initialize: () => Promise<void>;
  setMicrophonePermission: (permission: MicrophonePermissionState) => void;
  setErrorMessage: (message: string) => void;
  selectWord: (wordId: string) => Promise<void>;
  openPractice: (wordId: string) => Promise<void>;
  goToSelection: () => void;
  toggleToneFilter: (tone: ThaiTone) => void;
  clearToneFilters: () => void;
  setSyllableFilter: (filter: SyllableFilter) => void;
  setSearchQuery: (query: string) => void;
  runAnalysis: () => Promise<void>;
  startRecording: () => void;
  tickRecording: () => void;
  stopRecording: (recordingDurationMs?: number) => Promise<void>;
  cancelRecording: () => void;
  resetPractice: () => void;
  clearError: () => void;
};

export const usePracticeStore = create<PracticeStore>((set, get) => ({
  wordOptions: [],
  practiceWords: [],
  selectedWordId: "",
  selectedWord: null,
  analysis: null,
  currentRoute: "selection",
  practiceStage: "before_recording",
  microphonePermission: "required",
  recordingSeconds: 0,
  lastRecordingDurationMs: 0,
  selectedTones: [],
  syllableFilter: null,
  searchQuery: "",
  isLoadingWords: false,
  isLoadingWordDetail: false,
  isAnalyzing: false,
  errorMessage: "",

  initialize: async () => {
    try {
      set({ isLoadingWords: true, errorMessage: "" });

      const response = await fetchPracticeWords();
      const practiceWords = await Promise.all(
        response.items.map((item) => fetchPracticeWord(item.id))
      );
      const firstWordId = response.items[0]?.id ?? "";
      const firstWord =
        practiceWords.find((word) => word.id === firstWordId) ?? null;

      set({
        wordOptions: response.items,
        practiceWords,
        selectedWordId: firstWordId,
        selectedWord: firstWord,
        analysis: null,
        practiceStage: "before_recording",
        recordingSeconds: 0,
      });
    } catch (error) {
      set({
        errorMessage:
          error instanceof Error
            ? error.message
            : "Failed to load practice words.",
      });
    } finally {
      set({ isLoadingWords: false });
    }
  },

  setMicrophonePermission: (permission) => {
    set({ microphonePermission: permission });
  },

  setErrorMessage: (message) => {
    set({ errorMessage: message });
  },

  selectWord: async (wordId: string) => {
    const cachedWord = get().practiceWords.find((word) => word.id === wordId);

    if (cachedWord) {
      set({
        selectedWordId: wordId,
        selectedWord: cachedWord,
        analysis: null,
        practiceStage: "before_recording",
        recordingSeconds: 0,
        lastRecordingDurationMs: 0,
        errorMessage: "",
      });
      return;
    }

    try {
      set({
        selectedWordId: wordId,
        isLoadingWordDetail: true,
        errorMessage: "",
      });

      const response = await fetchPracticeWord(wordId);

      set({
        practiceWords: [...get().practiceWords, response],
        selectedWord: response,
        analysis: null,
        practiceStage: "before_recording",
        recordingSeconds: 0,
        lastRecordingDurationMs: 0,
      });
    } catch (error) {
      set({
        errorMessage:
          error instanceof Error
            ? error.message
            : "Failed to load word details.",
      });
    } finally {
      set({ isLoadingWordDetail: false });
    }
  },

  openPractice: async (wordId: string) => {
    await get().selectWord(wordId);
    set({
      currentRoute: "practice",
      practiceStage: "before_recording",
      recordingSeconds: 0,
      lastRecordingDurationMs: 0,
    });
  },

  goToSelection: () => {
    set({
      currentRoute: "selection",
      analysis: null,
      isAnalyzing: false,
      practiceStage: "before_recording",
      recordingSeconds: 0,
      lastRecordingDurationMs: 0,
    });
  },

  toggleToneFilter: (tone) => {
    set((state) => ({
      selectedTones: state.selectedTones.includes(tone)
        ? state.selectedTones.filter((item) => item !== tone)
        : [...state.selectedTones, tone],
    }));
  },

  clearToneFilters: () => {
    set({ selectedTones: [] });
  },

  setSyllableFilter: (filter) => {
    set({ syllableFilter: filter });
  },

  setSearchQuery: (query) => {
    set({ searchQuery: query });
  },

  runAnalysis: async () => {
    const { selectedWord } = get();

    if (!selectedWord) {
      return;
    }

    try {
      set({
        isAnalyzing: true,
        practiceStage: "analyzing",
        errorMessage: "",
      });

      const response = await analyzeWord(
        selectedWord.id,
        get().lastRecordingDurationMs || selectedWord.syllables.length * 700
      );

      set({ analysis: response, practiceStage: "results" });
    } catch (error) {
      set({
        practiceStage: "before_recording",
        errorMessage:
          error instanceof Error
            ? error.message
            : "Failed to analyze recording.",
      });
    } finally {
      set({ isAnalyzing: false });
    }
  },

  grantMicrophonePermission: () => {
    set({ microphonePermission: "granted", errorMessage: "" });
  },

  startRecording: () => {
    if (get().microphonePermission !== "granted") {
      set({
        errorMessage: "Microphone permission is required before recording.",
      });
      return;
    }

    set({
      practiceStage: "recording",
      recordingSeconds: 0,
      lastRecordingDurationMs: 0,
      analysis: null,
      errorMessage: "",
    });
  },

  tickRecording: () => {
    set((state) => ({
      recordingSeconds: state.recordingSeconds + 1,
    }));
  },

  stopRecording: async (recordingDurationMs?: number) => {
    if (recordingDurationMs) {
      set({ lastRecordingDurationMs: recordingDurationMs });
    }
    await get().runAnalysis();
  },

  cancelRecording: () => {
    set({
      practiceStage: "before_recording",
      recordingSeconds: 0,
      lastRecordingDurationMs: 0,
      errorMessage: "",
    });
  },

  resetPractice: () => {
    set({
      analysis: null,
      isAnalyzing: false,
      practiceStage: "before_recording",
      recordingSeconds: 0,
      lastRecordingDurationMs: 0,
      errorMessage: "",
    });
  },

  clearError: () => {
    set({ errorMessage: "" });
  },
}));
