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

type PracticeStore = {
  wordOptions: PracticeWordSummary[];
  practiceWords: PracticeWord[];
  selectedWordId: string;
  selectedWord: PracticeWord | null;
  analysis: AnalyzeResponse | null;
  currentRoute: PracticeRoute;
  selectedTones: ThaiTone[];
  syllableFilter: SyllableFilter;
  searchQuery: string;
  isLoadingWords: boolean;
  isLoadingWordDetail: boolean;
  isAnalyzing: boolean;
  errorMessage: string;
  initialize: () => Promise<void>;
  selectWord: (wordId: string) => Promise<void>;
  openPractice: (wordId: string) => Promise<void>;
  goToSelection: () => void;
  toggleToneFilter: (tone: ThaiTone) => void;
  clearToneFilters: () => void;
  setSyllableFilter: (filter: SyllableFilter) => void;
  setSearchQuery: (query: string) => void;
  runAnalysis: () => Promise<void>;
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

  selectWord: async (wordId: string) => {
    const cachedWord = get().practiceWords.find((word) => word.id === wordId);

    if (cachedWord) {
      set({
        selectedWordId: wordId,
        selectedWord: cachedWord,
        analysis: null,
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
    set({ currentRoute: "practice" });
  },

  goToSelection: () => {
    set({
      currentRoute: "selection",
      analysis: null,
      isAnalyzing: false,
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
        errorMessage: "",
      });

      const response = await analyzeWord(
        selectedWord.id,
        selectedWord.syllables.length * 700
      );

      set({ analysis: response });
    } catch (error) {
      set({
        errorMessage:
          error instanceof Error
            ? error.message
            : "Failed to analyze recording.",
      });
    } finally {
      set({ isAnalyzing: false });
    }
  },

  resetPractice: () => {
    set({
      analysis: null,
      isAnalyzing: false,
      errorMessage: "",
    });
  },

  clearError: () => {
    set({ errorMessage: "" });
  },
}));
