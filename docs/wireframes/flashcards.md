# Flashcards Screen
*Spaced repetition: front (recognition) → back (meaning, tones, audio)*

## Overall screen structure

### State 1: DECK HUB (tab root)
```
┌─────────────────────────────────────────────────────┐
│  Flashcards                    ⚙️ 🔍 👤           │ ← AppBar
├─────────────────────────────────────────────────────┤
│  Today                                             │
│  ┌─────────────────────────────────────────────┐  │
│  │  Due for review: 12 cards                   │  │
│  │  New: 3  ·  Learning: 4  ·  Mature: 5       │  │
│  │  [ START REVIEW SESSION ]                   │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  My Decks:                                        │
│  ┌─────────────────────────────────────────────┐  │
│  │  All saved words              42 cards       │  │
│  │  Last: Yesterday                   [ Open ]  │  │
│  └─────────────────────────────────────────────┘  │
│  ┌─────────────────────────────────────────────┐  │
│  │  Rising tone focus            18 cards       │  │
│  │  Last: 2 days ago                  [ Open ]  │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Quick filters:                                   │
│  ┌───┬───┬───┬───┬───┐                            │
│  │ M │ L │ F │ H │ R │  ← start session with filter│
│  └───┴───┴───┴───┴───┘                            │
│                                                    │
│  [ + Create deck from Dictionary ]                │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

### State 2: CARD — FRONT (question)
```
┌─────────────────────────────────────────────────────┐
│  ← Session          3 / 12            ⋮            │ ← menu: session settings
├─────────────────────────────────────────────────────┤
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │                                             │  │
│  │              สวัสดี                         │  │ ← large Thai
│  │                                             │  │
│  │        (tap card to reveal)                 │  │
│  │                                             │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Progress: ████░░░░░░ 25%                         │
│                                                    │
│  [← Hard]              [ Easy →]                  │ ← or swipe L/R
│  Hint: show romanization (long press)             │
├─────────────────────────────────────────────────────┤
│  (Bottom tabs hidden during session — optional)   │
└─────────────────────────────────────────────────────┘
```

### State 3: CARD — BACK (answer)
```
┌─────────────────────────────────────────────────────┐
│  ← Session          3 / 12            🔊           │
├─────────────────────────────────────────────────────┤
│  สวัสดี  ·  sà-wàt-dii                           │
│  hello / goodbye                                   │
│                                                    │
│  Tones: [Mid][Low][Mid]                           │
│  Syllables: 3                                      │
│                                                    │
│  [▶ Word]  [▶ Syllable 1] [2] [3]                  │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │  How well did you know it?                  │  │
│  │  [ Again ] [ Hard ] [ Good ] [ Easy ]      │  │ ← SRS intervals
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  [ Flip back ] (or swipe down)                   │
└─────────────────────────────────────────────────────┘
```

### State 4: SESSION SUMMARY
```
┌─────────────────────────────────────────────────────┐
│  Session complete              ✓                   │
├─────────────────────────────────────────────────────┤
│  Studied: 12 cards                                │
│  Time: 4 min                                       │
│  Again: 2  ·  Hard: 1  ·  Good: 7  ·  Easy: 2     │
│                                                    │
│  Streak: 5 days 🔥                                 │
│                                                    │
│  [ Review Again ]  [ Back to Decks ]              │
│  [ Practice weakest → Word Practice ]             │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

### State 5: LOADING
```
┌─────────────────────────────────────────────────────┐
│  Flashcards                    ⚙️ 🔍 👤           │
├─────────────────────────────────────────────────────┤
│  Loading decks...                                  │
│  ┌─────────────────────────────────────────────┐  │
│  │  [Skeleton: Due card]                       │  │
│  └─────────────────────────────────────────────┘  │
│  ┌─────────────────────────────────────────────┐  │
│  │  [Skeleton: Deck list]                      │  │
│  └─────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

### State 6: EMPTY (no cards)
```
┌─────────────────────────────────────────────────────┐
│  Flashcards                    ⚙️ 🔍 👤           │
├─────────────────────────────────────────────────────┤
│  No cards yet                                      │
│                                                    │
│  Add words from the Dictionary or Word Selection  │
│  to build your first deck.                         │
│                                                    │
│  [ Open Dictionary ]  [ Browse Words (Home) ]     │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

### State 7: ERROR
```
┌─────────────────────────────────────────────────────┐
│  Flashcards                    ⚙️ 🔍 👤           │
├─────────────────────────────────────────────────────┤
│  ⚠️ Could not sync flashcard progress             │
│                                                    │
│  Your local reviews are saved. Retry to sync.       │
│                                                    │
│  [ Retry ]  [ Continue offline ]                   │
└─────────────────────────────────────────────────────┘
```

## React Native Paper components

### Session card (front / back)
```javascript
<GestureDetector gesture={tapFlip}>
  <Card style={{ margin: 16, minHeight: 280, justifyContent: 'center' }}>
    <Card.Content>
      <Title style={{ fontSize: 32, textAlign: 'center' }}>{showBack ? '' : card.thai}</Title>
      {showBack && (
        <>
          <Paragraph style={{ textAlign: 'center' }}>{card.transcription}</Paragraph>
          <Paragraph style={{ textAlign: 'center', color: '#666' }}>{card.english}</Paragraph>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            {card.syllables.map((s, i) => (
              <Chip key={i} style={{ backgroundColor: getToneColor(s.tone), margin: 4 }} textStyle={{ color: '#fff' }}>
                {s.tone}
              </Chip>
            ))}
          </View>
        </>
      )}
    </Card.Content>
  </Card>
</GestureDetector>

<SegmentedButtons
  buttons={[
    { value: 'again', label: 'Again' },
    { value: 'hard', label: 'Hard' },
    { value: 'good', label: 'Good' },
    { value: 'easy', label: 'Easy' },
  ]}
  onValueChange={scheduleCard}
/>
```

### Session progress
```javascript
<ProgressBar progress={currentIndex / queue.length} style={{ marginHorizontal: 16 }} />
<Text variant="labelMedium" style={{ textAlign: 'center' }}>
  {currentIndex + 1} / {queue.length}
</Text>
```

## Navigation

### Stack (inside Flashcards tab)
```
FlashcardsStack:
  - DeckHub (root)
  - StudySession (fullscreen)
  - DeckDetail (optional: card list for collection)
```

### Transitions
1. **Dictionary / Saved Words** → add word to deck (create card locally).
2. **Word Practice** — from summary “Practice weakest” or long-press on card in DeckDetail.
3. **Home (Word Selection)** — EMPTY state button.

## Responsive behavior

- **Mobile:** one card per screen, swipes for rating.
- **Tablet:** card + side column for queue or next preview.
- **Web:** same gestures + click rating buttons; keys 1–4 for Again/Easy.

## Performance

1. Session queue built **locally** (SQLite/AsyncStorage + optional sync).
2. Prefetch **next** card (text + audio URL).
3. Do **not** keep thousands of cards in RAM — batch by deck id.
4. Flip animation: `react-native-reanimated` or simple `scale/opacity` MVP.

## Test cases

### Test 1: First session
```
1. EMPTY → Dictionary, add word to deck
2. Return → Due > 0 → START REVIEW
3. Front → tap → Back → Good
4. Reach summary
```

### Test 2: Tone filter
```
1. On Hub select chip R
2. Verify only matching cards enter session
```

### Test 3: Sync error
```
1. Simulate API failure
2. Review several cards offline
3. Retry → progress syncs without duplicates
```

## Related screens

**← Back:** Bottom tabs  
**→ Next:** [Dictionary Screen](./dictionary.md), [Word Practice Screen](./word-practice.md)

---

*Last updated: 2026-03-28*  
*Status: ASCII wireframe — Complete*
