# Shadowing Screen
*Просмотр короткого видео/клипа с носителем, субтитры по слогам, повтор и (опционально) запись*

**Контент:** не YouTube. Видео и таймкоды **`cues`** поставляет продукт (CDN / пакеты). Модель: [../curated-shadowing-content.md](../curated-shadowing-content.md).

## 📱 Общая структура экрана

### Состояние 1: VIDEO LIBRARY (выбор урока)
```
┌─────────────────────────────────────────────────────┐
│  Shadowing                     ⚙️ 🔍 👤           │
├─────────────────────────────────────────────────────┤
│  Continue watching                                 │
│  ┌─────────────────────────────────────────────┐  │
│  │  [thumb] Greetings · 2 min · Mid/Low focus  │  │
│  │  Progress ██████░░░░ 40%      [ Resume ]    │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Categories:                                      │
│  ┌────────┬────────┬────────┐                     │
│  │Daily   │Food    │Travel  │  ← Chips / фильтр   │
│  └────────┴────────┴────────┘                     │
│                                                    │
│  All lessons:                                      │
│  ┌─────────────────────────────────────────────┐  │
│  │  [thumb] สวัสดี — hello chain · 90s       │  │
│  │  Tones: M L M                                │  │
│  └─────────────────────────────────────────────┘  │
│  ┌─────────────────────────────────────────────┐  │
│  │  [thumb] Ordering food · 3 min               │  │
│  └─────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

### Состояние 2: PLAYER (основной режим)
```
┌─────────────────────────────────────────────────────┐
│  ← Library        Greetings            🔊 ⋮       │
├─────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────┐  │
│  │                                             │  │
│  │           [ VIDEO / expo-av ]               │  │
│  │                                             │  │
│  └─────────────────────────────────────────────┘  │
│  ━━━━●━━━━━━━━━━━━ 0:42 / 1:20                    │ ← scrubber
│                                                    │
│  Subtitles (karaoke by syllable):                 │
│  สวัสดี ครับ  ผม ชื่อ...                           │
│  [Mid][Low][High] ...  ← подсветка текущего слога │
│                                                    │
│  Controls:                                        │
│  [ A-B Loop ] [ 0.75x ] [ 1x ] [ 1.25x ]          │
│  [ Replay sentence ]                              │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │     [ ● Shadow: record my line ]            │  │ ← опционально MVP+1
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Tip: Say it together with the speaker, then solo. │
├─────────────────────────────────────────────────────┤
│  (Bottom tabs: скрыть в полноэкранном плеере)      │
└─────────────────────────────────────────────────────┘
```

### Состояние 3: RECORDING / COMPARE (расширение)
```
┌─────────────────────────────────────────────────────┐
│  ← Player          Recording...        ⏱️ 00:05    │
├─────────────────────────────────────────────────────┤
│  Target sentence: สวัสดีครับ                       │
│  [▶ Reference]                                    │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │  [ Mini waveform / level meter ]            │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  [ ■ Stop ]   [ Cancel ]                          │
│                                                    │
│  After stop → краткий тональный фидбек (как       │
│  Word Practice) или только самопрослушивание.     │
└─────────────────────────────────────────────────────┘
```

### Состояние 4: LESSON COMPLETE
```
┌─────────────────────────────────────────────────────┐
│  Lesson complete                                  │
├─────────────────────────────────────────────────────┤
│  Greetings — you watched 100%                     │
│  Loops used: 4  ·  Shadow takes: 2                 │
│                                                    │
│  [ Next lesson ]  [ Back to library ]             │
│  [ Add vocabulary to Flashcards ]                  │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

### Состояние 5: LOADING
```
┌─────────────────────────────────────────────────────┐
│  Shadowing                     ⚙️ 🔍 👤           │
├─────────────────────────────────────────────────────┤
│  Loading lessons...                                │
│  [Skeleton grid of thumbnails]                     │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

### Состояние 6: EMPTY
```
┌─────────────────────────────────────────────────────┐
│  Shadowing                     ⚙️ 🔍 👤           │
├─────────────────────────────────────────────────────┤
│  No lessons available                              │
│                                                    │
│  Download lesson packs in Settings or when online.  │
│  [ Refresh ]                                       │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

### Состояние 7: ERROR (воспроизведение)
```
┌─────────────────────────────────────────────────────┐
│  ← Library        Error                            │
├─────────────────────────────────────────────────────┤
│  ⚠️ Could not load video                           │
│                                                    │
│  Check connection or try lower quality.           │
│                                                    │
│  [ Retry ]  [ Audio only mode ]                   │
└─────────────────────────────────────────────────────┘
```

## 🎨 Компоненты React Native Paper

### Мини-плеер + меню качества
```javascript
import { Video } from 'expo-av';

<Card style={{ margin: 16, overflow: 'hidden' }}>
  <Video
    ref={videoRef}
    source={{ uri: lesson.videoUrl }}
    useNativeControls={false}
    onPlaybackStatusUpdate={onStatus}
    style={{ width: '100%', aspectRatio: 16 / 9 }}
  />
</Card>
<Slider value={position} onValueChange={seek} minimumValue={0} maximumValue={duration} />
<Menu visible={menuVisible} anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}>
  <Menu.Item onPress={() => setQuality('720')} title="720p" />
  <Menu.Item onPress={() => setQuality('480')} title="480p" />
</Menu>
```

### Субтитры с подсветкой слога
```javascript
<View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 16 }}>
  {cues.map((cue, i) => (
    <Chip
      key={i}
      mode={activeCue === i ? 'flat' : 'outlined'}
      style={{ margin: 4, backgroundColor: activeCue === i ? toneColor(cue.tone) : undefined }}
      onPress={() => seekTo(cue.startMs)}
    >
      {cue.text}
    </Chip>
  ))}
</View>
```

## 🔗 Навигация

### Stack
```
ShadowingStack:
  - VideoLibrary
  - LessonPlayer (fullscreen option)
  - (optional) RecordingAnalysis — общий модуль с Word Practice
```

### Переходы
1. Тап по слугу в субтитрах → seek видео.
2. **Dictionary** — долгое нажатие на слово → поиск (если есть разметка слов).
3. **Flashcards** — из экрана завершения урока.

## 📱 Адаптация

- **Landscape:** видео на всю ширину, субтитры полосой снизу.
- **PiP / background audio:** опционально позже (iOS/Android политики).

## 🚀 Производительность

1. **Свои** MP4/HLS с CDN; несколько URL качеств в манифесте урока; кэш просмотра и офлайн-пакеты (premium).
2. **Cue JSON** маленький — отдавать вместе с метаданными урока или отдельным запросом.
3. Предзагрузка **следующего** урока из плейлиста низким приоритетом.
4. Рантайм-транскрипция для пользователя **не** требуется — синхронизация только по `startMs`/`endMs` в данных.

## 🧪 Тестовые сценарии

### Тест 1: Базовый просмотр
```
1. Library → открыть урок
2. Проверить play/pause, scrubber
3. A-B loop на одной фразе
```

### Тест 2: Караоке-слоги
```
1. Во время воспроизведения проверить смену activeCue
2. Tap по чипу → seeks correctly
```

### Тест 3: Ошибка сети
```
1. Начать урок, оборвать сеть
2. Показ ERROR с Retry / audio-only если есть кэш
```

## 🔗 Связанные экраны

**← Назад:** Bottom tabs  
**→ Вперёд:** [Dictionary Screen](./dictionary.md), [Word Practice Screen](./word-practice.md), [Flashcards Screen](./flashcards.md)

---

*Последнее обновление: 2026-03-28*  
*Статус: ASCII wireframe — Complete*
