# Dictionary Screen
*Search and browse Thai words with tone information*

## Overall screen structure

### State 1: SEARCH
```
┌─────────────────────────────────────────────────────┐
│  Dictionary                    ⚙️ 📚 👤              │ ← AppBar
├─────────────────────────────────────────────────────┤
│  Search Thai or English:                            │
│  ┌─────────────────────────────────────────────┐  │
│  │  🔍 สวัสดี                                 │  │ ← Search Input
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Recent Searches:                                 │
│  • สวัสดี (hello)                                 │
│  • อาหาร (food)                                   │
│  • ขอบคุณ (thank you)                             │
│                                                    │
│  Quick Actions:                                   │
│  ┌─────────────────────────────────────────────┐  │
│  │  [ My Saved Words ]                         │  │ ← Button 1
│  └─────────────────────────────────────────────┘  │
│  ┌─────────────────────────────────────────────┐  │
│  │  [ Browse Common Words ]                    │  │ ← Button 2
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Popular Categories:                              │
│  ┌─────┬─────┬─────┬─────┬─────┐                 │
│  │ Greet│ Food │ Verbs│ Adj │ Time│               │ ← Chips
│  └─────┴─────┴─────┴─────┴─────┘                 │
│                                                    │
│  Tip: Type Thai script, English, or transcription │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │ ← Bottom Navigation
└─────────────────────────────────────────────────────┘
```

### State 2: SEARCH RESULTS
```
┌─────────────────────────────────────────────────────┐
│  Dictionary                    ⚙️ 📚 👤              │
├─────────────────────────────────────────────────────┤
│  Results for "สวัสดี" (3 found)                    │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │  สวัสดี (sà-wàt-dii)                        │  │ ← Result 1
│  │  Meaning: hello, goodbye                    │  │
│  │  Tones: [Mid][Low][Mid]                     │  │
│  │  Syllables: 3                               │  │
│  │  [ View Details ]                           │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │  สวัสดีครับ (sà-wàt-dii khráp)              │  │ ← Result 2
│  │  Meaning: hello (polite male)               │  │
│  │  Tones: [Mid][Low][Mid][High]               │  │
│  │  Syllables: 4                               │  │
│  │  [ View Details ]                           │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │  สวัสดีค่ะ (sà-wàt-dii khâ)                 │  │ ← Result 3
│  │  Meaning: hello (polite female)             │  │
│  │  Tones: [Mid][Low][Mid][Falling]            │  │
│  │  Syllables: 4                               │  │
│  │  [ View Details ]                           │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  [ Clear Search ] [ Search Again ]                │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

### State 3: WORD DETAILS
```
┌─────────────────────────────────────────────────────┐
│  ← Dictionary        สวัสดี          ⏹️ 🔊          │ ← AppBar with actions
├─────────────────────────────────────────────────────┤
│  Word: สวัสดี (sà-wàt-dii)                         │
│  Meaning: hello, goodbye                           │
│                                                    │
│  Pronunciation:                                    │
│  [▶ Play Audio] [⏸ Pause] [🐌 Slow: 0.75x]        │ ← Audio Controls
│                                                    │
│  Syllable Breakdown:                               │
│  ┌─────────────┬─────────────┬─────────────┐      │
│  │    ส        │    วัส      │    ดี       │      │ ← Syllable Cards
│  │   (sà)      │   (wàt)     │   (dii)     │      │
│  │  Tone: Mid  │  Tone: Low  │  Tone: Mid  │      │
│  │   0.2s      │    0.3s     │    0.25s    │      │
│  └─────────────┴─────────────┴─────────────┘      │
│                                                    │
│  Example Sentence:                                │
│  สวัสดีครับ ยินดีที่ได้รู้จัก                      │
│  (sà-wàt-dii khráp, yin-dii thîi dâi rúu-jàk)     │
│  Hello, nice to meet you.                         │
│                                                    │
│  Word Information:                                │
│  • Part of Speech: Interjection                   │
│  • Formality: Neutral                             │
│  • Frequency: Very Common                         │
│                                                    │
│  Actions:                                         │
│  ┌─────────────────────────────────────────────┐  │
│  │  [★ Add to My Words] [🎤 Practice] [🎴 Card]│  │ ← Action Buttons
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Related Words:                                   │
│  • สวัสดีครับ (polite male)                       │
│  • สวัสดีค่ะ (polite female)                      │
│  • หวัดดี (informal)                              │
│                                                    │
│  [ Previous Word ] [ Next Word ]                  │ ← Navigation
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

### State 4: MY SAVED WORDS
```
┌─────────────────────────────────────────────────────┐
│  My Saved Words              ⚙️ 📚 👤              │
├─────────────────────────────────────────────────────┤
│  Saved Words (42)                                   │
│                                                    │
│  Search in saved words:                            │
│  ┌─────────────────────────────────────────────┐  │
│  │  🔍 Filter...                              │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Filter by:                                       │
│  ┌───┬───┬───┬───┬───┐                            │
│  │ M │ L │ F │ H │ R │    ← Tone Filter           │
│  └───┴───┴───┴───┴───┘                            │
│                                                    │
│  Word List:                                       │
│  ┌─────────────────────────────────────────────┐  │
│  │  สวัสดี (hello)                             │  │
│  │  Saved: 3 days ago                          │  │
│  │  Last Practiced: Yesterday                  │  │
│  │  [ View ] [ Practice ] [ Remove ]           │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │  อาหาร (food)                               │  │
│  │  Saved: 1 week ago                          │  │
│  │  Last Practiced: 2 days ago                 │  │
│  │  [ View ] [ Practice ] [ Remove ]           │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  [ Export List ] [ Practice All ]                 │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

### State 5: LOADING
```
┌─────────────────────────────────────────────────────┐
│  Dictionary                    ⚙️ 📚 👤              │
├─────────────────────────────────────────────────────┤
│  Loading dictionary...                             │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │  [Skeleton: Search Bar]                     │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │  [Skeleton: Recent Searches]                │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │  [Skeleton: Quick Actions]                  │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Initializing word database...                    │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

### State 6: EMPTY SEARCH
```
┌─────────────────────────────────────────────────────┐
│  Dictionary                    ⚙️ 📚 👤              │
├─────────────────────────────────────────────────────┤
│  No results for "xyz123"                           │
│                                                    │
│  We couldn't find any words matching               │
│  your search. Try:                                 │
│                                                    │
│  • Searching in Thai script: สวัสดี                │
│  • Searching in English: hello                     │
│  • Searching in transcription: sà-wàt-dii          │
│  • Checking your spelling                          │
│                                                    │
│  Popular words to try:                             │
│  • สวัสดี (hello)                                  │
│  • อาหาร (food)                                    │
│  • ขอบคุณ (thank you)                             │
│                                                    │
│  [ Clear Search ] [ Browse All ]                   │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

### State 7: ERROR
```
┌─────────────────────────────────────────────────────┐
│  Dictionary                    ⚙️ 📚 👤              │
├─────────────────────────────────────────────────────┤
│  ⚠️ Dictionary Error                              │
│                                                    │
│  Could not load dictionary data.                   │
│  Possible reasons:                                 │
│  • No internet connection                          │
│  • Server is temporarily unavailable               │
│  • App needs update                               │
│                                                    │
│  You can:                                         │
│                                                    │
│  [ Retry Connection ]                             │
│  [ Use Offline Dictionary ]                       │
│  [ Clear Cache and Retry ]                        │
│                                                    │
│  Working offline?                                 │
│  You can still access cached words.               │
│  [ View Cached Words ]                            │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

### State 8: OFFLINE MODE
```
┌─────────────────────────────────────────────────────┐
│  Dictionary (Offline)        ⚙️ 📚 👤              │
├─────────────────────────────────────────────────────┤
│  🌐 Offline Mode                                   │
│                                                    │
│  You're currently offline.                         │
│  Only cached words are available.                  │
│                                                    │
│  Cached Words (127 available)                     │
│                                                    │
│  Search cached words:                             │
│  ┌─────────────────────────────────────────────┐  │
│  │  🔍 Search...                              │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Note:                                            │
│  • Audio may not be available offline             │
│  • Some features require internet                 │
│  • New words can't be downloaded                  │
│                                                    │
│  [ View All Cached Words ]                        │
│  [ Download More Words for Offline ]              │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

## React Native Paper components

### 1. AppBar by state
```javascript
// State: Search
<Appbar.Header>
  <Appbar.BackAction onPress={() => navigation.goBack()} />
  <Appbar.Content title="Dictionary" />
  <Appbar.Action icon="cog" onPress={() => navigation.navigate('Settings')} />
  <Appbar.Action icon="bookmark" onPress={() => navigation.navigate('SavedWords')} />
  <Appbar.Action icon="account" onPress={() => navigation.navigate('Profile')} />
</Appbar.Header>

// State: Word Details
<Appbar.Header>
  <Appbar.BackAction onPress={() => navigation.goBack()} />
  <Appbar.Content title={currentWord.thai} />
  <Appbar.Action icon="stop-circle" disabled />
  <Appbar.Action icon="volume-high" onPress={playWordAudio} />
</Appbar.Header>
```

### 2. Search input with autocomplete
```javascript
<TextInput
  label="Search Thai or English"
  value={searchQuery}
  onChangeText={handleSearch}
  left={<TextInput.Icon icon="magnify" />}
  right={
    searchQuery ? (
      <TextInput.Icon icon="close" onPress={() => setSearchQuery('')} />
    ) : null
  }
  mode="outlined"
  style={{ margin: 16 }}
/>

// Autocomplete suggestions
{showSuggestions && suggestions.length > 0 && (
  <Card style={{ marginHorizontal: 16, marginTop: -8 }}>
    <Card.Content>
      {suggestions.map((suggestion, index) => (
        <TouchableRipple
          key={index}
          onPress={() => selectSuggestion(suggestion)}
        >
          <View style={{ paddingVertical: 8 }}>
            <Text>{suggestion.thai} ({suggestion.transcription})</Text>
            <Text style={{ color: '#666', fontSize: 12 }}>
              {suggestion.english}
            </Text>
          </View>
        </TouchableRipple>
      ))}
    </Card.Content>
  </Card>
)}
```

### 3. Word result cards
```javascript
<Card style={{ margin: 16 }}>
  <Card.Content>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flex: 1 }}>
        <Title style={{ fontSize: 20 }}>{word.thai}</Title>
        <Paragraph>{word.transcription}</Paragraph>
        <Paragraph style={{ color: '#666' }}>{word.english}</Paragraph>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <Chip icon="music-note">{word.syllables.length} syllables</Chip>
      </View>
    </View>
    
    <View style={{ flexDirection: 'row', marginTop: 8, flexWrap: 'wrap' }}>
      {word.syllables.map((syllable, index) => (
        <Chip
          key={index}
          style={{ 
            backgroundColor: getToneColor(syllable.tone),
            marginRight: 4,
            marginBottom: 4
          }}
          textStyle={{ color: 'white' }}
        >
          {syllable.tone.charAt(0).toUpperCase()}
        </Chip>
      ))}
    </View>
  </Card.Content>
  <Card.Actions>
    <Button 
      mode="outlined" 
      onPress={() => viewWordDetails(word)}
      icon="eye"
    >
      View Details
    </Button>
    <Button 
      mode="contained" 
      onPress={() => practiceWord(word)}
      icon="microphone"
    >
      Practice
    </Button>
  </Card.Actions>
</Card>
```

### 4. Syllable breakdown cards
```javascript
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
  {word.syllables.map((syllable, index) => (
    <Card key={index} style={{ width: 100, margin: 8 }}>
      <Card.Content style={{ alignItems: 'center' }}>
        <Title style={{ fontSize: 24 }}>{syllable.thai}</Title>
        <Paragraph>({syllable.transcription})</Paragraph>
        <Chip
          style={{
            backgroundColor: getToneColor(syllable.tone),
            marginVertical: 4,
          }}
          textStyle={{ color: 'white' }}
        >
          {syllable.tone}
        </Chip>
        <Caption>{syllable.durationSeconds}s</Caption>
      </Card.Content>
    </Card>
  ))}
</ScrollView>
```

## Navigation

### Stack (inside Dictionary tab)
```
DictionaryStack:
  - DictionarySearch (tab root: search, results on same screen or sub-stack)
  - WordDetail
  - SavedWords (My Saved Words — full screen or modal)
```

### Transitions from Dictionary
1. **Word Practice Screen** — via **Practice** on result card / details / saved list (`wordId`, syllables, tones).
2. **Flashcards** — via **Card** in details (create / preview card for word).
3. **Settings / Profile** — AppBar icons (as on other tabs).
4. **Back from Word Detail** — return to results with preserved query.

### AppBar note
Dictionary **tab root** usually has **no** `BackAction`; back is needed on **Word Detail** and **Saved Words**. In ASCII search states you can omit back or show it only inside nested stack screens.

## Responsive layout

### Mobile
```
[AppBar]
[Search + autosuggest]
[content: recent / results / details]
[Bottom Tabs]
```

### Tablet
```
[AppBar]
[optional master-detail: results left, Word Detail right]
```

### Web (Expo)
Wider search field, filter sidebar (like word-selection), keyboard navigation for suggestions.

## Performance

1. **Debounce** search field (e.g. 200–300 ms) before API / local index query.
2. **FlatList** for results and saved words; **virtualize** long lists.
3. **Limit** first page (e.g. 50) + “Load more” or pagination.
4. **Cache** recent queries and popular words for offline (OFFLINE / ERROR states).
5. **Cancel** in-flight requests when query changes (AbortController / request generation flag).

## Test cases

### Test 1: Search and details
```
1. Enter «สวัสดี»
2. Verify suggestions / results
3. Open View Details
4. Play audio (if online)
5. Practice → Word Practice with correct word id
```

### Test 2: Saved words
```
1. Dictionary → My Saved Words
2. Filter by tone
3. Practice / Remove / return to search
```

### Test 3: Empty and offline
```
1. Query with no matches → EMPTY SEARCH
2. Offline → OFFLINE MODE, search cache only
3. Simulate API error → ERROR + Retry
```

## Related screens

**← Back:** other Bottom Navigation tabs  
**→ Next:** [Word Practice Screen](./word-practice.md), [Flashcards Screen](./flashcards.md)

---

*Last updated: 2026-03-28*  
*Status: ASCII wireframe — navigation, performance, tests added*
