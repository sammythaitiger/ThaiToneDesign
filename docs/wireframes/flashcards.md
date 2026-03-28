# Flashcards Screen
*Интервальное повторение: лицевая сторона (распознавание) → оборот (значение, тоны, аудио)*

## 📱 Общая структура экрана

### Состояние 1: DECK HUB (старт таба)
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
│  │ M │ L │ F │ H │ R │  ← открыть сессию с фильтром│
│  └───┴───┴───┴───┴───┘                            │
│                                                    │
│  [ + Create deck from Dictionary ]                │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

### Состояние 2: CARD — FRONT (вопрос)
```
┌─────────────────────────────────────────────────────┐
│  ← Session          3 / 12            ⋮            │ ← меню: настройки сессии
├─────────────────────────────────────────────────────┤
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │                                             │  │
│  │              สวัสดี                         │  │ ← крупный тайский
│  │                                             │  │
│  │        (tap card to reveal)                 │  │
│  │                                             │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Progress: ████░░░░░░ 25%                         │
│                                                    │
│  [← Hard]              [ Easy →]                  │ ← или свайп влево/вправо
│  Hint: show romanization (long press)             │
├─────────────────────────────────────────────────────┤
│  (Bottom tabs скрыты во время сессии — опционально) │
└─────────────────────────────────────────────────────┘
```

### Состояние 3: CARD — BACK (ответ)
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
│  │  [ Again ] [ Hard ] [ Good ] [ Easy ]      │  │ ← интервалы SRS
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  [ Flip back ] (или свайп вниз)                   │
└─────────────────────────────────────────────────────┘
```

### Состояние 4: SESSION SUMMARY (итог)
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

### Состояние 5: LOADING
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

### Состояние 6: EMPTY (нет карточек)
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

### Состояние 7: ERROR
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

## 🎨 Компоненты React Native Paper

### Карточка сессии (лицевая / оборот)
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

### Прогресс сессии
```javascript
<ProgressBar progress={currentIndex / queue.length} style={{ marginHorizontal: 16 }} />
<Text variant="labelMedium" style={{ textAlign: 'center' }}>
  {currentIndex + 1} / {queue.length}
</Text>
```

## 🔗 Навигация

### Stack (внутри таба Flashcards)
```
FlashcardsStack:
  - DeckHub (корень)
  - StudySession (полноэкранная сессия)
  - DeckDetail (опционально: список карточек коллекции)
```

### Переходы
1. **Dictionary / Saved Words** → добавление слова в колоду (создание карточки локально).
2. **Word Practice** — из summary «Practice weakest» или из длинного тапа по карточке в DeckDetail.
3. **Home (Word Selection)** — кнопка EMPTY state.

## 📱 Адаптация

- **Mobile:** одна карточка на экран, свайпы для рейтинга.
- **Tablet:** карточка + боковая колонка «очередь» или превью следующей.
- **Web:** те же жесты + клик по кнопкам рейтинга; клавиши 1–4 для Again/Easy.

## 🚀 Производительность

1. Очередь сессии строится **локально** (SQLite/AsyncStorage + опциональный sync).
2. Предзагрузка **следующей** карточки (текст + URL аудио).
3. **Не** держать тысячи карточек в RAM — подгружать батчами по deck id.
4. Анимация flip: `react-native-reanimated` или простой `scale/opacity` MVP.

## 🧪 Тестовые сценарии

### Тест 1: Первая сессия
```
1. EMPTY → перейти в Dictionary, добавить слово в колоду
2. Вернуться → Due > 0 → START REVIEW
3. Front → tap → Back → Good
4. Дойти до summary
```

### Тест 2: Фильтр по тону
```
1. На Hub выбрать чип R
2. Проверить что в сессию попали только подходящие карточки
```

### Тест 3: Ошибка синка
```
1. Симулировать сбой API
2. Пройти несколько карточек офлайн
3. Retry → прогресс уходит на сервер без дублей
```

## 🔗 Связанные экраны

**← Назад:** Bottom tabs  
**→ Вперёд:** [Dictionary Screen](./dictionary.md), [Word Practice Screen](./word-practice.md)

---

*Последнее обновление: 2026-03-28*  
*Статус: ASCII wireframe — Complete*
