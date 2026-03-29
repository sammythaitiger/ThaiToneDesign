import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  ActivityIndicator,
  Appbar,
  Button,
  Chip,
  Searchbar,
  Text,
} from "react-native-paper";

import { BottomTabBar } from "../components/practice/BottomTabBar";
import { WordSelectionCard } from "../components/practice/WordSelectionCard";
import { SyllableFilter } from "../store/practiceStore";
import { appColors, toneColors } from "../theme/colors";
import { PracticeWord, ThaiTone } from "../types/practice";

type ToneWordSelectionScreenProps = {
  wordsCount: number;
  filteredWords: PracticeWord[];
  selectedTones: ThaiTone[];
  syllableFilter: SyllableFilter;
  searchQuery: string;
  isLoading: boolean;
  errorMessage: string;
  onToggleTone: (tone: ThaiTone) => void;
  onSetSyllableFilter: (filter: SyllableFilter) => void;
  onSearchChange: (value: string) => void;
  onOpenPractice: (wordId: string) => void;
  onClearFilters: () => void;
  onRetry: () => void;
};

const TONE_FILTERS: Array<{ key: ThaiTone; label: string }> = [
  { key: "mid", label: "M" },
  { key: "low", label: "L" },
  { key: "falling", label: "F" },
  { key: "high", label: "H" },
  { key: "rising", label: "R" },
];

const SYLLABLE_FILTERS: SyllableFilter[] = ["1", "2", "3", "4+"];

export function ToneWordSelectionScreen({
  wordsCount,
  filteredWords,
  selectedTones,
  syllableFilter,
  searchQuery,
  isLoading,
  errorMessage,
  onToggleTone,
  onSetSyllableFilter,
  onSearchChange,
  onOpenPractice,
  onClearFilters,
  onRetry,
}: ToneWordSelectionScreenProps) {
  const hasFilters = selectedTones.length > 0 || Boolean(syllableFilter) || Boolean(searchQuery);
  const hasBlockingError = Boolean(errorMessage) && wordsCount === 0;

  return (
    <View style={styles.screen}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.Content title="Practice Thai Tones" />
        <Appbar.Action
          icon="cog-outline"
          onPress={() => undefined}
          containerColor={appColors.surfaceVariant}
        />
        <Appbar.Action
          icon="trophy-outline"
          onPress={() => undefined}
          containerColor={appColors.surfaceVariant}
        />
        <Appbar.Action
          icon="account-outline"
          onPress={() => undefined}
          containerColor={appColors.surfaceVariant}
        />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.heroCard}>
          <View style={styles.heroTopRow}>
            <View style={styles.heroBadge}>
              <Text variant="labelMedium" style={styles.heroBadgeText}>
                Tone Lab
              </Text>
            </View>
            <Text variant="labelMedium" style={styles.heroMeta}>
              {wordsCount} total words
            </Text>
          </View>

          <Text variant="headlineMedium" style={styles.heroTitle}>
            Choose a word that matches the tone pattern you want to train.
          </Text>
          <Text variant="bodyLarge" style={styles.heroCopy}>
            Filter by tone, syllable count, or search directly in Thai,
            transliteration, or English.
          </Text>

          <View style={styles.heroStatsRow}>
            <View style={styles.heroStatCard}>
              <Text variant="labelSmall" style={styles.heroStatLabel}>
                Visible
              </Text>
              <Text variant="headlineSmall" style={styles.heroStatValue}>
                {filteredWords.length}
              </Text>
            </View>
            <View style={styles.heroStatCard}>
              <Text variant="labelSmall" style={styles.heroStatLabel}>
                Filters
              </Text>
              <Text variant="headlineSmall" style={styles.heroStatValue}>
                {selectedTones.length + (syllableFilter ? 1 : 0) + (searchQuery ? 1 : 0)}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.filtersCard}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Tone filters
          </Text>

          <View style={styles.filterRow}>
            {TONE_FILTERS.map((tone) => (
              <Chip
                key={tone.key}
                selected={selectedTones.includes(tone.key)}
                showSelectedOverlay={false}
                onPress={() => onToggleTone(tone.key)}
                style={[
                  styles.toneFilterChip,
                  { backgroundColor: toneColors[tone.key] },
                ]}
                textStyle={styles.toneFilterText}
              >
                {tone.label}
              </Chip>
            ))}
          </View>

          <Text variant="titleMedium" style={styles.sectionTitle}>
            Syllable count
          </Text>
          <View style={styles.filterRow}>
            {SYLLABLE_FILTERS.map((filter) => (
              <Chip
                key={filter}
                selected={syllableFilter === filter}
                showSelectedOverlay={false}
                onPress={() =>
                  onSetSyllableFilter(syllableFilter === filter ? null : filter)
                }
                style={[
                  styles.countChip,
                  syllableFilter === filter ? styles.countChipSelected : null,
                ]}
                textStyle={[
                  styles.countChipText,
                  syllableFilter === filter ? styles.countChipTextSelected : null,
                ]}
              >
                {filter}
              </Chip>
            ))}
          </View>

          <Text variant="titleMedium" style={styles.sectionTitle}>
            Search
          </Text>
          <Searchbar
            placeholder="Search words..."
            value={searchQuery}
            onChangeText={onSearchChange}
            style={styles.searchbar}
            inputStyle={styles.searchInput}
          />
        </View>

        {isLoading ? (
          <View style={styles.loadingState}>
            <ActivityIndicator />
            <Text variant="bodyMedium" style={styles.loadingText}>
              Loading words...
            </Text>
            <View style={styles.skeletonList}>
              {[0, 1, 2].map((item) => (
                <View key={item} style={styles.skeletonCard} />
              ))}
            </View>
          </View>
        ) : null}

        {!isLoading && hasBlockingError ? (
          <View style={styles.errorState}>
            <Text variant="headlineSmall" style={styles.emptyTitle}>
              Error loading words
            </Text>
            <Text variant="bodyMedium" style={styles.emptyCopy}>
              {errorMessage}
            </Text>
            <Button mode="contained" onPress={onRetry} contentStyle={styles.primaryButton}>
              Retry
            </Button>
          </View>
        ) : null}

        {!isLoading && !hasBlockingError && filteredWords.length === 0 ? (
          <View style={styles.emptyState}>
            <Text variant="headlineSmall" style={styles.emptyTitle}>
              No words match your criteria
            </Text>
            <Text variant="bodyMedium" style={styles.emptyCopy}>
              Try removing some filters, clearing search, or broadening the tone selection.
            </Text>
            {hasFilters ? (
              <Button mode="contained" onPress={onClearFilters} contentStyle={styles.primaryButton}>
                Clear all filters
              </Button>
            ) : null}
          </View>
        ) : null}

        {!isLoading ? (
          <View style={styles.listSection}>
            {filteredWords.map((word) => (
              <WordSelectionCard
                key={word.id}
                word={word}
                onPractice={() => void onOpenPractice(word.id)}
              />
            ))}
          </View>
        ) : null}

        <Text variant="bodySmall" style={styles.footerText}>
          Showing {filteredWords.length} of {wordsCount} words
        </Text>
      </ScrollView>

      <BottomTabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: appColors.background,
  },
  appbar: {
    backgroundColor: appColors.surface,
    borderBottomWidth: 1,
    borderBottomColor: appColors.outlineVariant,
  },
  content: {
    padding: 16,
    gap: 20,
    paddingBottom: 32,
  },
  heroCard: {
    borderRadius: 30,
    backgroundColor: appColors.heroPrimary,
    padding: 22,
    gap: 16,
  },
  heroTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  heroBadge: {
    borderRadius: 999,
    backgroundColor: appColors.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  heroBadgeText: {
    color: appColors.onPrimary,
    fontWeight: "700",
    letterSpacing: 0.7,
    textTransform: "uppercase",
  },
  heroMeta: {
    color: appColors.heroAccent,
  },
  heroTitle: {
    color: appColors.heroText,
    lineHeight: 36,
  },
  heroCopy: {
    color: appColors.heroTextSoft,
    lineHeight: 23,
  },
  heroStatsRow: {
    flexDirection: "row",
    gap: 12,
  },
  heroStatCard: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: appColors.heroSecondary,
    padding: 16,
  },
  heroStatLabel: {
    color: appColors.heroAccentSoft,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  heroStatValue: {
    color: appColors.heroText,
    marginTop: 6,
  },
  filtersCard: {
    borderRadius: 26,
    backgroundColor: appColors.surface,
    padding: 18,
    gap: 12,
  },
  sectionTitle: {
    color: appColors.textPrimary,
    marginTop: 2,
  },
  filterRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  toneFilterChip: {
    borderRadius: 16,
    minWidth: 52,
    justifyContent: "center",
  },
  toneFilterText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  countChip: {
    backgroundColor: appColors.surface,
    borderRadius: 16,
  },
  countChipSelected: {
    backgroundColor: appColors.primary,
  },
  countChipText: {
    color: appColors.textPrimary,
    fontWeight: "600",
  },
  countChipTextSelected: {
    color: appColors.onPrimary,
  },
  searchbar: {
    backgroundColor: appColors.surface,
    borderWidth: 1,
    borderColor: appColors.outlineVariant,
  },
  searchInput: {
    color: appColors.textPrimary,
  },
  loadingState: {
    alignItems: "stretch",
    gap: 10,
    paddingVertical: 12,
  },
  loadingText: {
    color: appColors.textSecondary,
    textAlign: "center",
  },
  skeletonList: {
    width: "100%",
    gap: 12,
    marginTop: 8,
  },
  skeletonCard: {
    height: 142,
    borderRadius: 24,
    backgroundColor: appColors.surface,
    borderWidth: 1,
    borderColor: appColors.outlineVariant,
  },
  emptyState: {
    borderRadius: 24,
    backgroundColor: appColors.surface,
    padding: 20,
    gap: 12,
    borderWidth: 1,
    borderColor: appColors.outlineVariant,
  },
  errorState: {
    borderRadius: 24,
    backgroundColor: appColors.dangerSurface,
    padding: 20,
    gap: 12,
    borderWidth: 1,
    borderColor: appColors.outlineVariant,
  },
  emptyTitle: {
    color: appColors.textPrimary,
  },
  emptyCopy: {
    color: appColors.textSecondary,
  },
  primaryButton: {
    minHeight: 48,
  },
  listSection: {
    gap: 14,
  },
  footerText: {
    color: appColors.textMuted,
    textAlign: "center",
    marginTop: 2,
  },
});
