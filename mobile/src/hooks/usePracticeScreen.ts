import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

import { SyllableFilter, usePracticeStore } from "../store/practiceStore";
import { PracticeWord, ThaiTone } from "../types/practice";

function filterPracticeWords(
  practiceWords: PracticeWord[],
  selectedTones: ThaiTone[],
  syllableFilter: SyllableFilter,
  searchQuery: string
) {
  return practiceWords.filter((word) => {
    if (selectedTones.length > 0) {
      const hasSelectedTone = word.syllables.some((syllable) =>
        selectedTones.includes(syllable.tone)
      );

      if (!hasSelectedTone) {
        return false;
      }
    }

    if (syllableFilter) {
      if (syllableFilter === "4+") {
        if (word.syllables.length < 4) {
          return false;
        }
      } else if (word.syllables.length !== Number(syllableFilter)) {
        return false;
      }
    }

    if (!searchQuery.trim()) {
      return true;
    }

    const query = searchQuery.trim().toLowerCase();

    return (
      word.thai.toLowerCase().includes(query) ||
      word.transcription.toLowerCase().includes(query) ||
      word.english.toLowerCase().includes(query)
    );
  });
}

export function usePracticeScreen() {
  const state = usePracticeStore(
    useShallow((store) => ({
      wordOptions: store.wordOptions,
      practiceWords: store.practiceWords,
      selectedWordId: store.selectedWordId,
      selectedWord: store.selectedWord,
      analysis: store.analysis,
      currentRoute: store.currentRoute,
      selectedTones: store.selectedTones,
      syllableFilter: store.syllableFilter,
      searchQuery: store.searchQuery,
      isLoadingWords: store.isLoadingWords,
      isLoadingWordDetail: store.isLoadingWordDetail,
      isAnalyzing: store.isAnalyzing,
      errorMessage: store.errorMessage,
      initialize: store.initialize,
      selectWord: store.selectWord,
      openPractice: store.openPractice,
      goToSelection: store.goToSelection,
      toggleToneFilter: store.toggleToneFilter,
      clearToneFilters: store.clearToneFilters,
      setSyllableFilter: store.setSyllableFilter,
      setSearchQuery: store.setSearchQuery,
      runAnalysis: store.runAnalysis,
      resetPractice: store.resetPractice,
      clearError: store.clearError,
    }))
  );

  useEffect(() => {
    void state.initialize();
  }, [state.initialize]);

  const filteredWords = filterPracticeWords(
    state.practiceWords,
    state.selectedTones,
    state.syllableFilter,
    state.searchQuery
  );

  return {
    ...state,
    filteredWords,
  };
}
