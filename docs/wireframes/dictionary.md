# Dictionary Screen
*Экран словаря для поиска и просмотра тайских слов с информацией о тонах*

## 📱 Общая структура экрана

### Состояние 1: SEARCH (поиск)
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

### Состояние 2: SEARCH RESULTS (результаты поиска)
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

### Состояние 3: WORD DETAILS (детали слова)
```
┌─────────────────────────────────────────────────────┐
│  ← Dictionary        สวัสดี          ⏹️ 🔊          │ ← AppBar с кнопками
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

### Состояние 4: MY SAVED WORDS (мои сохраненные слова)
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

### Состояние 5: LOADING (загрузка)
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

### Состояние 6: EMPTY SEARCH (пустой поиск)
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

### Состояние 7: ERROR (ошибка)
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

### Состояние 8: OFFLINE MODE (оффлайн режим)
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

## 🎨 Компоненты React Native Paper

### 1. AppBar с состоянием
```javascript
// Состояние: Search
<Appbar.Header>
  <Appbar.BackAction onPress={() => navigation.goBack()} />
  <Appbar.Content title="Dictionary" />
  <Appbar.Action icon="cog" onPress={() => navigation.navigate('Settings')} />
  <Appbar.Action icon="bookmark" onPress={() => navigation.navigate('SavedWords')} />
  <Appbar.Action icon="account" onPress={() => navigation.navigate('Profile')} />
</Appbar.Header>

// Состояние: Word Details
<Appbar.Header>
  <Appbar.BackAction onPress={() => navigation.goBack()} />
  <Appbar.Content title={currentWord.thai} />
  <Appbar.Action icon="stop-circle" disabled />
  <Appbar.Action icon="volume-high" onPress={playWordAudio} />
</Appbar.Header>
```

### 2. Search Input с автодополнением
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

### 3. Word Result Cards
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

### 4. Syllable Breakdown Cards
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

## 🔗 Навигация

### Stack (внутри таба Dictionary)
```
DictionaryStack:
  - DictionarySearch (корень таба: поиск, результаты в том же экране или подстек)
  - WordDetail (детали слова)
  - SavedWords (My Saved Words — полноэкранно или модалка)
```

### Переходы с Dictionary
1. **Word Practice Screen** — по «Practice» в карточке результата / деталях / сохранённых (`wordId`, слоги, тоны).
2. **Flashcards** — по «Card» в деталях (создать/обзор карточки для слова).
3. **Settings / Profile** — иконки в AppBar (как на других табах).
4. **Назад с Word Detail** — возврат к списку результатов с сохранённым запросом.

### Замечание по AppBar
Корень таба **Dictionary** обычно **без** `BackAction`; кнопка «назад» нужна на **Word Detail** и **Saved Words**. В ASCII-состояниях поиска можно убрать стрелку назад или показывать её только внутри вложенных экранов стека.

## 📱 Адаптация под разные экраны

### Mobile
```
[AppBar]
[Search + autosuggest]
[контент: recent / результаты / детали]
[Bottom Tabs]
```

### Tablet
```
[AppBar]
[опционально master-detail: слева список результатов, справа Word Detail]
```

### Web (Expo)
Шире поле поиска, боковая панель фильтров (как в word-selection), клавиатурная навигация по подсказкам.

## 🚀 Производительность

1. **Debounce** поля поиска (например 200–300 ms) перед запросом/API/локальному индексу.
2. **FlatList** для результатов и сохранённых слов; **виртуализация** при длинных списках.
3. **Лимит** первой выдачи (например 50) + «Load more» или пагинация.
4. **Кэш** недавних запросов и популярных слов для офлайна (согласовано с состояниями OFFLINE / ERROR).
5. **Отмена** in-flight запроса при смене строки поиска (AbortController / флаг поколения запроса).

## 🧪 Тестовые сценарии

### Тест 1: Поиск и детали
```
1. Ввести «สวัสดี»
2. Проверить подсказки / результаты
3. Открыть View Details
4. Воспроизвести аудио (если online)
5. Practice → Word Practice с верным word id
```

### Тест 2: Сохранённые слова
```
1. Dictionary → My Saved Words
2. Фильтр по тону
3. Practice / Remove / возврат в поиск
```

### Тест 3: Пустой и офлайн
```
1. Запрос без совпадений → EMPTY SEARCH
2. В offline → OFFLINE MODE, поиск только по кэшу
3. Симулировать ошибку API → ERROR + Retry
```

## 🔗 Связанные экраны

**← Назад:** другие табы Bottom Navigation  
**→ Вперёд:** [Word Practice Screen](./word-practice.md), [Flashcards Screen](./flashcards.md)

---

*Последнее обновление: 2026-03-28*  
*Статус: ASCII wireframe — в работе (добавлены навигация, производительность, тесты)*