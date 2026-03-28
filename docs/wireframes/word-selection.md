# Word Selection Screen
*Экран выбора слова для практики тонов*

## 📱 Общая структура экрана

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

## 🎨 Компоненты React Native Paper

### 1. AppBar (верхняя панель)
```javascript
<Appbar.Header>
  <Appbar.Content title="Practice Thai Tones" />
  <Appbar.Action icon="cog" onPress={() => {}} />      // Настройки
  <Appbar.Action icon="trophy" onPress={() => {}} />   // Достижения
  <Appbar.Action icon="account" onPress={() => {}} />  // Профиль
</Appbar.Header>
```

### 2. Фильтры (Chip компоненты)
```javascript
// Фильтр тонов
<Chip 
  selected={selectedTones.includes('mid')}
  onPress={() => toggleToneFilter('mid')}
  style={{ backgroundColor: '#2196F3' }} // Синий для mid tone
>
  M
</Chip>

// Фильтр количества слогов
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

### 4. Word Cards (Card компоненты)
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

## 🎮 Интерактивность и состояния

### Состояние 1: Normal (данные загружены)
```
[ ] No active filters (или выбраны фильтры)
[ ] Search empty (или есть поисковый запрос)
[ ] Word list loaded (первые 20 слов)
[ ] Infinite scroll ready
[ ] All buttons enabled
```

### Состояние 2: Loading (загрузка слов)
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

### Состояние 3: No Results (нет результатов)
```
┌─────────────────────────────────────┐
│  Practice Thai Tones                │
├─────────────────────────────────────┤
│  Filters: [M][2][Search: "xyz"]     │ ← Активные фильтры
│                                     │
│  No words match your criteria       │
│                                     │
│  [Clear All Filters]                │ ← Кнопка сброса
│                                     │
│  Try:                               │
│  • Remove some filters              │
│  • Clear search                     │
│  • Try different tone combinations  │
└─────────────────────────────────────┘
```

### Состояние 4: Error (ошибка загрузки)
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
│  [Retry]                            │ ← Кнопка повтора
│                                     │
│  Working offline?                   │
│  [Use Cached Words]                 │ ← Кнопка оффлайн
└─────────────────────────────────────┘
```

### Состояние 5: Infinite Scroll Loading (загрузка следующей страницы)
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
│  Loading more words...              │ ← ActivityIndicator внизу
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

## 🔧 Логика фильтрации

### Фильтр по тонам (Логика OR - Вариант А):
```
// Вариант А: Логика OR (показывать слова с ЛЮБЫМ из выбранных тонов)
selectedTones = ['mid', 'low'] → показывать слова содержащие mid ИЛИ low

Пример:
Слово "สวัสดี" имеет тоны: [mid, low, mid]
Если selectedTones = ['mid', 'low'] → слово показывается (есть mid)
Если selectedTones = ['high', 'rising'] → слово скрывается (нет совпадений)
Если selectedTones = ['low', 'falling'] → слово показывается (есть low)
Если selectedTones = [] → все слова
```

**Важно:** Это логика OR, а не AND. Пользователь выбирает тоны которые хочет практиковать, и видит слова содержащие хотя бы один из этих тонов.

### Фильтр по количеству слогов:
```
syllableFilter = '1' → только односложные слова
syllableFilter = '2' → двухсложные слова
syllableFilter = '3' → трехсложные слова
syllableFilter = '4+' → 4 и более слогов
syllableFilter = null → все слова
```

### Комбинированная фильтрация:
```javascript
const filteredWords = words.filter(word => {
  // Фильтр по тонам
  if (selectedTones.length > 0) {
    const hasSelectedTone = word.tones.some(tone => 
      selectedTones.includes(tone)
    );
    if (!hasSelectedTone) return false;
  }
  
  // Фильтр по слогам
  if (syllableFilter) {
    if (syllableFilter === '4+') {
      if (word.syllableCount < 4) return false;
    } else {
      if (word.syllableCount !== parseInt(syllableFilter)) return false;
    }
  }
  
  // Поиск
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

## 🎯 Обработка нажатий

### 1. Нажатие на Chip (фильтр тона)
```
До: [M][L][F][H][R] (все неактивны)
После нажатия на [M]: [M✓][L][F][H][R] (mid tone выбран)

Состояние: selectedTones = ['mid']
Действие: перефильтровать список слов
Анимация: Chip меняет цвет и показывает галочку
Haptic Feedback: легкая вибрация
```

### 2. Нажатие на Practice Button
```
До: Кнопка "Practice" обычная
Нажатие: 
1. Кнопка показывает loading состояние
2. Haptic feedback (успешное нажатие)
3. Навигация на WordPracticeScreen с параметрами:
   {
     wordId: word.id,
     word: word.thai,
     tones: word.tones,
     syllables: word.syllableCount
   }
4. Анимация перехода: slide from right
```

### 3. Поиск (TextInput)
```
Тип: debounced search (задержка 300ms)
Поведение:
- Пользователь вводит "สว"
- Через 300ms запускается поиск
- Показывается индикатор загрузки
- Отображаются слова содержащие "สว"
- Если нет результатов → Empty State
```

### 4. Pull to Refresh
```
Жест: Pull down на списке слов
Состояния:
1. Pull начат: показать индикатор "Pull to refresh"
2. Pull достаточный: индикатор меняется на "Release to refresh"
3. Release: запускается refresh, показывает ActivityIndicator
4. Завершено: список обновлен, Snackbar "Words updated"
```

## 📊 Данные и структура

### Типы данных:
```typescript
interface Word {
  id: string;
  thai: string;
  transliteration: string;
  english: string;
  syllableCount: number; // Сложность определяется только по количеству слогов
  tones: ThaiTone[]; // ['mid', 'low', 'mid']
  difficulty: 1 | 2 | 3 | 4 | 5; // На основе syllableCount: 1=⭐, 2=⭐⭐, 3=⭐⭐⭐, 4+=⭐⭐⭐⭐+
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

### Источники данных:
```javascript
// Локальное хранение (для оффлайн)
const cachedWords = await AsyncStorage.getItem('cached_words');

// Загрузка с сервера
const response = await fetch('https://api.thaitone.com/words');
const words = await response.json();

// Кэширование
await AsyncStorage.setItem('cached_words', JSON.stringify(words));
```

## 🎨 Анимации и переходы

### 1. Анимация фильтров:
```javascript
// При выборе фильтра
Animated.spring(chipScale, {
  toValue: 0.95,
  friction: 3,
  useNativeDriver: true,
});

// Возврат к нормальному размеру
Animated.spring(chipScale, {
  toValue: 1,
  friction: 3,
  useNativeDriver: true,
});
```

### 2. Загрузка списка:
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

### 3. Переход к Practice Screen:
```javascript
navigation.navigate('WordPractice', {
  word: selectedWord,
  screenTransition: {
    type: 'slide_from_right',
    duration: 300,
  },
});
```

## 🔗 Навигация

### Stack Navigation:
```
RootStackNavigator:
  - WordSelectionScreen (этот экран)
  - WordPracticeScreen (следующий экран)
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

## 📱 Адаптация под разные экраны

### Mobile (вертикальный):
```
[AppBar]
[Filters - горизонтальный скролл]
[Search]
[Word List - вертикальный скролл]
[Bottom Navigation]
```

### Tablet (горизонтальный):
```
[AppBar]
[Left Panel: Filters вертикально]
[Right Panel: Word List]
[Bottom Navigation скрыта?]
```

### Desktop (Web через Expo):
```
[AppBar]
[Left Sidebar: Все фильтры]
[Main Content: Grid из Word Cards (3 колонки)]
[Right Sidebar: Быстрый предпросмотр слова]
```

## 🚀 Производительность

### Оптимизации:
1. **Virtualized List** для длинных списков слов
2. **Debounced search** чтобы не делать запросы на каждый символ
3. **Lazy loading** изображений/аудио
4. **Memory caching** загруженных слов
5. **Skeleton screens** во время загрузки

### Пагинация (Infinite Scroll):
```javascript
// Загружаем по 20 слов за раз
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

// В FlatList
<FlatList
  data={words}
  onEndReached={loadMoreWords}
  onEndReachedThreshold={0.5}
  ListFooterComponent={hasMore ? <ActivityIndicator /> : null}
/>
```

### Лимиты:
- Пагинация: 20 слов за загрузку
- Infinite scroll при достижении 80% списка
- Кэшировать последние 100 поисковых запросов

## 🧪 Тестовые сценарии

### Тест 1: Базовый flow
```
1. Открыть экран
2. Выбрать фильтр [M] (mid tone)
3. Выбрать фильтр [1] (1 syllable)
4. Найти слово "มา"
5. Нажать Practice
6. Проверить переход на экран практики
```

### Тест 2: Поиск
```
1. Ввести в поиск "สว"
2. Проверить что показывается "สวัสดี"
3. Очистить поиск
4. Проверить что показываются все слова
```

### Тест 3: Оффлайн режим
```
1. Отключить интернет
2. Открыть экран
3. Проверить что показываются кэшированные слова
4. Проверить сообщение об ошибке/оффлайн режиме
```

---

## 🔗 Навигация

### Навигация с этого экрана:
1. **Нажатие на кнопку "Practice" на карточке слова:**
   - Переход на Word Practice Screen
   - Параметры: выбранное слово (id, текст, слоги, тоны)
   - Анимация: slide from right

2. **Нажатие на кнопки в AppBar:**
   - Settings (⚙️) → экран настроек
   - Achievements (🏆) → экран достижений
   - Profile (👤) → экран профиля

3. **Нажатие на Bottom Navigation:**
   - 🏠 → этот же экран (Home)
   - 📚 → Dictionary Screen
   - 🎴 → Flashcards Screen
   - 🎥 → Shadowing Screen
   - 📊 → Dashboard Screen

4. **Навигация назад:**
   - Hardware back button (Android)
   - Swipe back gesture (iOS)
   - Из других экранов: кнопка Back в AppBar

### Особенности навигации:
- Сохранение состояния фильтров при возврате
- Infinite scroll сохраняет позицию прокрутки
- Поисковый запрос сохраняется в истории
- Кэшированные слова доступны оффлайн

---

## 🔗 Связанные экраны

**← Назад:** Dashboard / Home  
**→ Вперед:** [Word Practice Screen](../word-practice.md)

---

*Последнее обновление: 2024-03-28*
*Статус: ASCII wireframe - Complete*