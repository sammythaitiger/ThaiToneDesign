import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Snackbar } from "react-native-paper";

import { usePracticeScreen } from "../hooks/usePracticeScreen";
import { appColors } from "../theme/colors";
import { ToneWordPracticeScreen } from "./ToneWordPracticeScreen";
import { ToneWordSelectionScreen } from "./ToneWordSelectionScreen";

export function TonePracticeScreen() {
  const {
    practiceWords,
    filteredWords,
    selectedWord,
    analysis,
    currentRoute,
    selectedTones,
    syllableFilter,
    searchQuery,
    isLoadingWords,
    isAnalyzing,
    errorMessage,
    initialize,
    openPractice,
    goToSelection,
    toggleToneFilter,
    clearToneFilters,
    setSyllableFilter,
    setSearchQuery,
    runAnalysis,
    resetPractice,
    clearError,
  } = usePracticeScreen();

  return (
    <SafeAreaView style={styles.safeArea}>
      {currentRoute === "selection" ? (
        <ToneWordSelectionScreen
          wordsCount={practiceWords.length}
          filteredWords={filteredWords}
          selectedTones={selectedTones}
          syllableFilter={syllableFilter}
          searchQuery={searchQuery}
          isLoading={isLoadingWords}
          errorMessage={errorMessage}
          onToggleTone={toggleToneFilter}
          onSetSyllableFilter={setSyllableFilter}
          onSearchChange={setSearchQuery}
          onOpenPractice={(wordId) => void openPractice(wordId)}
          onClearFilters={() => {
            clearToneFilters();
            setSyllableFilter(null);
            setSearchQuery("");
          }}
          onRetry={() => void initialize()}
        />
      ) : selectedWord ? (
        <ToneWordPracticeScreen
          word={selectedWord}
          analysis={analysis}
          isAnalyzing={isAnalyzing}
          errorMessage={errorMessage}
          onBack={goToSelection}
          onAnalyze={() => void runAnalysis()}
          onReset={resetPractice}
          onRetry={() => void runAnalysis()}
        />
      ) : null}

      <Snackbar
        visible={Boolean(errorMessage)}
        onDismiss={clearError}
        duration={4000}
      >
        {errorMessage}
      </Snackbar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: appColors.background,
  },
});
