# Word Selection Screen
*Pick a word to practice tones*

## Overall screen structure

```
┌─────────────────────────────────────────────────────┐
│  Practice Thai Tones              ⚙️ 🏆 👤          │ ← AppBar
├─────────────────────────────────────────────────────┤
│  Filters:                                          │
│  ┌───┬───┬───┬───┬───┐                            │
│  │ M │ L │ F │ H │ R │    ← Tone Filter Chips     │
│  └───┴───┴───┴───┴───┘                            │
│                                                    │
│  ┌───┬───┬───┬─────┐                              │
│  │ 1 │ 2 │ 3 │ 4+  │    ← Syllable Count Filter   │
│  └───┴───┴───┴─────┘                              │
│                                                    │
│  ┌─────────────────────┐                          │
│  │  🔍 Search words... │    ← Search Input        │
│  └─────────────────────┘                          │
│                                                    │
│  Word List (Scrollable):                          │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │  มา (maa) - to come                         │  │
│  │  • Syllables: 1                             │  │ ← Word Card 1
│  │  • Tones: [Falling]                         │  │
│  │  • Difficulty: ⭐                            │  │
│  │  [ Practice ]                               │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │  สวัสดี (sà-wàt-dii) - hello                │  │
│  │  • Syllables: 3                             │  │ ← Word Card 2
│  │  • Tones: [Mid][Low][Mid]                   │  │
│  │  • Difficulty: ⭐⭐⭐                         │  │
│  │  [ Practice ]                               │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │  ขอบคุณ (khàwp-khun) - thank you            │  │
│  │  • Syllables: 2                             │  │ ← Word Card 3
│  │  • Tones: [Low][High]                       │  │
│  │  • Difficulty: ⭐⭐                          │  │
│  │  [ Practice ]                               │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Showing 3 of 250 words                          │ ← Footer
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │ ← Bottom Navigation
└─────────────────────────────────────────────────────┘
```

## React Native Paper components

### 1. AppBar (top bar)
```javascript
<Appbar.Header>
  <Appbar.Content title="Practice Thai Tones" />
  <Appbar.Action icon="cog" onPress={() => {}} />      // Settings
  <Appbar.Action icon="trophy" onPress={() => {}} />   // Achievements
  <Appbar.Action icon="account" onPress={() => {}} />  // Profile
</Appbar.Header>
```

### 2. Filters (Chip)
```javascript
// Tone filter
<Chip 
  selected={selectedTones.includes('mid')}
  onPress={() => toggleToneFilter('mid')}
  style={{ backgroundColor: '#2196F3' }} // Blue = mid
>
  M
</Chip>

// Syllable count filter
<Chip
  selected={syllableFilter === '1'}
  onPress={() => setSyllableFilter('1')}
>
  1
</Chip>
```

### 3. Search Input
```javascript
<TextInput
  label="Search words..."
  value={searchQuery}
  onChangeText={setSearchQuery}
  left={<TextInput.Icon icon="magnify" />}
  mode="outlined"
/>
```

### 4. Word cards (Card)
```javascript
<Card>
  <Card.Content>
    <Title>{word.thai} ({word.transliteration})</Title>
    <Paragraph>{word.english}</Paragraph>
    
    <View style={{ flexDirection: 'row', marginTop: 8 }}>
      <Chip icon="music-note" style={{ marginRight: 4 }}>
        Syllables: {word.syllableCount}
      </Chip>
      {word.tones.map((tone, index) => (
        <Chip 
          key={index}
          style={{ backgroundColor: getToneColor(tone) }}
        >
          {tone.charAt(0).toUpperCase()}
        </Chip>
      ))}
    </View>
    
    <View style={{ flexDirection: 'row', marginTop: 8 }}>
      {[...Array(word.difficulty)].map((_, i) => (
        <Icon key={i} source="star" size={16} color="#FFD700" />
      ))}
    </View>
  </Card.Content>
  <Card.Actions>
    <Button 
      mode="contained" 
      onPress={() => navigateToPractice(word)}
      icon="microphone"
    >
      Practice
    </Button>
  </Card.Actions>
</Card>
```

### 5. Bottom Navigation
```javascript
<BottomNavigation
  navigationState={{ index, routes }}
  onIndexChange={setIndex}
  renderScene={renderScene}
  renderIcon={({ route, focused, color }) => (
    <Icon source={route.icon} color={color} size={24} />
  )}
/>
```

## Interactivity and states

### State 1: Normal (data loaded)
```
[ ] No active filters (or filters on)
[ ] Search empty (or query set)
[ ] Word list loaded (first 20 words)
[ ] Infinite scroll ready
[ ] All buttons enabled
```

### State 2: Loading
```
┌─────────────────────────────────────┐
│  Practice Thai Tones                │
├─────────────────────────────────────┤
│  Filters: [Skeleton]                │
│                                     │
│  🔍 [Loading...]                    │
│                                     │
│  ┌─────────────────────────────┐    │
│  │  [Skeleton Card]            │    │
│  └─────────────────────────────┘    │
│  ┌─────────────────────────────┐    │
│  │  [Skeleton Card]            │    │
│  └─────────────────────────────┘    │
│                                     │
│  Loading words...                   │
└─────────────────────────────────────┘
```

### State 3: No Results
```
┌─────────────────────────────────────┐
│  Practice Thai Tones                │
├─────────────────────────────────────┤
│  Filters: [M][2][Search: "xyz"]     │ ← Active filters
│                                     │
│  No words match your criteria       │
│                                     │
│  [Clear All Filters]                │ ← Reset
│                                     │
│  Try:                               │
│  • Remove some filters              │
│  • Clear search                     │
│  • Try different tone combinations  │
└─────────────────────────────────────┘
```

### State 4: Error
```
┌─────────────────────────────────────┐
│  Practice Thai Tones                │
├─────────────────────────────────────┤
│  ⚠️ Error loading words             │
│                                     │
│  Could not connect to server.       │
│  Please check your internet         │
│  connection and try again.          │
│                                     │
│  [Retry]                            │ ← Retry
│                                     │
│  Working offline?                   │
│  [Use Cached Words]                 │ ← Offline
└─────────────────────────────────────┘
```

### State 5: Infinite scroll loading
```
┌─────────────────────────────────────┐
│  Practice Thai Tones                │
├─────────────────────────────────────┤
│  Filters: [M][L]                    │
│                                     │
│  🔍 Search words...                 │
│                                     │
│  [Word Card 1]                      │
│  [Word Card 2]                      │
│  [Word Card 3]                      │
│  [Word Card 4]                      │
│  [Word Card 5]                      │
│                                     │
│  Loading more words...              │ ← Footer spinner
│  ┌─────────────────────────────┐    │
│  │  [Skeleton Card]            │    │
│  └─────────────────────────────┘    │
│  ┌─────────────────────────────┐    │
│  │  [Skeleton Card]            │    │
│  └─────────────────────────────┘    │
│                                     │
│  Scroll for more                    │
└─────────────────────────────────────┘
```

## Filter logic

### Tone filter (OR logic — Option A):
```
// Option A: OR — show words that contain ANY selected tone
selectedTones = ['mid', 'low'] → words containing mid OR low

Example:
Word "สวัสดี" has tones: [mid, low, mid]
If selectedTones = ['mid', 'low'] → shown (has mid)
If selectedTones = ['high', 'rising'] → hidden (no match)
If selectedTones = ['low', 'falling'] → shown (has low)
If selectedTones = [] → all words
```

**Note:** OR not AND. User picks tones to practice; list shows words with at least one matching tone.

### Syllable count filter:
```
syllableFilter = '1' → one-syllable only
syllableFilter = '2' → two syllables
syllableFilter = '3' → three syllables
syllableFilter = '4+' → 4+ syllables
syllableFilter = null → all
```

### Combined filtering:
```javascript
const filteredWords = words.filter(word => {
  // Tone filter
  if (selectedTones.length > 0) {
    const hasSelectedTone = word.tones.some(tone => 
      selectedTones.includes(tone)
    );
    if (!hasSelectedTone) return false;
  }
  
  // Syllable filter
  if (syllableFilter) {
    if (syllableFilter === '4+') {
      if (word.syllableCount < 4) return false;
    } else {
      if (word.syllableCount !== parseInt(syllableFilter)) return false;
    }
  }
  
  // Search
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    return (
      word.thai.toLowerCase().includes(query) ||
      word.transliteration.toLowerCase().includes(query) ||
      word.english.toLowerCase().includes(query)
    );
  }
  
  return true;
});
```

## Tap handling

### 1. Tone Chip tap
```
Before: [M][L][F][H][R] (none selected)
After tapping [M]: [M✓][L][F][H][R] (mid selected)

State: selectedTones = ['mid']
Action: refilter list
Animation: chip color + checkmark
Haptic: light tap
```

### 2. Practice button
```
Before: normal **Practice**
On tap: 
1. Button shows loading
2. Success haptic
3. Navigate to WordPractice with:
   {
     wordId: word.id,
     word: word.thai,
     tones: word.tones,
     syllables: word.syllableCount
   }
4. Transition: slide from right
```

### 3. Search (TextInput)
```
Type: debounced search (300 ms)
Behavior:
- User types "สว"
- After 300 ms run search
- Show loading indicator
- Show words containing "สว"
- No results → empty state
```

### 4. Pull to refresh
```
Gesture: pull down on list
States:
1. Pull started: "Pull to refresh"
2. Enough pull: "Release to refresh"
3. Release: refresh + ActivityIndicator
4. Done: list refreshed, Snackbar "Words updated"
```

## Data and types

### Types:
```typescript
interface Word {
  id: string;
  thai: string;
  transliteration: string;
  english: string;
  syllableCount: number; // Difficulty from syllable count only
  tones: ThaiTone[]; // ['mid', 'low', 'mid']
  difficulty: 1 | 2 | 3 | 4 | 5; // From syllableCount: 1=⭐ … 4+=⭐⭐⭐⭐+
  audioUrl: string;
  syllableBreakdown: Syllable[];
}

interface Syllable {
  thai: string;
  tone: ThaiTone;
  position: number;
  duration: number; // seconds
}

type ThaiTone = 'mid' | 'low' | 'falling' | 'high' | 'rising';
```

### Data sources:
```javascript
// Local (offline)
const cachedWords = await AsyncStorage.getItem('cached_words');

// From server
const response = await fetch('https://api.thaitone.com/words');
const words = await response.json();

// Cache
await AsyncStorage.setItem('cached_words', JSON.stringify(words));
```

## Animations and transitions

### 1. Filter animation:
```javascript
// On filter select
Animated.spring(chipScale, {
  toValue: 0.95,
  friction: 3,
  useNativeDriver: true,
});

// Return to normal size
Animated.spring(chipScale, {
  toValue: 1,
  friction: 3,
  useNativeDriver: true,
});
```

### 2. List loading:
```javascript
// Skeleton animation
const skeletonOpacity = useRef(new Animated.Value(0.3)).current;

useEffect(() => {
  Animated.loop(
    Animated.sequence([
      Animated.timing(skeletonOpacity, {
        toValue: 0.7,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(skeletonOpacity, {
        toValue: 0.3,
        duration: 800,
        useNativeDriver: true,
      }),
    ])
  ).start();
}, []);
```

### 3. Navigate to practice:
```javascript
navigation.navigate('WordPractice', {
  word: selectedWord,
  screenTransition: {
    type: 'slide_from_right',
    duration: 300,
  },
});
```

## Navigation

### Stack Navigation:
```
RootStackNavigator:
  - WordSelectionScreen (this screen)
  - WordPracticeScreen (next)
  - SettingsScreen
  - ProfileScreen
  - AchievementsScreen
```

### Bottom Tabs:
```
TabNavigator:
  Tab 1: Home (WordSelectionScreen)
  Tab 2: Dictionary
  Tab 3: Flashcards
  Tab 4: Shadowing
  Tab 5: Dashboard
```

## Responsive layout

### Mobile (portrait):
```
[AppBar]
[Filters — horizontal scroll]
[Search]
[Word list — vertical scroll]
[Bottom Navigation]
```

### Tablet (landscape):
```
[AppBar]
[Left: filters vertical]
[Right: word list]
[Bottom nav hidden?]
```

### Desktop (Expo web):
```
[AppBar]
[Left sidebar: all filters]
[Main: word card grid (3 cols)]
[Right: quick word preview]
```

## Performance

### Optimizations:
1. **Virtualized list** for long word lists
2. **Debounced search** (not every keystroke)
3. **Lazy load** images/audio
4. **Memory cache** for loaded words
5. **Skeleton** while loading

### Pagination (infinite scroll):
```javascript
// Load 20 words per page
const [page, setPage] = useState(1);
const [hasMore, setHasMore] = useState(true);

const loadMoreWords = async () => {
  if (loading || !hasMore) return;
  
  setLoading(true);
  const nextPage = page + 1;
  const newWords = await fetchWords({
    page: nextPage,
    limit: 20,
    tones: selectedTones,
    syllableFilter,
    search: searchQuery
  });
  
  if (newWords.length === 0) {
    setHasMore(false);
  } else {
    setWords([...words, ...newWords]);
    setPage(nextPage);
  }
  setLoading(false);
};

// In FlatList
<FlatList
  data={words}
  onEndReached={loadMoreWords}
  onEndReachedThreshold={0.5}
  ListFooterComponent={hasMore ? <ActivityIndicator /> : null}
/>
```

### Limits:
- 20 words per fetch
- Trigger infinite scroll at ~80% scroll
- Cache last 100 searches

## Test scenarios

### Test 1: Basic flow
```
1. Open screen
2. Select filter [M]
3. Select filter [1]
4. Find word "มา"
5. Tap Practice
6. Verify navigation to practice
```

### Test 2: Search
```
1. Search "สว"
2. Verify "สวัสดี" appears
3. Clear search
4. Verify full list
```

### Test 3: Offline
```
1. Turn off network
2. Open screen
3. Cached words show
4. Error/offline message if applicable
```

---

## Navigation

### From this screen:
1. **Practice on word card:**
   - Go to Word Practice
   - Params: word id, text, syllables, tones
   - Animation: slide from right

2. **AppBar actions:**
   - Settings (⚙️)
   - Achievements (🏆)
   - Profile (👤)

3. **Bottom navigation:**
   - 🏠 → Home (this tab)
   - 📚 → Dictionary
   - 🎴 → Flashcards
   - 🎥 → Shadowing
   - 📊 → Dashboard

4. **Back:**
   - Hardware back (Android)
   - Swipe back (iOS)
   - From flows: AppBar Back

### Navigation notes:
- Persist filters on return
- Infinite scroll keeps scroll position
- Search history preserved
- Cached words offline

---

## Related screens

**← Back:** Dashboard / Home  
**→ Next:** [Word Practice Screen](./word-practice.md)

---

*Last updated: 2026-03-28*
*Status: ASCII wireframe — complete*